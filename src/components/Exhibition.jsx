
import { BiImage } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { IoLogoSoundcloud } from "react-icons/io5";

const Exhibition = () => (
 <div className="tab-content" data-tab-content="exhibition">
    <ul className="grid-list">
      <li>
        <div className="exhibition-card">
          <figure className="card-banner img-holder" data-tilt="">
            <img
              src="/assets/exhibition-1.jpg"
              width={376}
              height={200}
              loading="lazy"
              alt="image"
              className="img-cover"
            />
          </figure>
          <div className="card-icon">
            <BiImage />
          </div>
        </div>
      </li>
      <li>
        <div className="exhibition-card">
          <figure className="card-banner img-holder" data-tilt="">
            <img
              src="/assets/exhibition-2.jpg"
              width={376}
              height={200}
              loading="lazy"
              alt="image"
              className="img-cover"
            />
          </figure>
          <div className="card-icon">
            <FaYoutube />
          </div>
        </div>
      </li>
      <li>
        <div className="exhibition-card">
          <figure className="card-banner img-holder" data-tilt="">
            <img
              src="/assets/exhibition-3.jpg"
              width={376}
              height={200}
              loading="lazy"
              alt="image"
              className="img-cover"
            />
          </figure>
          <div className="card-icon">
            <IoLogoSoundcloud />
          </div>
        </div>
      </li>
      <li>
        <div className="exhibition-card">
          <figure className="card-banner img-holder" data-tilt="">
            <img
              src="/assets/exhibition-4.jpg"
              width={376}
              height={200}
              loading="lazy"
              alt="image"
              className="img-cover"
            />
          </figure>
          <div className="card-icon">
            <BiImage />
          </div>
        </div>
      </li>
      <li>
        <div className="exhibition-card">
          <figure className="card-banner img-holder" data-tilt="">
            <img
              src="/assets/exhibition-5.jpg"
              width={376}
              height={200}
              loading="lazy"
              alt="image"
              className="img-cover"
            />
          </figure>
          <div className="card-icon">
            <BiImage />
          </div>
        </div>
      </li>
      <li>
        <div className="exhibition-card">
          <figure className="card-banner img-holder" data-tilt="">
            <img
              src="/assets/exhibition-6.jpg"
              width={376}
              height={200}
              loading="lazy"
              alt="image"
              className="img-cover"
            />
          </figure>
          <div className="card-icon">
            <BiImage />
          </div>
        </div>
      </li>
    
    </ul>
 </div>
);

export default Exhibition;
