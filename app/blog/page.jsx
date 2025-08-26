import Button from "@/ui/Button";
import Image from "next/image";
import { getBlogPosts } from "@/lib/contentful";
import Heading from "@/ui/Heading";
import Link from "next/link";

export const metadata = {
  title: "Tesseract Blog | Software Development Insights & Trends",
  description:
    "Read the latest articles from Tesseract on software development, web design, technology trends, and digital innovation. Stay updated with expert insights.",
  keywords: [
    "software development blog",
    "web development articles",
    "IT industry insights",
    "tech trends",
    "digital innovation",
    "tesseractdev blog",
  ],
  openGraph: {
    title: "Tesseract Blog | Software Development Insights & Trends",
    description:
      "Expert articles on web development, software, and technology innovation from Tesseract.",
    url: "https://tesseractdev.org/blog",
    siteName: "Tesseract",
    images: [
      {
        url: "http://tesseractdev.org/_next/image?url=%2Fassets%2Flogo%2FTesseract.png",
        width: 1200,
        height: 630,
        alt: "Tesseract Blog Preview",
      },
    ],
    type: "website",
  },
};

const BlogPage = async () => {
  const posts = await getBlogPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-semibold text-gray-400">
          No blog posts available yet.
        </h2>
      </div>
    );
  }

  const firstPost = posts[0];
  const firstImg =
    firstPost?.fields?.heroImage?.fields?.file?.url &&
    `https:${firstPost.fields.heroImage.fields.file.url}`;

  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full flex flex-col justify-center items-center gap-10 min-h-[70vh] px-6 md:px-20 pt-40 pb-10 relative"
        style={{
          backgroundImage: `
            radial-gradient(circle at top center, #6e00ff 0%, transparent 30%),
            url('/assets/ui/line-vector.svg')
          `,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <h1 className="font-extrabold text-[#f6f6f6] lg:text-[3rem] text-[2.5rem] leading-tight">
            Shaping Tomorrow with Technology & Ideas{" "}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Explore in-depth articles on software, digital transformation, and
            emerging trends that drive businesses forward in a rapidly evolving
            world.
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="flex flex-col md:flex-row w-full gap-10 mt-10">
          {firstImg && (
            <Image
              src={firstImg}
              width={500}
              height={400}
              alt={firstPost.fields.title || "Featured blog post"}
              className="object-cover w-full md:w-[50%] rounded-2xl"
              priority
            />
          )}
          <div className="flex flex-col flex-1 gap-5 justify-evenly">
            <span className="p-2 w-fit text-sm text-center rounded-full bg-[#6363635d] text-gray-200">
              {firstPost.fields.category}
            </span>
            <h2 className="font-bold text-4xl md:text-5xl">
              {firstPost.fields.title}
            </h2>
            <Button text="Read More" href={`/blog/${firstPost.fields.slug}`} />
          </div>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-10 px-6 py-20 flex-wrap md:justify-between">
        {posts.slice(1).map((post) => {
          const { title, slug, category, heroImage } = post.fields;
          const imgUrl = heroImage?.fields?.file?.url
            ? `https:${heroImage.fields.file.url}`
            : null;

          return (
            <div
              key={post.sys.id}
              className="flex flex-col justify-between w-full md:w-[400px] gap-4 min-h-[500px] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-[#171717] bg-gradient-to-r from-[#171717] to-transparent"
            >
              {imgUrl && (
                <Image
                  src={imgUrl}
                  width={500}
                  height={250}
                  alt={title || "Blog post"}
                  className="object-cover w-full h-[250px] rounded-t-2xl"
                />
              )}
              <div className="flex flex-col flex-1 gap-5 justify-evenly p-6">
                <span className="p-2 text-sm w-fit text-center rounded-full bg-[#6363635d] text-gray-200">
                  {category}
                </span>
                <h3 className="font-bold text-2xl text-white">{title}</h3>
                <Button text="Read More" href={`/blog/${slug}`} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogPage;
