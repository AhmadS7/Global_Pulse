import { Header } from "~/components/Header";

export default function Index() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6 dark:text-white">Latest News</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 dark:text-white">Featured Story</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Breaking news story summary with important updates...
              </p>
            </article>
            {/* Add more featured articles */}
          </div>
        </section>
      </main>
    </>
  );
}
