import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <form >
                <label htmlFor="name" > Name: </label>
                <input type="text" name="name" id="name" /><br />

                <label>Email:   <input type="email" name="email" /> </label>
                <br />

                <label>Message: </label><br />
                <textarea name="message" cols="30" rows="10"></textarea><br />
                <input type="submit" value="send email"/>
                
                

            </form>
        </div>
    )
}
