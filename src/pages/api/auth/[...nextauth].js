import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import { getUserbyemail,createUser } from "lib/prisma/users";
export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      name:"Credentials",
      async authorize(credentials,req){
        // console.log("in authorize");
        // console.log(credentials);
        const result = (await getUserbyemail(credentials.email)).user
        // console.log("In creds",result);
        if (!result){
            throw new Error("No User Found!");
        }
        const checkPassword = await compare(credentials.password,result.password)
        // console.log("Cjeck pass")
        // console.log("result,",result);
        if (!checkPassword || result.email !== credentials.email){
            // console.log(type(result.email))
            // console.log(type(credentials.email))
            throw new Error("Username Password donot match")
           
        }
        // console.log("result,",result);
        return result
      }
    }),
  ],
  callbacks:{
    async signIn(type) {
      // console.log("Signin callback! ",type);
      if (type.account.provider === 'google'){
        const result = (await getUserbyemail(type.profile.email)).user
        if (!result){
          const {user, error} = await createUser({username:type.profile.name,email:type.profile.email,password:"",addresses:await JSON.stringify([])});
          if (error){
              console.log("in error")
              throw new Error(error);
          }
          console.log("user created: ",user)
          return true;
        }
        console.log('false')
        return true;
      }
      console.log("outer")
      return true;
    },
  },
  secret:"GxhikyXCe+AzHlwhlrzy+M6lEPP5pqZuu+SqAVBY8ng="
})