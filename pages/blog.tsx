import { GetStaticProps } from "next";
import { allBlogs } from ".contentlayer/data";
import Container from "../layouts/Container";
import BlogPost from "../components/BlogPost";
import { pick } from "../lib/utils";
import type { Blog } from ".contentlayer/types";

const Blog: React.FC<{ posts: Blog[] }> = ({ posts }) => {
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

        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black">
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

export const getStaticProps: GetStaticProps = () => {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt", "image"]),
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
