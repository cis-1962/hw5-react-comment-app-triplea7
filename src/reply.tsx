import { useState } from 'react';

export interface ReplyProps {
  post: {
    name: string;
    body: string;
    replies: ReplyProps['post'][];
  };
  whenReply: (name: string, body: string) => void;
}

export default function Reply({ post, whenReply }: ReplyProps) {
  const [replier, setReplier] = useState('');
  const [replyBody, setReplyBody] = useState('');
  const [showInputs, setShowInputs] = useState(false);

  return (
    <div>
      <p>
        <strong>{post.name}: </strong>
        {post.body}
      </p>
      {!showInputs ? (
        <button type="submit" onClick={() => setShowInputs(true)}>
          Reply
        </button>
      ) : (
        <>
          <div>
            <input
              type="text"
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
          <div>
            {post.replies.map((reply, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Reply key={index} post={reply} whenReply={whenReply} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
