import React from 'react'
import "./register.css"

const RegisterPage = () => {
    return (
        <section className='registerPageContainer '>
            <div className="form-container py-3">
                <div className="text-cn text-center mb-4 ">
                    <h3 className='text-warning'>Register</h3>
                    <p className='text-primary'>Please Fill Out This Form</p>
                </div>
                <form method='post' className='px-3'>
                    <div className="inp-container" id="name-container">
                        <input type="text" name="fname" id="fname" placeholder='First Name' required minLength={5} />
                        <input type="text" name="lname" id="lname" placeholder='Last Name' required minLength={5} />
                    </div>
                    <div className="inp-container" >
                        <input type="email" name="email" id="email" placeholder='Email Address' required />
                    </div>
                    <div className="inp-container" >
                        <input type="text" name="username" id="username" placeholder='Username' required minLength={5} />
                    </div>
                    <div className="inp-container" >
                        <input type="password" name="password" id="password" placeholder='Password' required />
                    </div>

                    <div className="btn-container text-center mb-3">
                        <button className='btn btn-outline-warning btn-lg '>Register</button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default RegisterPage