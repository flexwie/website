import type { NextPage } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Nav } from "../../components/nav";

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
      <Nav />
      <div className="font-sans font-extrabold text-3xl text-center mt-4 sm:mt-6 sm:text-left text-indigo-600 dark:text-indigo-400">{title}</div>
      <div className="prose mt-6 dark:prose-invert">
        <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
      </div>
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
