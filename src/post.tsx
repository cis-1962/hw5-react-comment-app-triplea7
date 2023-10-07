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

  let postedName: string;
  let postedBody: string;

  return (
    <>
      <div className="post">
        <h1>New Post</h1>
        <div>
          <input
            type="text"
            value={nameInput}
            placeholder="Your name here"
            onChange={(e) => {
              enterNameInput(e.target.value);
              postedName = e.target.value;
              console.log(postedName);
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
              postedBody = ev.target.value;
              console.log(postedBody);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            const newPost: PostProps = {
              name: postedName,
              body: postedBody,
            };
            posts.push(newPost);
            displayPosts();
          }}
        >
          Post
        </button>
      </div>
      <div id="postsList" />
    </>
  );
}
