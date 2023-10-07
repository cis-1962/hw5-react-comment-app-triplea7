import { useState } from 'react';
import './src/style.css';

export default function Post() {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');
  return (
    <div className="post">
      <h1>New Post</h1>
      <input
        type="text"
        value={nameInput}
        placeholder="Your name here"
        onChange={(e) => enterNameInput(e.target.value)}
      />
      <input
        type="text"
        value={bodyInput}
        placeholder="Speak your truth..."
        onChange={(ev) => enterBodyInput(ev.target.value)}
      />
      <button type="submit">Post</button>
    </div>
  );
}
