const PostsPage = async () => {
  const getPosts = async () => {
    // try {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //   const data = await res.json();
    //   return data;
    // } catch (error) {
    //   throw new Error("Failed to fetch posts");
    // }

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res.json();
  };

  const posts = await getPosts();

  return (
    <div>
      <h2>Posts are coming soon..{posts.length}</h2>
    </div>
  );
};

export default PostsPage;
