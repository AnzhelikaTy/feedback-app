import FeedbackItem from "./FeedbackItem";

import React from "react";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedbacks yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
