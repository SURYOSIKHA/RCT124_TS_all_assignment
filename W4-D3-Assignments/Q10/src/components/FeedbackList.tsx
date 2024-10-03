import React from 'react';
import { Feedback } from '../types/feedback';

const FeedbackList: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => {
  return (
    <div>
      <h2>Customer Feedback</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <strong>{feedback.name}</strong> - Rating: {feedback.rating}
            <p>{feedback.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
