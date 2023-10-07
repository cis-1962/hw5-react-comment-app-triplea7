import { useState } from 'react';
// eslint-disable-next-line import/no-named-as-default
import Post from './post';

const posts = [<div />];

export default function PostHeader() {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');

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
          const props = { name: nameInput, body: bodyInput };
          posts.push(Post(props));
          enterNameInput('');
          enterBodyInput('');
        }}
      >
        Post
      </button>
      <div>{posts}</div>
    </div>
  );
}
