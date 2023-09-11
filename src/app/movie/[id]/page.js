import Image from "next/image";
import React from "react";

const api_key = process.env.API_KEY;

async function getMovieById(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&&api_key=${api_key}`
  ).then((res) => res.json());
  // console.log(res);
  return res;
}

async function Movie({ params }) {
  const movieId = params.id;
  const movie = await getMovieById(movieId);
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row p-4 md:pt-8 item-center content-center mx-auto md:space-x-6 max-w-6xl">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL="/loadingSpineer.svg"
          alt="movie poster"
        />

        <div className="">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>

          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>

          <p className="">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
