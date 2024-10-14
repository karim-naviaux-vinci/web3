import PropTypes from 'prop-types';


const Part = (props) => {
    return (
      <p>{props.part} {props.exercice}</p>
    )
  }

Part.propTypes = {
    part: PropTypes.string.isRequired,
    exercice: PropTypes.string.isRequired
};

const Content = (props) => {
    return (
      <div>
        <Part part={props.part} exercice={props.exercice} />
      </div>
    )
  }

Content.propTypes = {
    part: PropTypes.string.isRequired,
    exercice: PropTypes.string.isRequired
};

export default Content;