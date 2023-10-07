import { useState } from 'react';
// eslint-disable-next-line import/no-named-as-default
import { posts } from './postHeader';
// eslint-disable-next-line import/no-cycle
import Post from './post';

export default function Reply() {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');

  return (
    <div>
      <div>
        <input
          type="text"
          value={nameInput}
          placeholder="Name"
          onChange={(e) => {
            enterNameInput(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={bodyInput}
          placeholder="Reply"
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
        Reply
      </button>
    </div>
  );
}
