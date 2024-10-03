import React, { useState } from 'react';
import { Feedback } from '../types/feedback';

const FeedbackForm: React.FC<{ onAddFeedback: (feedback: Feedback) => void }> = ({ onAddFeedback }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState<number | ''>('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFeedback: Feedback = {
      id: new Date().toISOString(),
      name,
      email,
      rating: Number(rating),
      comments,
      createdAt: new Date(),
    };
    onAddFeedback(newFeedback);
    setName('');
    setEmail('');
    setRating('');
    setComments('');
    alert('Thank you for your feedback!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)} required>
          <option value="">Select rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Comments:</label>
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
