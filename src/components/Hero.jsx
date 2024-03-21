

import { IoCloudDownloadOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Hero = ({user}) => {

  return (
<div className="hero text-center" id="home">
<div className="container">
  <div className="banner-outline has-after">
    <div className="hero-banner img-holder has-after" data-tilt="">
      <img
        src={user.avatar.url}
        width={500}
        height={680}
        alt="Drew Hays"
        className="img-cover"
      
      />
    </div>
  
    <span className="span title">{user.name}</span>
  </div>
  <div className="hero-content">
    <h1 className="h1 title">Get Your Product Identity From Me.</h1>
    <div className="wrapper">
      <a href="#" className="btn btn:hover">
        <span className="span">Download CV</span>
        <IoCloudDownloadOutline />
      </a>
      <p className="hero-text">
        From device to cloud to edge Innovate from anywhere with secure
      </p>
      
    </div>
  </div>
  <img
    src="/assets/hero-shape-1.png"
    width={559}
    height={232}
    alt="shape"
    className="shape shape-1"
  />
  <img
    src="/assets/hero-shape-2.png"
    width={1358}
    height={497}
    alt="shape"
    className="shape shape-2"
  />
</div>
</div>

  )
}
Hero.propTypes = {
  user: PropTypes.shape({
     name: PropTypes.string,
     avatar: PropTypes.shape({
       url: PropTypes.string,
     }),
  }),
 };

export default Hero