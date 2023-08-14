import {useState} from 'react';
import Statistics from '../Statistics';
import Section from '../Section';
import FeedbackOptions from '../Feedback';
import Notification from '../Notification';




export default function App () {
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);


   const handleFeedback = option => {
   if(option === 'good'){
    setGood(prev => prev + 1)
   }
   else if(option === 'neutral'){
    setNeutral(prev => prev + 1)
   }
   else if(option === 'bad'){
    setBad(prev => prev + 1)
   }
  };


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };


   

    return (
      <Section title="Please leave feedback">
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
       {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback " />
          )}
      </Section>
    );
  }




