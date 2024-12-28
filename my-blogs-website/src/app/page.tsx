import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import client, { urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `;

  try {
    const data = await client.fetch(query);
    console.log(data);
    return data;
   
    
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5">
        {data.map((post, id) => {
          console.log(id, post);
          return (
            <Card key={id}>
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title}
                width={500}
                height={500}
                className="rounded-t-lg h-[200px] object-cover"
              />
              <CardContent className="mt-5">
                <h2 className="text-lg line-clamp-2 font-bold">{post.title}</h2>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
                <Button asChild className="w-full mt-2 bg-orange-600">
                  <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                </Button>
             
              </CardContent>
              {/* <h2 className="text-xl font-semibold mt-2">{post.title}</h2> */}
              {/* <p className="text-gray-600">{post.smallDescription}</p> */}
            </Card>
          );
        })}
      </div>
    </>
  );
}
