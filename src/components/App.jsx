import {Component} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

  countFeedback = (option) => {
        this.setState(prevState => {
            return {
                [option]: prevState[option] + 1,
            }
        });
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;

        return good + neutral + bad;
    }

    countPositiveFeedback = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();

        return Math.round(good*100/total);
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();

        return (
            <div
                className='wrapper'
                style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 40,
                    color: '#010101'
            }}>
            <div className='feedbackBox'>
                <Section title='Please leave a feedback'>
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback = {this.countFeedback}/>
                </Section>
                <Section title='Statistics'>
                    {
                      total>0
                    ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.countPositiveFeedback()} />)
                    :(<Notification message='There is no feedback'/>)
                    }
              </Section>
              </div>
            </div>)
   } 
}