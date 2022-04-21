import ProfileImage from '../../assets/profile-image.png';

import './Profile.css';

const Profile = () => (
  <div className="Profile">
    <img src={ProfileImage} alt="Profile" />
    <div>
      <h2>Stefan Pribicevic</h2>
      <p>Professional Web Developer</p>
      <p>Chess player, avid book reader and movies lover</p>
    </div>
  </div>
)

export default Profile;