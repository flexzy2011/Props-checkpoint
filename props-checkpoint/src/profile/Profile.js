import React from "react";
import PropTypes from "prop-types";

//The profile component gets data (fullName, bio, profession) as props, and gets image as children props,
//and the function handleName functions as a prop that sends an alert message with the name of the profile user.
const Profile = (props) => {
  props.handleName(`I am  ${props.fullName} `);
  return (
    <>
      <img src={props.src} alt="" />
      {props.children}
      <h2>{props.fullName}</h2>
      <p> {props.bio}</p>
      <h5>I am a {props.profession}</h5>
      { <button onClick={() => props.handleName(`I m ${props.fullName} `)}>
        Click Me
      </button> }
    </>
  );
};

/*Define the default props for Profile component. */
Profile.defaultProps = {
  fullName: "Felix Akinloye",
  bio:
    "A Frontend Developer  ",

  profession: "Frontend Developer",
  
};

/*Use PropsType to check props. */
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string,
  bio: PropTypes.string,
  src: PropTypes.string,
};
export default Profile;