export const FeedbackOptions = ({ options, onLeaveFeedBack, percentage }) => {
  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedBack(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
