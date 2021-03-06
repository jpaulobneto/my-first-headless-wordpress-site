import { gql } from "@apollo/client";

import PostCard from "./PostCard";
import { POST_CARD_FIELDS } from "../components/PostCard";

export const POSTS_LIST_FIELDS = gql`
  fragment PostsListFields on Post {
    databaseId
    ...PostCardFields
  }
  ${POST_CARD_FIELDS}
`;

export default function PostsList({ posts }) {
  return (
    <ul className="posts-list">
      {posts.map((post) => {
        return (
          <li key={post.databaseId}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
}
