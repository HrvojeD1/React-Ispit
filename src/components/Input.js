import PropTypes from 'prop-types';

const Input = ({ value, onChange }) => {
	return (
		<input
			type='text'
			placeholder='Upišite username'
			value={value}
			onChange={onChange}
		></input>
	);
};

Input.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Input;
