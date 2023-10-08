import { useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { PostProps } from './postHeader';

interface ReplyProps {
  post: PostProps;
  whenReply: (name: string, body: string) => void;
}

export default function Reply({ post, whenReply }: ReplyProps) {
  const [replier, setReplier] = useState('');
  const [replyBody, setReplyBody] = useState('');

  return (
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
        Reply
      </button>
      <div>
        {post.replies.map((reply, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Reply key={index} post={reply} whenReply={whenReply} />
        ))}
      </div>
    </div>
  );
}
