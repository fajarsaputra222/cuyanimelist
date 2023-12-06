"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen  max-w-xl mx-auto flex justify-center items-center">
            <diV className="flex justify-center items-center gap-4 flex-col">
            <FileSearch size={44} className="text-color-accent"  />
            <h3 className="text-color-accent text-4xl font-bold">NOT FOUND BANG</h3>
            <Link href ="/" className="text-color-primary hover:text-color-accent transition-all underline">Kembali</Link>
            </diV>
        </div>

    )
}

export default Page