import Reply from './reply';

type PostProps = {
  name: string;
  body: string;
};

export default function Post({ name, body }: PostProps) {
  return (
    <div>
      <div>{name}</div>
      <div>{body}</div>
      <button type="submit" onClick={() => Reply()}>
        Reply
      </button>
    </div>
  );
}
