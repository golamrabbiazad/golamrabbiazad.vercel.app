import { GetStaticPaths, GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import BlogLayout from "../../layouts/BlogLayout";
import { allBlogs } from ".contentlayer/data";
import type { Blog } from ".contentlayer/types";

const Slug: React.FC<{ post: Blog }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component />
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = allBlogs.map((post: Blog) => ({ params: { slug: post.slug } }));

  return {
    paths: posts,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allBlogs.find((post: Blog) => post.slug === params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export default Slug;
