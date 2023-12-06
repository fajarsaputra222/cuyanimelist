"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const SearchRef = useRef()
    const router = useRouter()
    
    const handleSearch =(event) => {
        const keyword = SearchRef.current.value

        if(!keyword) return
        if(event.key === "Enter" || event.type === "click"){
            event.preventDefault()
            
            router.push(`/search/${keyword}`)
        }   
    }

    return (
        <div className="relative">
            <input placeholder="cari anime .."
            className=" w-full p-2 rounded"
            ref={SearchRef}
            onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
            <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch

