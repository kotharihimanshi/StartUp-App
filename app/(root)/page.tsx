import React from "react";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { auth } from "@/auth";
import { title } from "process";

export default async function Home ({searchParams}: {searchParams: Promise<{ query: string }>}) {

  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views : 152,
    author : { _id : 1 , name : "John Doe"},
    _id : 1,
    description: "This is Description",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrs4cQN4JwWxQaFpf-wt1YRPy5rUk6uIiyrQ&s",
    category : "Tech",
    title : "This is Title",
  },
];
  return (
    <>

    {/* //hero section */}
      <section className="pink_container">
        {/* Pattern Overlay */}
        <div className="pattern"></div>

        {/* Content */}
        <h1 className="heading">
          Pitch Your StartUp,<br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm  query = {query}/>
      </section>


      {/* //startup card section */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `search results for "${query}"` : "All StartUps"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?. length > 0 ? (
            posts.map((post : StartupCardType, index: number) => (
              <StartupCard key={posts?._id} post = {post} />
            ))
          ) : (
            <p className="no-result"> No Startups Found. </p>
          )}
        </ul>

      </section>
    </>
  );
};


