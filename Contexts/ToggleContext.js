import { createContext, useContext,useState, useEffect } from 'react'
const ToggleContext = createContext({
  toggle:false,
  trigger: ()=>{},
  manualTrigger:()=>{}
});

export const ToggleContextProvider=(props)=>{
    
    const [toggle,setToggle] = useState();

    const triggerHandler=()=>{
        setToggle(prev=>!prev)
    }
    const manualTriggerHandler=(option)=>{
        setToggle(option)
    }
    useEffect(()=>{
        console.log("toggle changed",toggle)
    },[toggle])
    return (
        <ToggleContext.Provider value={
            {
                toggle:toggle,
                trigger: triggerHandler,
                manualTrigger:manualTriggerHandler
            }
         }>
            {props.children}
        </ToggleContext.Provider>
    );
};
export default ToggleContext;