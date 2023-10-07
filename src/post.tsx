import Reply from './reply';

type PostProps = {
  name: string;
  body: string;
};

const replies = [<div />];

export default function Post({ name, body }: PostProps) {
  return (
    <div>
      <div>{name}</div>
      <div>{body}</div>
      <button type="submit" onClick={() => replies.push(Reply())}>
        Reply
      </button>
      <div>{replies}</div>
    </div>
  );
}
