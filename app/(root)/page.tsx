import React from "react";
import SearchForm from "../components/SearchForm";

const Page = () => {
  return (
    <>
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

        <SearchForm />
      </section>
    </>
  );
};

export default Page;
