import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
	return <button onClick={onClick}>Dohvati</button>;
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Button;
