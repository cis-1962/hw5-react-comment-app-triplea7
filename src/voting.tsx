import React, { useState } from 'react';

interface VoteProps {
  upvotes: number;
  downvotes: number;
}

export default function Vote({ upvotes, downvotes }: VoteProps) {
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);

  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          setUpvote(upvote + 1);
        }}
      >
        Upvotes ({upvote})
      </button>
      <button
        type="submit"
        onClick={() => {
          setDownvote(downvote + 1);
        }}
      >
        Downvotes ({downvote})
      </button>
    </div>
  );
}
