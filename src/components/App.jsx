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
        total: 0,
        positivePercentage: 0
    }

  countFeedback = (option) => {
        this.setState(prevState => {
            return {
                [option]: prevState[option] + 1,
            }
        });
        this.countTotalFeedback();
        this.countPositiveFeedback();
    }

    countTotalFeedback = () => {
        this.setState(prevState => {
            return {
                total: prevState.total + 1,
            }
        })
    }

    countPositiveFeedback = () => {
        this.setState(prevState => {
            return {
                positivePercentage: Math.round(prevState.good*100/prevState.total)+'%',
            }
        })
    }

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.state;

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
                    <FeedbackOptions options={[{id:1, title:'good'}, {id: 2, title:'neutral'}, {id: 3, title:'bad'}]} onLeaveFeedback = {this.countFeedback}/>
                </Section>
                <Section title='Statistics'>
                    {
                      total>0
                    ?(<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>)
                    :(<Notification message='There is no feedback'/>)
                    }
              </Section>
              </div>
            </div>)
   } 
}