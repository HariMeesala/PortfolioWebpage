import React from 'react'

import Resume from "../assets/resume.pdf"

export default function Contact({sec3}) {
  return (
    <div className='contact-page' ref={sec3} >
        <section className='contact-content' >
            <h1>LET'S CONNECT</h1>
            <p className='mail' ><span>say hello at </span><a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank' rel="noreferrer">harimeesalo@gmail.com</a></p>
            <p className='mail'><span>For more info, here's my </span><a href={Resume} >resume</a></p>
            <div className='social-icons'>
            <div className='linkedin-logo'><a href='https://www.linkedin.com/in/harikrishna-meesala-145244226/' target='_blank' rel="noreferrer" ><i className="fa fa-linkedin" style={{fontSize: '24px', color: '#D3E97A'}} ></i></a></div>
                  <div className='linkedin-logo'><a href='https://github.com/HariMeesala' target='_blank' rel="noreferrer"><i className="fa fa-github" style={{fontSize: '24px', color: '#D3E97A'}} ></i></a></div>
                  <div className='linkedin-logo'><a href='https://www.linkedin.com/in/harikrishna-meesala-145244226/' target='_blank' rel="noreferrer" ><i className="fa fa-twitter" style={{fontSize: '24px', color: '#D3E97A'}} ></i></a></div>
                  <div className='linkedin-logo'><a href='https://github.com/HariMeesala' target='_blank' rel="noreferrer"><i className="fa fa-instagram" style={{fontSize: '24px', color: '#D3E97A'}} ></i></a></div>
            </div>
            <p className='copyright' >© 2023 Harikrishna Meesala</p>
        </section>
        <section>
            <form action='' >
                <label>Name</label>
                <input type='text' name="username"  placeholder='John Doe' />
                <label>Email</label>
                <input type='email' name="email" />
                <label>Subject</label>
                <input type='text' name="subject" />
                <label>Message</label>
                <textarea></textarea>
                <button type='submit'>Submit</button>
            </form>
        </section>
    </div>
  )
}
