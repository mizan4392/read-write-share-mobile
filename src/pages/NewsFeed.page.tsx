import React from "react";
import PostCard from "../components/PostCard.component";

export default function NewsFeed() {
  return [1, 2, 3, 4, 5].map((i) => {
    return <PostCard />;
  });
}
