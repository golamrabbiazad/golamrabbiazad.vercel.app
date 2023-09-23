import { allPosts, Post } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"

export default function Slug({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code)

  return <Component />
}

export async function getStaticPaths() {
  const posts = allPosts.map((post: Post) => ({ params: { slug: post.slug } }))

  return {
    paths: posts,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const post = allPosts.find((post: Post) => post.slug === params.slug)

  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}
