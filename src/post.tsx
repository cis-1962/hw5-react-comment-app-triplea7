type PostProps = {
  name: string;
  body: string;
};

export default function Post({ name, body }: PostProps) {
  return (
    <div>
      <div>{name}</div>
      <div>{body}</div>
    </div>
  );
}
