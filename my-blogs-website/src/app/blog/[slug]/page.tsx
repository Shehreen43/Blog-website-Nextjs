import { FullBlog } from "@/app/lib/interface";
import client, { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Params = {
  slug: string;
};

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == $slug] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage
    }[0]`;
  const data = await client.fetch(query, { slug });
  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data: FullBlog = await getData(params.slug);

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center font-semibold text-orange-400 tracking-wide uppercase">
          Welcome to Shehreen Blog
        </span>
      </h1>

      <span className="mt-2 block text-3xl text-center leading-8 font-black tracking-tight sm:text-4xl">
        {data.title}
      </span>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt={`Image for ${data.title}`}
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-lg dark:prose-invert prose-li:marker:text-orange-400">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
