import { gql } from "@apollo/client";
import Layout from "../components/Layout";
import PostsList, { POSTS_LIST_FIELDS } from "../components/PostsList";
import { client } from "../lib/apolloClient";

const GET_POSTS = gql`
  query getPosts {
    posts(first: 18, after: null) {
      nodes {
        ...PostsListFields
      }
    }
  }
  ${POSTS_LIST_FIELDS}
`;

export default function Blog(props) {
  const { posts } = props;

  return (
    <Layout>
      <h1>Blog</h1>
      <PostsList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GET_POSTS,
  });

  return {
    props: {
      posts: response.data.posts.nodes,
    },
  };
}
