import { useState } from 'react';
// eslint-disable-next-line import/no-named-as-default, import/no-cycle
import Reply, { ReplyProps } from './reply';

export default function PostHeader() {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');
  const [posts, setPosts] = useState<ReplyProps['post'][]>([]);

  const ifReply = (index: number) => (replier: string, replyBody: string) => {
    const currPosts = [...posts];
    currPosts[index].replies.push({
      name: replier,
      body: replyBody,
      replies: [],
    });
    setPosts(currPosts);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={nameInput}
          placeholder="Your name here"
          onChange={(e) => {
            enterNameInput(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={bodyInput}
          placeholder="Speak your truth..."
          onChange={(ev) => {
            enterBodyInput(ev.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        onClick={() => {
          const newPost: ReplyProps['post'] = {
            name: nameInput,
            body: bodyInput,
            replies: [],
          };
          setPosts([...posts, newPost]);
          enterNameInput('');
          enterBodyInput('');
        }}
      >
        Post
      </button>
      <div>
        {posts.map((p, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <Reply post={p} whenReply={ifReply(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}
