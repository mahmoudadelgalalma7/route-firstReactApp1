import React from 'react'
import imgPerson from '../../assets/avataaars.svg'
import './Home.css'

export default function Home() {
  return (
    <section className="home d-flex justify-content-center align-items-center" id="home">
        <div className="container">
            <div className="row">
                <div className="col-12 justify-content-center align-items-center d-flex flex-column gap-4">
                    <div className="image">
                        <img src={imgPerson} alt="person" className='w-100 h-100'/>
                    </div>
                    <h1 className='h1 text-uppercase text-center text-white'>Start Framework</h1>
                    <div className="space text-center">
                        <div className="star">
                            <i className='fa-solid fa-star fa-lg'></i>
                        </div>
                    </div>
                    <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>

                </div>
            </div>
        </div>
    </section>
  )
}
