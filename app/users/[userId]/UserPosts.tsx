type Props = {
    promise: Promise<Post[]>
}

const UserPosts = async ({promise}: Props) => {
  const posts = await promise;

  console.log(posts);

  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        {post.title}
        <br />
        {post.body}
      </article>
    );
  });

  return content;
} 

export default UserPosts