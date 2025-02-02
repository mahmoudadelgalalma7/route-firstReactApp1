import React, { useState } from 'react'
import "./Contact.css"

export default function Contact() {
        const [values, setvalues] = useState([
            { userName: '' },
            { userAge: '' },
            { userEmail: '' },
            { userPassword: '' }
        ])
        function testChange(e){
            if (e.target.value !== ''){
                e.target.previousElementSibling.classList.replace('hidden', 'visible');
            } else {
                e.target.previousElementSibling.classList.replace('visible', 'hidden');
            }
        }

  return (
        <section className="contact d-flex justify-content-center align-items-start" id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-12 justify-content-center align-items-center d-flex flex-column gap-4">
                        <h1 className='text-uppercase text-center h1'>contact section</h1>
                        <div className="space text-center">
                            <div className="star">
                                <i className='fa-solid fa-star fa-lg'></i>
                            </div>
                        </div>
                        
                        <form action="#" className="form d-flex flex-column gap-4 mt-5 w-100">
                            <div className='position-relative overflow-hidden d-flex flex-column gap-1'>
                                <label className='hidden' htmlFor="userName">userName :</label>
                                <input type="text" name="userName" id='userName' value={values.userName} className='z-2 form-control' placeholder='userName' onInput={testChange}/>
                            </div>
                            <div className='position-relative overflow-hidden d-flex flex-column gap-1'>
                                <label className='hidden' htmlFor="userAge">userAge :</label>
                                <input  type="text" name="userAge" id='userAge' value={values.userAge} className='z-2 form-control' placeholder='userAge' onInput={testChange}/>
                            </div>
                            <div className='position-relative overflow-hidden d-flex flex-column gap-1'>
                                <label className='hidden' htmlFor="userEmail">userEmail :</label>
                                <input  type="email" name="userEmail" id='userEmail' value={values.userEmail} className='z-2 form-control' placeholder='userEmail' onInput={testChange}/>
                            </div>
                            <div className='position-relative overflow-hidden d-flex flex-column gap-1'>
                                <label className='hidden' htmlFor="userPassword">userPassword :</label>
                                <input  type="password" name="userPassword" id='userPassword' value={values.userPassword} className='z-2 form-control' placeholder='userPassword' onInput={testChange}/>
                            </div>
                            <button type='button' className='btn btn-primary align-self-start'>Send Message</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}


