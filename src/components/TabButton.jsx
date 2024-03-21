
import PropTypes from 'prop-types';

const TabButton = ({ label = 'Default Label', active, onClick }) => (
    <li className="tab-btn-item">
       <button
         className={`tab-btn title h6 ${active ? 'active' : ''}`}
         data-tab-btn={label.toLowerCase()}
         onClick={onClick}
       >
         {label}
       </button>
    </li>
);

TabButton.propTypes = {
 label: PropTypes.string.isRequired,
 active: PropTypes.bool,
 onClick: PropTypes.func,
};

export default TabButton;