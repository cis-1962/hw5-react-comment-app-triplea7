import { useState } from 'react';

type PostProps = {
  name: string;
  body: string;
};

const posts: PostProps[] = [];

function displayPosts() {
  const postsList = document.getElementById('postsList');
  if (postsList) {
    postsList.innerHTML = '';

    posts.forEach((post) => {
      const nameDiv = document.createElement('div');
      nameDiv.innerHTML = `${post.name}`;
      const bodyDiv = document.createElement('div');
      bodyDiv.innerHTML = `${post.body}`;
      postsList.appendChild(nameDiv);
      postsList.appendChild(bodyDiv);
    });
  }
}

export default function PostHeader() {
  const [nameInput, enterNameInput] = useState('');
  const [bodyInput, enterBodyInput] = useState('');

  return (
    <>
      <div className="post">
        <h1>New Post</h1>
        <div>
          <input
            id="nameBox"
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
            id="bodyBox"
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
            const newPost: PostProps = {
              name: nameInput,
              body: bodyInput,
            };
            displayPosts();
            enterNameInput('');
            enterBodyInput('');
          }}
        >
          Post
        </button>
      </div>
      <div id="postsList" />
    </>
  );
}
