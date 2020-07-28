import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
    return (
        <div style={{textAlign:"center",border:"3px solid black",width:"350px",height:"500",marginLeft:"200px",color:'back'}}>
            <p>Fullname:
            <a style={{textDecoration:"none"}} href="/" onClick={props.handleName}>{props.fullname}</a>
            </p>
            <p>Bio: {props.bio}</p>
            <p>Profession: {props.profession}</p>
            <p>{props.children}</p>
      
       </div>
    )
}
Profile.defaultProps = {
    fullname:  "the fullname hasn't passed",
    bio: "the bio hasn't passed",
    profession:"the profession hasn't passed",
    children: "your profile photo hasn't passed",
    handleName: "your function hasn't passed",
  };

  Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.object,
    handleName: PropTypes.func,
  }

export default Profile;