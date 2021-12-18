import type { NextPage } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";

interface PostPageProps {
  frontMatter: {
    title: string;
    date: string;
  };
  slug: string;
  mdxSource: any;
}

const PostPage: NextPage<PostPageProps> = ({
  frontMatter: { title, date },
  mdxSource,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("_posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("_posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
