import BlogPost from "../components/BlogPost";
import Container from "../components/Container";

import { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";

import { pick } from "../lib/utils";

const Blog: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );

  return (
    <Container
      title="Blog - Golamrabbi Azad"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>

        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-gray-400">
          All Posts
        </h3>

        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}

        {filteredBlogPosts.map((post) => (
          <BlogPost {...post} key={post.slug} />
        ))}
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = allPosts.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt", "image", "body"]),
  );

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
