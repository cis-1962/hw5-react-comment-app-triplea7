import { useState } from 'react';
// eslint-disable-next-line import/no-named-as-default, import/no-cycle
import Reply, { ReplyProps } from './reply';

export default function PostHeader() {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');
  const [posts, setPosts] = useState<ReplyProps['post'][]>([]);

  const ifReply =
    (index: number) => (replier: string, replyBody: string, pIdx?: number) => {
      const currPosts = [...posts];
      if (pIdx !== undefined) {
        currPosts[pIdx].replies.push({
          name: replier,
          body: replyBody,
          replies: [],
          upvotes: 0,
          downvotes: 0,
        });
      } else {
        currPosts[index].replies.push({
          name: replier,
          body: replyBody,
          replies: [],
          upvotes: 0,
          downvotes: 0,
        });
      }

      setPosts(currPosts);
    };

  return (
    <div>
      <h1>New Post</h1>
      <div>
        <textarea
          value={nameInput}
          placeholder="Your name here"
          onChange={(e) => {
            enterNameInput(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          value={bodyInput}
          placeholder="Speak your truth..."
          onChange={(ev) => {
            enterBodyInput(ev.target.value);
          }}
        />
      </div>
      {nameInput !== '' && bodyInput !== '' ? (
        <button
          type="submit"
          onClick={() => {
            const newPost: ReplyProps['post'] = {
              name: nameInput,
              body: bodyInput,
              replies: [],
              upvotes: 0,
              downvotes: 0,
            };
            setPosts([...posts, newPost]);
            enterNameInput('');
            enterBodyInput('');
          }}
        >
          Post
        </button>
      ) : null}
      <h1> Posts:</h1>
      {posts.map((p, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="post">
          <Reply post={p} depth={0} whenReply={ifReply(index)} pIdx={index} />
        </div>
      ))}
    </div>
  );
}
