import Animelist from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async () => {
 const Response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
 const topAnime = await Response.json()

  return (
    <>
    {/*anime terpopuler*/}
      <section>
      <Header title ="Paling Populer" LinkTitle="Lihat Semua" LinkHref="/populer"/>
      <Animelist api={topAnime}/>
      </section>


    </>
    
  )
}

export default Page