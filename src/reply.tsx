import { useState } from 'react';
import Vote from './voting';

export interface ReplyProps {
  post: {
    name: string;
    body: string;
    replies: ReplyProps['post'][];
    upvotes: number;
    downvotes: number;
  };
  depth: number;
  whenReply: (name: string, body: string, pIdx?: number) => void;
  pIdx?: number;
}

export default function Reply({ post, depth, whenReply, pIdx }: ReplyProps) {
  const [replier, setReplier] = useState('');
  const [replyBody, setReplyBody] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const canReply = depth < 3;

  return (
    <div style={{ marginLeft: depth * 25 }}>
      <p>
        <strong>{post.name}: </strong>
        {post.body}
      </p>
      <Vote upvotes={post.upvotes} downvotes={post.downvotes} />
      {canReply && !showInputs ? (
        <button type="submit" onClick={() => setShowInputs(true)}>
          Reply
        </button>
      ) : null}
      {canReply && showInputs && (
        <div>
          <div>
            <input
              type="text"
              value={replier}
              placeholder="Your name here"
              onChange={(e) => {
                setReplier(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              value={replyBody}
              placeholder="Clap back!."
              onChange={(ev) => {
                setReplyBody(ev.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              whenReply(replier, replyBody, pIdx);
              setReplier('');
              setReplyBody('');
              setShowInputs(false);
            }}
          >
            Post
          </button>
        </div>
      )}
      <div>
        {post.replies.map((reply, index) => (
          <Reply
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            post={reply}
            depth={depth + 1}
            whenReply={whenReply}
            pIdx={pIdx}
          />
        ))}
      </div>
    </div>
  );
}
