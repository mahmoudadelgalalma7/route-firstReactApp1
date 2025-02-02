import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
  <>
    <footer className='text-white py-5'>
        <div className="container">
            <div className="row text-center justify-content-between gy-5">
                <div className="col-12 col-sm-4">
                    <div className="location">
                        <h5 className="text-uppercase">Location</h5>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="icons">
                        <h5 className="text-uppercase">Around The Web</h5>
                        <ul className='mt-3 list-unstyled d-flex align-items-center justify-content-center gap-3'>
                            <li>
                                <a href="#" className='border p-2 rounded-circle'><i className="fa-brands fa-facebook-f text-white  rounded-circle fa-fw fa-lg text-center"></i></a>
                            </li>
                            <li>
                                <a href="#" className='border p-2 rounded-circle'><i className="fa-brands fa-facebook-f text-white  rounded-circle fa-fw fa-lg text-center"></i></a>
                            </li>
                            <li>
                                <a href="#" className='border p-2 rounded-circle'><i className="fa-brands fa-facebook-f text-white  rounded-circle fa-fw fa-lg text-center"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="about">
                        <h5 className="text-uppercase">About Freelancer</h5>
                        <p>
                            Freelance is a free to use, licensed Bootstrap theme created by Route
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="copyright  py-4">
        <div className="container text-center justify-content-center align-items-center">
            <p className="text-white m-0">Copyright © Your Website 2021</p>
        </div>
    </div>
  </>
  )
}
