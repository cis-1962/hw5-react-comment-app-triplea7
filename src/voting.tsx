import React, { useState } from 'react';

interface VoteProps {
  upvotes: number;
  downvotes: number;
}

export default function Vote({ upvotes, downvotes }: VoteProps) {
  const [upvote, setUpvote] = useState(upvotes);
  const [downvote, setDownvote] = useState(downvotes);

  return (
    <div>
      <p>Votes: {upvote - downvote}</p>
      <div>
        <button
          className="voting"
          type="submit"
          onClick={() => {
            setUpvote(upvote + 1);
          }}
        >
          Upvote
        </button>
        <button
          className="voting"
          type="submit"
          onClick={() => {
            setDownvote(downvote + 1);
          }}
        >
          Downvote
        </button>
      </div>
    </div>
  );
}
