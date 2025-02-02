import React from 'react'
import "./About.css"

export default function About() {
  return (
        <section className="about d-flex justify-content-center align-items-center" id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-12 justify-content-center align-items-center d-flex flex-column gap-4">

                        <h1 className=' h1 text-uppercase text-center text-white'>about component</h1>
                        <div className="space text-center">
                            <div className="star">
                                <i className='fa-solid fa-star fa-lg'></i>
                            </div>
                        </div>
                        <div className="text d-flex flex-column gap-4 flex-md-row">
                            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

                            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
    
                    </div>
                </div>
            </div>
        </section>
  )
}
