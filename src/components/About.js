import React, { useState } from 'react'
import Resume from '../assets/resume.pdf'

export default function About({sec2}) {

    const [aboutClicked, setAboutClicked] = useState(false);

    const mySkills = ["HTML", "CSS", "Javascript", "React", "C++", "Python", "Java", "MYSQL", "Git"];

    const education = [
      {
        id: 1,
        college: "Lendi Institute of Engineering and Technology",
        degree: "Bachelor of Technology",
        field: "Computer Science Engineering",
        year: "2019-2023",
        cgpa: 8.1
      },
      {
        id: 2,
        college: "Narayana Junior College",
        degree: "Intermediate Education",
        field: "MPC",
        year: "2017-2019",
        cgpa: 9.67
      },
      {
        id: 3,
        college: "Zilla Parishad High School",
        degree: "Secondary Education",
        field: "",
        year: "2016-2017",
        cgpa: 9.2
      }
    ]

  return (
    <div className='about-me' ref={sec2} >
        <section className='about-heading' >
            <h1>ABOUT ME</h1>
        </section>
        <section className='about-content' >
            <h3>I am a goal oriented entry level front-end developer. Has Computer Science Engineering background. </h3>
            <p>I am a front-end developer looking for exciting opportunities. Has Computer Science Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs. While I am not programming, I enjoy playing Cricket, photography and playing online games. Learning more to improve skill.</p>
            {!aboutClicked ? <button className='more-btn' onClick={() => setAboutClicked(true)} >MORE ABOUT ME</button> : 
              <div className='explore-more'>
                  <div className='download-resume'><a href={Resume} download>Download Resume<div className='black-dot'></div></a></div>
                  <div className='linkedin-logo'><a href='https://www.linkedin.com/in/harikrishna-meesala-145244226/' target='_blank' rel="noreferrer" ><i className="fa fa-linkedin" style={{fontSize: '24px', color: '#D3E97A'}} ></i></a></div>
                  <div className='linkedin-logo'><a href='https://github.com/HariMeesala' target='_blank' rel="noreferrer"><i className="fa fa-github" style={{fontSize: '24px', color: '#D3E97A'}} ></i></a></div>
              </div>
            }
        </section>
        {
          aboutClicked && 
          <section className='cap-about' >
              <div className='wide-proffessional-image'></div>
                <section className='capabilities'>
                  <h1 className='cap-heading'>MY CAPABILITIES</h1>
                    <div className='cap-content'>
                      <p>I am always looking to add more skills. Passionate in learning new skills. </p>
                        <div className='skills'>
                          {
                            mySkills.map((skill, index) => (
                              <div key={index} className='each-skill'>{skill}</div>
                            ))
                          }
                        </div>
                    </div>
                </section>
          <section className='my-education'>
            <div className='education-title'>
              <h1>MY EDUCATION</h1>
            </div>
            <div className='education-details'>
              {
                education.map((edu, index) => (
                  <div key={index} className='each-education'>
                    <h2>{edu.degree}</h2>
                    <h3>{edu.college}</h3>
                    <h4>{edu.field}</h4>
                    <div className='year'>
                      <p>Year</p>
                      <p>{edu.year}</p>
                    </div>
                    <div id='cgpa' className='year'>
                        <p>CGPA</p>
                        <p>{edu.cgpa}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
          </section>
        }
        
    </div>
  )
}
