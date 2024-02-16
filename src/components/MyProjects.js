import React from 'react'

export default function MyProjects({title, description, imageURL, year, role, liveURL, githubURL}) {

  return (
    <div className='flex-div'>
        <section className='project-image' >
            <div className='project-inner-image' style={{backgroundImage: `url(${imageURL})`}}></div>
        </section>
        <section className='project-details' >
            <h2 className='project-title' >{title}</h2>
            <p className='description' >{description}</p>
            <h2 className='info'>PROJECT INFO</h2>
            <hr />
            <div className='year'>
                <p>Year</p>
                <p>{year}</p>
            </div>
            <div className='year'>
                <p>Role</p>
                <p>{role}</p>
            </div>
            <div className='urls'>
                <a href={liveURL} className='right-arrow' >Live URL<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</a>
                <a href={githubURL} >{githubURL ? "Github URL" : ""}{githubURL && <i className="fa fa-github" style={{fontSize: '24px', color: '#D3E97A'}}></i>}</a>
            </div>
        </section>
    </div>
  )
}
