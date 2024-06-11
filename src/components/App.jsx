import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback();
    const options = ['good', 'neutral', 'bad'];
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedBack={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        </Section>
      </>
    );
  }
}
