
import PropTypes from 'prop-types';

const Services = ( {services = []}) => {
 return (
    <section className="service text-center" aria-label="my services" id="service">
      <div className="container">
        <ul className="service-list">
          {services.slice(0,5).map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-card">
                <div className="card-icon" style={{ width: '80px', height: '80px' }}>
                 {service.image && service.image.url && (
                    <img
                      src={service.image.url}
                      
                      width={80}
                      height={80}
                      loading="lazy"
                      alt={service.name}
                      
                    />
                 )}
                </div>
                <h3 className="card-title">
                 <a href="#">
                    {service.name}
                 </a>
                </h3>
              
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
 );
};

Services.propTypes = {
  services: PropTypes.arrayOf(
     PropTypes.shape({
       image: PropTypes.shape({
         url: PropTypes.string,
       }),
       name: PropTypes.string,
     })
  ),
 };

export default Services;