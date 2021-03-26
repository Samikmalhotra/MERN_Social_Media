import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/spinner'
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions'
import Experience from './Experience'
import Education from './Education'

const Dashboard = ({
    getCurrentProfile,
    auth:{user},
    profile:{loading, profile}
  }) => {
    useEffect(() => {
      getCurrentProfile();
    }, []);
  
    return loading && profile === null ? <Spinner/>:<Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i classname="fas fa-user">Welcome { user && user.name }</i>
        </p>
        {profile !== null ? <Fragment>
          <DashboardActions/>
          <Experience experience={profile.experience}/>
          <Education education={profile.education}/>
        </Fragment> :
         <Fragment>
            You have not yet setup a profile, please add some info <br/>
            <Link to = '/create-profile' className="btn btn-primary my-1" >Create Profile</Link>
         </Fragment> }
    </Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, { getCurrentProfile })(
    Dashboard
  );
