import FirstComp from "../components/FirstComp"

// posts will be populated at build time by getStaticProps()
function Home({ posts }) {
  return (
    <FirstComp
      posts={posts}
    />
    // <ul>
    //   {posts?.products.map((post) => (
    //     <li key={post.id}>{post.title}</li>
    //   ))}

    // </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://dummyjson.com/products?limit=4')
  const posts = await res.json()

  // By returning { props: { posts } }, the Home component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Home