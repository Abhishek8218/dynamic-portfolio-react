

const Awards = () => (
 <div className="tab-content" data-tab-content="awward">
    <h3 className="h4 title section-title">
      We’re a team of creatives who are excited about unique ideas and help IT-tech companies to make identity by crafting UI/UX.
    </h3>
    <ul className="grid-list">
      <li>
        <div className="award-card">
          <figure className="card-banner img-holder" data-tilt="">
            <img
              src="/assets/awward-1.jpg"
              width={534}
              height={383}
              loading="lazy"
              alt="certificate"
              className="img-cover"
            />
          </figure>
        </div>
      </li>
      <li>
        <div className="award-card">
          <figure className="card-banner img-holder" data-tilt="">
            <img
              src="/assets/awward-2.jpg"
              width={534}
              height={383}
              loading="lazy"
              alt="certificate"
              className="img-cover"
            />
          </figure>
        </div>
      </li>
      <li>
        <div className="award-card">
          <figure className="card-banner img-holder" data-tilt="">
            <img
              src="/assets/awward-3.jpg"
              width={534}
              height={383}
              loading="lazy"
              alt="certificate"
              className="img-cover"
            />
          </figure>
        </div>
      </li>
    
    </ul>
 </div>
);

export default Awards;
