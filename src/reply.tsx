import { useState } from 'react';

export interface ReplyProps {
  post: {
    name: string;
    body: string;
    replies: ReplyProps['post'][];
  };
  depth: number;
  whenReply: (name: string, body: string) => void;
}

export default function Reply({ post, depth, whenReply }: ReplyProps) {
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
              placeholder="Speak your truth..."
              onChange={(ev) => {
                setReplyBody(ev.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              whenReply(replier, replyBody);
              setReplier('');
              setReplyBody('');
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
          />
        ))}
      </div>
    </div>
  );
}
