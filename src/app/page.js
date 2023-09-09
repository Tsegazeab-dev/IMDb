import Result from "@/components/Result";
const api_key = process.env.API_KEY

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending"
// fetch data from TMDB every three hours(10800 seconds)
  const res = await fetch(`https://api.themoviedb.org/3${genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
  }?language=en-US&page=1&&api_key=${api_key}`, {next: {revalidate: 10800}})
  .then((res)=>res.json())
  .catch((err)=>{
    // This is gonna show the error failed to fetch in the screen
    throw new Error('Failed to fetch data')
  })
  const results = res.results;
  return (
    <>
<Result data={results}/>
    </>
  )
}