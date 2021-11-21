import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  readingTime: {
    type: "json",
    resolve: (doc) => readingTime(doc.body.raw),
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});

export default contentLayerConfig;