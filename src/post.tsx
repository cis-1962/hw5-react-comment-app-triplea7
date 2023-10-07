import { useState } from "react";

export default function Post() {
    const [nameInput, enterNameInput] = useState('');
    const [bodyInput, enterBodyInput] = useState('');
    return (
        <><h1>New Post</h1><><input
            type="text"
            value={nameInput}
            onChange={(e) => enterNameInput(e.target.value)} />
            <input
                type="text"
                value={bodyInput}
                onChange={(ev) => enterBodyInput(ev.target.value)} /></></>
    );
};