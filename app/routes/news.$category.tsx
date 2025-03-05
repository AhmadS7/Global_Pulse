import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  // Temporary mock data - replace with CMS integration later
  const articles = [
    { id: 1, title: "Breaking News Example", excerpt: "Sample article content...", category: "world" },
    { id: 2, title: "Technology Update", excerpt: "Latest tech developments...", category: "tech" }
  ];
  
  return json({ articles });
}

export default function CategoryPage() {
  const { articles } = useLoaderData<typeof loader>();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Category News</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">{article.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
