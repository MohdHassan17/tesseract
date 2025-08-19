

import Image from "next/image";
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

async function getBlog(slug) {
  const res = await client.getEntries({
    content_type: "blogPosts",
    "fields.slug": slug,
    limit: 1,
  });
  return res.items[0];
}

// Custom render options for headings and images
const renderOptions = {
  renderNode: {
    [BLOCKS.HEADING_4]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_5]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_2]: (node, children) => (
      <h3 className="text-3xl font-bold my-4">{children}</h3>
    ),
    [BLOCKS.HEADING_1]: (node, children) => {
      // Generate id from heading text
      const text = node.content
        .filter((child) => child.nodeType === "text")
        .map((child) => child.value)
        .join("");
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      return (
        <h2 className="text-4xl font-bold my-4" id={id}>
          {children}
        </h2>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="my-4 text-lg leading-relaxed">{children}</p>
    ),
    [BLOCKS.HR]: () => <hr className="my-8" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title, description } = node.data.target.fields;
      if (!file?.url) return null;
      return (
        <Image
          src={`https:${file.url}`}
          alt={title || description || "Blog image"}
          width={800}
          height={400}
          className="w-full h-[300px] object-cover rounded-xl my-6"
        />
      );
    },
  },
};

function getAllH2HeadingsWithIds(richTextDocument) {
  const headings = [];

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function traverse(node) {
    if (node.nodeType === "heading-1 " || node.nodeType === "heading-2") {
      const text = node.content
        .filter((child) => child.nodeType === "text")
        .map((child) => child.value)
        .join("");
      const id = slugify(text);
      headings.push({ text, id });
    }
    if (node.content && Array.isArray(node.content)) {
      node.content.forEach(traverse);
    }
  }

  traverse(richTextDocument);
  return headings;
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getBlog(slug);
  const headings = getAllH2HeadingsWithIds(post.fields.body);
  console.log(headings);

  if (!post) {
    return <div className="container mx-auto pt-40">Blog post not found.</div>;
  }

  const dateObj = new Date(post.sys.createdAt);
  const formattedDate = dateObj
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ (\d{4})$/, ", $1");

  const heroImage = post.fields.heroImage?.fields?.file?.url;

  return (
    <div className="container mx-auto pt-40 ">
      {/* Blog Details */}
      <div className="w-full flex flex-col items-center justify-center gap-10 p-10">
        <h1 className="text-4xl font-bold text-center">{post.fields.title}</h1>
        <h3 className="text-base text-gray-500">{formattedDate}</h3>
        <div className="container mx-auto flex justify-center">
          {heroImage && (
            <Image
              src={heroImage && `https:${heroImage}`}
              alt={post.fields.title}
              width={1000}
              height={500}
              className="mb-6 object-cover w-full lg:w-[900px] md:h-[400px] rounded-[26px]"
            />
          )}
        </div>
      </div>

      {/* Blog Content */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-10 w-full">
        {/* Content Menu */}
        <div className="  pt-5">
          <div className="w-full min-h-[300px] max-h-[400px]  rounded-[26px] p-4 flex flex-col gap-4  bg-[#171717] lg:sticky top-30">
            <h4 className="font-semibold text-xl">Contents</h4>

            <div className="flex flex-col gap-4 overflow-y-scroll">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className="block text-base underline"
              >
                {heading.text}{" "}
              </a>
            ))}


            </div>
          
          </div>
        </div>

        {/* Blog Text */}
        <div className="lg:col-span-3 prose prose-lg max-w-none p-3">
          {documentToReactComponents(post.fields.body, renderOptions)}
        </div>

        {/* Category */}
        <div className="pt-5">

          <div className="w-full min-h-[100px] border-[.5px] border-[#171717] rounded-[26px] bg-[#171717]  p-4 flex flex-col gap-4 p-5 lg:sticky top-30 "> 

            <h4 className="font-semibold text-xl">Category</h4>

            <div className="text-sm text-white p-3 rounded-full border-1 text-center ">
              {post.fields.category} 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
