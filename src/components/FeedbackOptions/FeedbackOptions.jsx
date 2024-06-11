import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={css.optionButton}
          key={option}
          onClick={() => onLeaveFeedBack(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};
