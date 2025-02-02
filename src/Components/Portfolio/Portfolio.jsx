import React, { useEffect, useState } from 'react'
import "./Portfolio.css"
import image1 from "../../assets/1.png"
import image2 from "../../assets/2.png"

export default function Portfolio() {
    const [previewImage, setpreviewImage] = useState('')

    useEffect(() => {
        let primaryImageBox = document.getElementById('primaryImageBox');
    },[])
    
    function isClicked(img) {
        primaryImageBox.classList.replace('d-none', 'd-flex');
        setpreviewImage(img);
        
    }
    function closeBox(e) {
        if(e.target.id === 'primaryImageBox') {
            primaryImageBox.classList.replace('d-flex', 'd-none');
        }
    }

  return (
    <section className="portfolio d-flex justify-content-center align-items-center" id='portfolio'>
            <div className="container">
                <div className="row">
                    <div className="col-12 justify-content-center align-items-center d-flex flex-column gap-4">

                        <h1 className=' h1 text-uppercase text-center'>portfolio component</h1>
                        <div className="space text-center">
                            <div className="star">
                                <i className='fa-solid fa-star fa-lg'></i>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="item position-relative" onClick={()=> {isClicked(image1)} }>
                                    <img src={image1} alt="image1" className='w-100 h-100 rounded-3' />
                                    <div className="layout rounded-3 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                                        <i className='fa-solid fa-plus fa-6x'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="item position-relative" onClick={()=> {isClicked(image2)} }>
                                    <img src={image2} alt="image1" className='w-100 h-100 rounded-3' />
                                        <div className="layout rounded-3 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                                            <i className='fa-solid fa-plus fa-6x'></i>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="item position-relative" onClick={()=> {isClicked(image1)} }>
                                    <img src={image1} alt="image1" className='w-100 h-100 rounded-3' />
                                        <div className="layout rounded-3 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                                            <i className='fa-solid fa-plus fa-6x'></i>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="item position-relative" onClick={()=> {isClicked(image1)} }>
                                    <img src={image1} alt="image1" className='w-100 h-100 rounded-3' />
                                        <div className="layout rounded-3 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                                            <i className='fa-solid fa-plus fa-6x'></i>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="item position-relative" onClick={()=> {isClicked(image1)} }>
                                    <img src={image1} alt="image1" className='w-100 h-100 rounded-3' />
                                        <div className="layout rounded-3 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                                            <i className='fa-solid fa-plus fa-6x'></i>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="item position-relative" onClick={()=> {isClicked(image2)} }>
                                    <img src={image2} alt="image1" className='w-100 h-100 rounded-3' />
                                        <div className="layout rounded-3 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                                            <i className='fa-solid fa-plus fa-6x'></i>
                                        </div>
                                </div>
                            </div>

                        </div>
                        
                        <div id='primaryImageBox' onClick={closeBox} className="primaryImageBox d-none vh-100 vw-100 bg-opacity-50 bg-primary position-fixed top-0 start-0 d-flex justify-content-center align-items-center">
                            <div className="primaryImage  w-100 h-50">
                                <img src={previewImage} alt="image1" className='w-100 h-100' />
                            </div>
                        </div>

    
                    </div>
                </div>
            </div>
        </section>
  )
}
