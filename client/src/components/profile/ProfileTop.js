import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const ProfileTop = ({profile: {profile}
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={profile.user.avatar} alt="" />
      <h1 className="large">  {profile.user.name}</h1>
      <p className="lead">
        {profile.status} {profile.company ? <span> at {profile.company}</span> : null}
      </p>
      <p>{profile.location ? <span>{profile.location}</span> : null}</p>
      <div className="icons my-1">
        {profile.website ? (
          <a href={profile.website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        ) : null}
        {profile.social
          ? Object.entries(profile.social)
              .filter(([_, value]) => value)
              .map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${key} fa-2x`}></i>
                </a>
              ))
          : null}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps)(ProfileTop);