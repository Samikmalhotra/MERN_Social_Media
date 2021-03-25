import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/spinner'
import { getCurrentProfile } from '../../actions/profile';

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
    </Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
    
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });
  
  export default connect(mapStateToProps, { getCurrentProfile })(
    Dashboard
  );
