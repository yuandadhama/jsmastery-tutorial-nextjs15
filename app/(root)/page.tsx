import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {_id:1, name: "author name"},
      _id: 1,
      description: "This is a description",
      image: 'https://media.istockphoto.com/id/1440356809/photo/artificial-intelligence-technology-robot-futuristic-data-science-data-analytics-quantum.webp?a=1&b=1&s=612x612&w=0&k=20&c=xUgh5jiW3xhbdpu79oZI8HO_8gRW9z4PM2sUo8QYTA4=',
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
