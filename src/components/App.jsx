import { useState, useEffect } from "react";

import { Box } from "./Box/Box";
import Section from "./Section";
import FeedbackForm from "./FeedbackForm";
import Statistics from "./Statistics";
import Notification from "./Notification";

const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  const [totalFeedback, setTotal] = useState(0)

  const handleFeedback = (type) => {
    setFeedback(prev => {
      return {
        ...prev, [type]: prev[type] + 1
      }
    });
  }

  useEffect(() => {
    const total = Object.values(feedback)
    setTotal(total.reduce((acc, meaning) => acc + meaning, 0))
  }, [feedback])

  const positiveFeedback = () => {
    const { good } = feedback;
    return Math.round((good / totalFeedback) * 100);
  }

  return (
    <Box
        pt={5}
        pb={5}
        pl={5}
        pr={5}
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        as='main'
    >
      <Section title={'Please leave feedback'}>
        <FeedbackForm options={Object.keys(feedback)} onLeaveFeedback={handleFeedback} />
      </Section>
      {totalFeedback ?
        (<Section title={'Statistics'}>
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positiveFeedback={positiveFeedback()}
          />
        </Section>) : (<Notification message={'There is no feedback'} />)
      }
    </Box>
  );
};

export default App;