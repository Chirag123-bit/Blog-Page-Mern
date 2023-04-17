import React from 'react'
import "./profile.css"
import user from "../static/images/sample.png"
import ProfileTab from './ProfileComponent/ProfileTab'

const ProfilePage = () => {
    return (
        <section>
            <div className="profile-container border border-2 border-warning">
                <div className="image-container2">
                    <img src={user} alt="User" className='img-fluid' />
                </div>
                <div className="other-container">
                    <div className="name-btn-container d-flex justify-content-between mb-3">
                        <h5>Chirag Simkhada</h5>
                        <button className='btn btn-warning btn-sm'>Edit Profile</button>
                    </div>
                    <ProfileTab />

                </div>
            </div>
        </section>
    )
}

export default ProfilePage