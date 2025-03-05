import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  // Temporary mock data - replace with CMS integration later
  const article = {
    title: "Sample Article Title",
    content: "Full article content...",
    date: "2024-03-20",
    author: "John Doe"
  };

  return json({ article });
}

export default function ArticlePage() {
  const { article } = useLoaderData<typeof loader>();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">{article.title}</h1>
        <div className="flex gap-4 mb-6 text-gray-600 dark:text-gray-400">
          <span>By {article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        <p className="text-lg leading-relaxed dark:text-gray-300">
          {article.content}
        </p>
      </article>
    </div>
  );
}
