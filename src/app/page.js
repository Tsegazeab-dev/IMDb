import Result from "@/components/Result";

const api_key = process.env.API_KEY

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending"

  const res = await fetch(`https://api.themoviedb.org/3${genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
  }?language=en-US&page=1&&api_key=${api_key}`, {next: {revalidate: 10800}})
  .then((res)=>res.json())
  .catch((err)=>{
    throw new Error('Failed to fetch data')
  })

  const results = res.results;
  return (
    <>
<Result data={results}/>
    </>
  )
}