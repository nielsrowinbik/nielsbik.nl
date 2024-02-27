import fs from "fs";
import path from "path";
import readingTime, { IReadTimeResults } from "reading-time";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  readingTime: IReadTimeResults;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");

  const metadata = frontMatterLines.reduce(
    (res, line, i) => {
      const [key, ...valueArr] = line.split(": ");
      const value = valueArr
        .join(": ")
        .trim()
        .replace(/^['"](.*)['"]$/, "$1"); // Remove quotes

      return { ...res, [key.trim() as keyof Metadata]: value };
    },
    { readingTime: readingTime(content) },
  );

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export type BlogPost = ReturnType<typeof getBlogPosts>[number];

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content"));
}
