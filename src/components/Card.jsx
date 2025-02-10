import PropTypes from 'prop-types';

const Card = ({ title, color }) => {
    return (
        <div className="shadow-md rounded-lg p-4" style={{backgroundColor: color}}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <button className="mt-2 text-white py-1 px-3 rounded hover:bg-neutral-600 border-2 border-neutral-800">
                View Details
            </button>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string
};

export default Card;