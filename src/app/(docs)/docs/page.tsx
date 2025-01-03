import { allDocsPosts } from "content-collections";
import { notFound } from "next/navigation";
import { MDX } from "@/components/blog/mdx";
import MaxWidthWrapper from "@/components/blog/max-width-wrapper";
import { getBlurDataURL } from "@/lib/blog/images";
import { TableOfContents } from "@/components/docs/table-of-contents";

export default async function DocsPage() {
  const data = allDocsPosts.find((post) => post.slug === "introduction");
  if (!data) {
    notFound();
  }

  const images = await Promise.all(
    (data.images || []).map(async (src: string) => ({
      src,
      blurDataURL: await getBlurDataURL(src),
    }))
  );

  return (
    <div className="bg-background/50 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg dark:shadow-[inset_10px_-50px_94px_0_rgba(0,0,0,0.2)]">
      <div className="grid grid-cols-4 gap-10 py-10 px-4 md:px-10">
        <div className="col-span-4 flex flex-col space-y-8 md:col-span-3 md:pr-10">
          <div className="flex flex-col space-y-4">
            <h1 className="font-display text-3xl font-bold !leading-snug text-foreground sm:text-4xl">
              {data.title}
            </h1>
            <p className="text-muted-foreground">{data.summary}</p>
          </div>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <MDX code={data.mdx} images={images} />
          </div>
        </div>
        <div className="sticky top-20 col-span-1 hidden flex-col space-y-10 divide-y divide-border self-start md:flex">
          <TableOfContents items={data.tableOfContents} />
        </div>
      </div>
    </div>
  );
}
