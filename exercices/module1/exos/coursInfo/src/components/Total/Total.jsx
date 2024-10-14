import PropTypes from 'prop-types';

const Total = (props) => {
    return (
      <p>Number of exercises {props.nbExercices}</p>
    )
  }

  Total.propTypes = {
    nbExercices: PropTypes.string.isRequired,
  };

  export default Total;