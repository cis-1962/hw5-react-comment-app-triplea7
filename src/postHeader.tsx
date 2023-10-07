import { useState } from 'react';
// eslint-disable-next-line import/no-cycle
import Post from './post';

let post;

export default function PostHeader(inDepth: number) {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');

  return (
    <>
      <div className="post">
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
            const props = { name: nameInput, body: bodyInput, depth: inDepth };
            post = Post(props);
            enterNameInput('');
            enterBodyInput('');
          }}
        >
          Post
        </button>
      </div>
      <div>{post}</div>
    </>
  );
}
