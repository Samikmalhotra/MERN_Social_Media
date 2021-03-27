import React from 'react'
import {Link} from 'react-router-dom'


const DashboardActions = () => {
    return (
    <div class="dash-buttons">
        <Link to="/edit-profile" class="btn ">
        <i class="fas fa-user-circle "></i> Edit Profile</Link>
        <Link to="/add-experience" class="btn ">
        <i class="fab fa-black-tie "></i> Add Experience</Link>
        <Link to="/add-education" class="btn ">
        <i class="fas fa-graduation-cap "></i> Add Education</Link>
    </div>
    )
}

export default DashboardActions
