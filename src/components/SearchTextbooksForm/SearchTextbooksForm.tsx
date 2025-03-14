"use client"

import { TextbookType } from "@/utils/types"
import SearchTextbooksFormStyle from "./SearchTextbooksFormStyle.module.css"
import { ChangeEvent, useState } from "react"
import TextbookGrid from "../TextbookGrid/TextbookGrid"

interface SearchTextbooksFormProps {
    textbooks: TextbookType[]
}

const SearchTextbooksForm = (props: SearchTextbooksFormProps) => {
  const [filter, setFilter] = useState<"title" | "school_class" | "publisher" | "price">("title")
  const [query, setQuery] = useState("")
  const filteredTextbooks = props.textbooks.sort((a, b) => a[filter].localeCompare(b[filter])).filter(textbook => {
    return (
      textbook.price.toString().includes(query) ||
      textbook.school_class.toLowerCase().includes(query.toLowerCase()) ||
      textbook.title.toLowerCase().includes(query.toLowerCase()) ||
      textbook.author.toLowerCase().includes(query.toLowerCase()) ||
      textbook.publisher.toLowerCase().includes(query.toLowerCase())
    );
  })
  return (
    <>
        <form className="flex flex-wrap gap-4 mt-4 text-base max-md:mr-2.5 max-md:max-w-full w-2/3 mx-auto">
            <label htmlFor="searchInput" className={SearchTextbooksFormStyle.srOnly}>Search for textbooks</label>
            <input
            id="searchInput"
            type="text"
            placeholder="Search for textbooks..."
            className="overflow-hidden p-2.5 bg-white rounded-lg border border-blue-900 border-solid text-zinc-400 max-md:pr-5 max-md:max-w-full w-full"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            />
            <label htmlFor="sortCriteria" className={SearchTextbooksFormStyle.srOnly}>Sort by</label>
            <select id="sortCriteria" onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value as "title" | "school_class" | "publisher" | "price")} className="p-2.5 bg-white rounded-lg border border-blue-900 border-solid text-zinc-400">
                <option value="title">Title</option>
                <option value="school_class">School_Class</option>
                <option value="publisher">Publisher</option>
                <option value="price">Price</option>
            </select>
            <button type="submit" className="px-4 py-2 text-center text-white whitespace-nowrap bg-red-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
                Search
            </button>
        </form>
        <TextbookGrid textbooks={filteredTextbooks}/>
    </>
  )
}

export default SearchTextbooksForm