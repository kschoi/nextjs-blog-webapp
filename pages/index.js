export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
  );
  const posts = await res.json(); // json으로 인코딩

  return {
    props: {
      posts,
    },
    revalidate: 20, // 20초 지난 시점부터 언제든 접속이 일어나면, 재생성합니다.
  };
};
