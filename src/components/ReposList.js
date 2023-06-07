import PropTypes from 'prop-types';

const RepoList = ({ name }) => {
	return <li>{name}</li>;
};
RepoList.propTypes = {
	name: PropTypes.string.isRequired,
};
export default RepoList;
