import Animelist from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({params}) => {
const {keyword} = params

const decodekeyword = decodeURI(keyword)

const Response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodekeyword}`)
const searchAnime = await Response.json()

  return (
    <>
    {/*anime terpopuler*/}
      <section>
      <Header title = {`Pencarian Untuk ${decodekeyword}...`}/>
      <Animelist api={searchAnime}/>
      </section>
    </>    
  )
}

export default Page