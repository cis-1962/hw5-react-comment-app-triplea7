import { useState } from 'react';

export default function PostHeader() {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');
  return (
    <div className="post">
      <h1>New Post</h1>
      <div>
        <input
          type="text"
          value={nameInput}
          placeholder="Your name here"
          onChange={(e) => enterNameInput(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={bodyInput}
          placeholder="Speak your truth..."
          onChange={(ev) => enterBodyInput(ev.target.value)}
        />
      </div>
      <button type="submit" onClick={() => Post(nameInput, bodyInput)}>
        Post
      </button>
    </div>
  );
}

export function Post(name: string, body: string) {
  PostHeader();
  return (
    <div className="post">
      <div> {name}</div>
      <div> {body}</div>
    </div>
  );
}
