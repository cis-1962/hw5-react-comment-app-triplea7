import PostHeader from './postHeader';

type PostProps = {
  name: string;
  body: string;
  depth: number;
};

export default function Post({ name, body, depth }: PostProps) {
  if (depth === 0) {
    return (
      <div>
        <div>{name}</div>
        <div>{body}</div>
      </div>
    );
  }

  return (
    <div>
      <div>{name}</div>
      <div>{body}</div>
      <button
        type="submit"
        onClick={() => {
          PostHeader(depth - 1);
        }}
      >
        Reply
      </button>
    </div>
  );
}
