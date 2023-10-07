import PostHeader, { posts } from './postHeader';

export default function App() {
  return (
    <>
      <div>
        <PostHeader />
      </div>
      <div>{posts}</div>
    </>
  );
}
