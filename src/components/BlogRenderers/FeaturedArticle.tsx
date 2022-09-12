import Link from "next/link";
import { PostType } from "../../clients/parsers/post";
import { GhostButton } from "../Button";

interface FeaturedArticle {
  post: PostType;
}

export default function FeaturedArticle({ post }: FeaturedArticle) {
  return (
    <div className="mt-14 mb-14">
      {/* Hero card */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={post.coverImage}
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-indigo-300 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">{post.title}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-slate-100 sm:max-w-3xl">
                {post.excerpt}
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">
                      Read Article Now
                    </a>
                  </Link>
                  <Link href="/blog">
                    <GhostButton className="flex items-center justify-center rounded-md border border-transparent bg-slate-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">
                      See Other Articles
                    </GhostButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
