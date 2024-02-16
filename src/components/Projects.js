import React from 'react'
import MyProjects from './MyProjects'
import Portfolio from '../assets/portfolio_img.png'

export default function Projects({sec1}) {

    
    const projects = [
        {
            id: 1,
            title: "Responsive E Commerce webpage",
            description: "Responsive E commerce webpage using HTML, CSS and ReactJs",
            imageURL: "https://res.cloudinary.com/dz209s6jk/image/upload/v1678119471/Screenshots/ftt7irtlpknycfnbyam4.jpg",
            year: 2023,
            role: "Front-end Developer",
            liveURL: "https://658d6da33f910b009a2d4984--tourmaline-cannoli-6966f3.netlify.app/",
            githubURL: "https://github.com/HariMeesala/E-commerce-webpage"
        },
        {
            id: 2,
            title: "REST Countries API with color theme switcher",
            description: "A frontend challenge webpage using HTML, CSS, Javascript, React which retrieves data from Rest countries API. Enables dark mode and light mode based on user requirement.",
            imageURL: "https://raw.githubusercontent.com/MohamedAridah/frontendmentor_REST-Countries-API-with-color-theme-switcher/main/design/desktop-design-home-light.jpg",
            year: 2023,
            role: "Front-end Developer",
            liveURL: "https://stunning-klepon-2105b8.netlify.app/",
            githubURL: "https://github.com/HariMeesala/Countries-Information"
        },
        {
            id: 3,
            title: "Amazon clone",
            description: "It is a simple clone of Amazon website using HTML and CSS",
            imageURL: "https://www.versionmuseum.com/images/websites/amazon-website/amazon-website%5E2019%5Ehomepage-august.jpg",
            year: 2023,
            role: "Front-end Developer",
            liveURL: "https://boisterous-profiterole-02b2c3.netlify.app/",
            githubURL: "https://github.com/HariMeesala/Amazon-Clone"
        },
        {
            id: 4,
            title: "Covid cases Tracker",
            description: "A Responsive web application created by using javascript framework svelte. covid cases data of different states in India fetches dynamically from the API based on user request.",
            imageURL: "https://m.economictimes.com/thumb/msid-75000925,width-600,resizemode-4/coronavirus-cases-in-india-live-news-latest-updates-april6.jpg",
            year: 2023,
            role: "Front-end Developer",
            liveURL: "https://fb7ge.csb.app/",
            githubURL: ""
        },
        {
            id: 5,
            title: "Portfolio Webpage",
            description: "This is my portfolio webpage developed using Reactjs website that showcases and highlights my work, achievements, skills, and experiences",
            imageURL: Portfolio,
            year: 2023,
            role: "Front-end Developer",
            liveURL: "",
            githubURL: ""
        },
    ]


  return (
    <div className='my-projects' ref={sec1} >
        <section className='projects-title'>
            <h1>FEATURED PROJECTS</h1>
            <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
        </section>
        <section className='project-content' >
            {
                projects.map((project) => (
                    <MyProjects key={project.id} title={project.title} description={project.description} imageURL={project.imageURL} year={project.year} role={project.role} liveURL={project.liveURL} githubURL={project.githubURL} />
                ))
            }
        </section>
    </div>
  )
}
