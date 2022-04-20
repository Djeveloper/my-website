import ProfileImage from '../../assets/profile-image.png';

import './Profile.css';

const Profile = () => (
  <div className="Profile">
    <img src={ProfileImage} alt="Profile" />
    <h2>Stefan Pribicevic</h2>
    <p>Web developer</p>
  </div>
)

export default Profile;