import { useState } from 'react';
import Vote from './voting';

export interface ReplyProps {
  post: {
    name: string;
    body: string;
    replies: ReplyProps['post'][];
    upvotes: number;
    downvotes: number;
    depth: number;
  };
  whenReply: (name: string, body: string, depth: number) => void;
  parentIdx?: number;
}

export default function Reply({ post, whenReply, parentIdx }: ReplyProps) {
  const [replier, setReplier] = useState('');
  const [replyBody, setReplyBody] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const canReply = post.depth < 3;

  return (
    <div style={{ marginLeft: post.depth * 25 }}>
      <p>
        <strong>{post.name}: </strong>
        {post.body}
      </p>
      <Vote upvotes={post.upvotes} downvotes={post.downvotes} />
      {canReply && !showInputs ? (
        <div>
          {' '}
          <button type="submit" onClick={() => setShowInputs(true)}>
            Reply
          </button>{' '}
        </div>
      ) : null}
      {canReply && showInputs && (
        <div>
          <div>
            <textarea
              value={replier}
              placeholder="Your name here"
              onChange={(e) => {
                setReplier(e.target.value);
              }}
            />
          </div>
          <div>
            <textarea
              value={replyBody}
              placeholder="Clap back!"
              onChange={(ev) => {
                setReplyBody(ev.target.value);
              }}
            />
          </div>
          {replier !== '' && replyBody !== '' ? (
            <button
              className="reply"
              type="submit"
              onClick={() => {
                whenReply(replier, replyBody, post.depth + 1);
                setReplier('');
                setReplyBody('');
                setShowInputs(false);
              }}
            >
              Post
            </button>
          ) : null}
        </div>
      )}
      <div>
        {post.replies.map((reply, index) => (
          <div className="reply" style={{ marginLeft: reply.depth * 25 }}>
            <Reply
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              post={reply}
              whenReply={whenReply}
              parentIdx={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
