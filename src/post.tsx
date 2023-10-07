import { useState } from 'react';
import styles from 'src/style.module.css';

export default function Post() {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');
  return (
    <>
      <head>
        <link rel="stylesheet" type="text/css" href="src/style.module.css" />
      </head>
      <div className={styles.post}>
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
    </>
  );
}
