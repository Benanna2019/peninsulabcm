import Link from "next/link";
import Image from "next/future/image";
import React from "react";
import { Compass } from "react-feather";
import { PostType } from "../clients/parsers/post";
import { timestampToCleanTime } from "../utils/transformers";
import { GhostButton } from "./Button";
import { NoDataLayout } from "./Layouts/NoDataLayout";
import { LoadingSpinner } from "./LoadingSpinner";
import Cross from "/public/Cross.png";
import { CategoryType } from "../clients/parsers/categories";

export default function BlogIndexPage({ posts }: any) {
  const { data, isLoading, isError } = posts;

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center h-52">
        <LoadingSpinner />
      </div>
    );
  }

  if (!data.allPosts || data.allPosts.length === 0 || isError) {
    return (
      <NoDataLayout
        no_data_heading={"Blog Posts Coming Soon"}
        no_data_info={"Check back in the future for blog articles."}
      >
        <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16">
          <Compass className="text-secondary" size={32} />
          <Link href="/">
            <a>
              <GhostButton>Back Home</GhostButton>
            </a>
          </Link>
        </div>
      </NoDataLayout>
    );
  }

  const { allPosts } = data;

  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Articles to help you walk by faith and not by sight.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {allPosts?.map((post: PostType) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.coverImage}
                  alt={post.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {post?.categories
                      ? post.categories.map(
                          (category: Partial<CategoryType>) => (
                            <span key={category._id}>{category.title}</span>
                          )
                        )
                      : null}
                  </p>
                  <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                    <a className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.excerpt}
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Link href={`/board/${post.author}`}>
                      <a>
                        <span className="sr-only">{post.author.name}</span>
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={
                            post?.author?.picture
                              ? post?.author?.picture
                              : Cross
                          }
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <Link href={`/board/${post.author}`}>
                        <a className="hover:underline">{post.author.name}</a>
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time
                        dateTime={
                          timestampToCleanTime({ timestamp: post.date })
                            .formatted
                        }
                      >
                        {
                          timestampToCleanTime({ timestamp: post.date })
                            .formatted
                        }
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
