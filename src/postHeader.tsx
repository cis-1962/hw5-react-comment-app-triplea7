import { useState } from 'react';
// eslint-disable-next-line import/no-named-as-default, import/no-cycle
import Reply, { ReplyProps } from './reply';

export default function PostHeader() {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');
  const [posts, setPosts] = useState<ReplyProps['post'][]>([]);

  const ifReply =
    (index: number, parentIdx?: number) =>
    (replier: string, replyBody: string, depth: number) => {
      const currPosts = [...posts];

      if (parentIdx !== undefined) {
        const parent = currPosts[index].replies[parentIdx];
        if (parent.depth + 1 < 3) {
          parent.replies.push({
            name: replier,
            body: replyBody,
            replies: [],
            upvotes: 0,
            downvotes: 0,
            depth: parent.depth + 1,
          });
        }
      } else if (depth < 3) {
        currPosts[index].replies.push({
          name: replier,
          body: replyBody,
          replies: [],
          upvotes: 0,
          downvotes: 0,
          depth: depth + 1,
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
              depth: 0,
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
          <Reply post={p} whenReply={ifReply(index)} />
        </div>
      ))}
    </div>
  );
}
