import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/spinner'
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions'
import Experience from './Experience'
import Education from './Education'

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth:{user},
    profile:{loading, profile}
  }) => {
    useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);
  
    return loading && profile === null ? <Spinner/>:<Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i classname="fas fa-user">Welcome { user && user.name }</i>
        </p>
        {profile !== null ? <Fragment>
          <DashboardActions/>
          <Experience experience={profile.experience}/>
          <Education education={profile.education}/>

          <div className="my-2">
            <button className="btn btn-danger" onClick={()=>deleteAccount()}>
              <i className="fas fa-user-minus"/>Delete My Account
            </button>
          </div>
        </Fragment> :
         <Fragment>
            You have not yet setup a profile, please add some info <br/>
            <Link to = '/create-profile' className="btn btn-primary my-1" >Create Profile</Link>
         </Fragment> }
    </Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
    Dashboard
  );
