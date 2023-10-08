import { useState } from 'react';
// eslint-disable-next-line import/no-named-as-default
import Reply from './reply';

export interface PostProps {
  name: string;
  body: string;
  replies: PostProps[];
}

export default function PostHeader() {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');
  let posts: PostProps[] = [];

  const ifReply = (index: number) => (replier: string, replyBody: string) => {
    const currPosts = posts;
    currPosts[index].replies.push({
      name: replier,
      body: replyBody,
      replies: [],
    });
    posts = currPosts;
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
          const newPost = {
            name: nameInput,
            body: bodyInput,
            replies: [],
          };
          posts.push(newPost);
          enterNameInput('');
          enterBodyInput('');
        }}
      >
        Post
      </button>
      <div>
        {posts.map((post, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <Reply post={post} whenReply={ifReply(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}
