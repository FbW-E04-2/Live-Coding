import React,{useRef, useState} from "react";
import EmailJS from "emailjs-com"

export default function Contact() {
    const formRef= useRef()

    const [status,setStatus] = useState(false)


    const sendEmail=(e)=>{

    
        e.preventDefault()

         EmailJS.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_USER_ID)
        .then((result)=>{
            if(result.text==="OK"){
                setStatus(true)
            }
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <h1>Contact Us</h1>
      {status ? <h1>Succesfully sent! Thank you for your email </h1> : <form ref={formRef} onSubmit={sendEmail}>
        <label htmlFor="name"> Name: </label>
        <input type="text" name="user_name" id="name" />
        <br />

        <label>
          Email: <input type="email" name="user_email" />{" "}
        </label>
        <br />

        <label>Message: </label>
        <br />
        <textarea name="message" cols="30" rows="10"></textarea>
        <br />
        <button>send email</button>
      </form> }
     
    </div>
  );
}
