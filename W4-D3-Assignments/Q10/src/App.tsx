import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { Feedback } from './types/feedback';

const App: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const handleAddFeedback = (newFeedback: Feedback) => {
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback]);
  };

  return (
    <div>
      <h1>Aromatic Bar Feedback System</h1>
      <FeedbackForm onAddFeedback={handleAddFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;
