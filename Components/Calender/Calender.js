import styles from './Calender.module.css';
import { Fragment, useEffect, useState } from 'react';
import Calendar from 'react-calendar'; 
import moment from 'moment';
import AddEvent from './AddEvent';
// import { addReminder } from 'lib/prisma/reminders';
import { useSession} from "next-auth/react"
import LoadingSpinner from 'Components/Spinner/Spinner';
const Cart=(props)=>{
    const [date, setDate] = useState(new Date())
    const [isSame, setIsSame] = useState(new Date())
    const [addBtn, setaddBtn] = useState(false);
    const [reminders,setReminders] = useState();
    const [datesToHighlight,setdatesToHighlight] =useState();
    const [loading,setIsLoading] = useState(true);
    const { data: session } = useSession()

    const handleDateChange = (date) => {
        setDate(date)
        const calendarDate = moment(date);
        const currentDate = moment();
      
        console.log("calendarDate", calendarDate.format());
        console.log("currentDate", currentDate.format());
      
        setIsSame(calendarDate.isSame(currentDate, 'day'));

        // calculate position of selected date
        // const selectedDateElement = document.querySelector(`[aria-label="${date.toDateString()}"]`);
        // const selectedDateElementPosition = selectedDateElement.getBoundingClientRect();
        // setPopupPosition({
        // top: selectedDateElementPosition.top + selectedDateElementPosition.height + 5,
        // left: selectedDateElementPosition.left,
        // });
    };
    const addEventHandler=async(message)=>{
        console.log(message)
        const dataToAdd = {userEmail:session.user.email,
            message:message,
            date:date.toLocaleDateString()}
        // const retReminder = addReminder()

        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({reminderToAdd:dataToAdd})
        }
        await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Reminders/setReminders`,options)
        .then(async (response) => await response.json())
        .then((data) => {
          console.log("after setiing",data.newReminder);
          const updated = [...reminders,data.newReminder]
          setReminders(updated)
          setaddBtn(false); 

        });

    }
    useEffect(()=>{reminders ? setdatesToHighlight(reminders.map((item)=>{return(item.date);})):undefined},[reminders])
    useEffect(()=>{console.log(datesToHighlight)},[datesToHighlight])
    function isInArray(array, value) {
        return (array.find(item => {return item == value}) || []).length > 0;
      }
    function tileClassName({ date, view }) {
        const formattedDate = date.toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
        });
        // console.log(formattedDate)
        // console.log(typeof datesToHighlight[0])
        // console.log(datesToHighlight.includes(formattedDate))
        if (isInArray(datesToHighlight, formattedDate)) {
            console.log("success")
        // Return an object with a style property containing the inline styles
            return  "highlight";
        } else {
        return null;
        }
    }
    useEffect(()=>{
        const email = session.user.email;
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email})
        }
        fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Reminders/getReminders`,options)
        .then(async (response) => await response.json())
        .then((data) => {
          console.log("getting reminders",data.reminders);
          const tempArr = []
          const currentDate = moment();
          for (let i = 0; i < data.reminders.length; i++) {
            if (!currentDate.isSameOrAfter(data.reminders[i].date)){
                tempArr.push(data.reminders[i])
            }
          }
          
          setReminders(tempArr)

        });

    },[]);


    useEffect(()=>{
         (reminders && datesToHighlight)? setIsLoading(false):null
    },[reminders,datesToHighlight])
    return (
        <Fragment>
            {loading ? <LoadingSpinner></LoadingSpinner> : undefined}
            {addBtn ? <AddEvent onEventAdd={addEventHandler} onClose={()=>{setaddBtn(false);console.log("closed")}}></AddEvent>:undefined}
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <div className={styles.cont}>
                <div className={styles.titleCont}>
                    <div className={styles.CalTitle}>IGiftit<span className={styles.CalDot}>.</span> Calendar</div>
                    {!isSame ? <button onClick={()=>{setaddBtn(true)}}><img src='/static/images/icons/add-symbol.svg'></img></button> : undefined}
                </div>
                <div className={styles.desc}>You can now set reminders for specific events or choose to get a gift delivered on a specific date</div>
                {datesToHighlight && <Calendar onChange={handleDateChange} value={date} tileClassName={tileClassName}/>}
                    <div className={styles.eventTitle}>Upcoming Events</div>
                    {reminders && reminders.map((item)=>{
                        return(
                            <div key={Math.random()} className={styles.reminderCard}>
                                <div className={styles.message}>{item.message}</div>
                                <div className={styles.date}>{moment(item.date).format('dddd MMMM Y')}</div>
                            </div>
                        );
                    })}
            </div>
        </Fragment>
    );
}
export default Cart;