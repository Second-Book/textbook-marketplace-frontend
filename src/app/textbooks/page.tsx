import TextbookService from '@/services/TextbookService'
import TextbookCard from '@/components/TextbookCard/TextbookCard'
import TextbooksStyle from './TextbooksStyle.module.css'

export default async function TextbookSearch () {
  const textbooks = await TextbookService.getTextbooks()
  return (
    <div className="flex flex-col pb-5 bg-white">
    <main className="flex flex-col items-center px-6 mt-6 w-full max-md:pl-5 max-md:max-w-full">
      <h2 className="self-center text-3xl font-bold leading-tight text-blue-900 text-center w-2/3">Find Cheap Textbooks</h2>
      <form className="flex flex-wrap gap-4 mt-4 text-base max-md:mr-2.5 max-md:max-w-full w-2/3 mx-auto">
        <label htmlFor="searchInput" className={TextbooksStyle.srOnly}>Search for textbooks</label>
        <input
          id="searchInput"
          type="text"
          placeholder="Search for textbooks..."
          className="overflow-hidden p-2.5 bg-white rounded-lg border border-blue-900 border-solid text-zinc-400 max-md:pr-5 max-md:max-w-full w-full"
          v-model="searchQuery"
        />
        <label htmlFor="sortCriteria" className={TextbooksStyle.srOnly}>Sort by</label>
        <select id="sortCriteria" v-model="sortCriteria" className="p-2.5 bg-white rounded-lg border border-blue-900 border-solid text-zinc-400">
          <option value="title">Title</option>
          <option value="school_class">School_Class</option>
          <option value="publisher">Publisher</option>
          <option value="price">Price</option>
        </select>
        <button type="submit" className="px-4 py-2 text-center text-white whitespace-nowrap bg-red-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
          Search
        </button>
      </form>
      <section className="mt-14 max-md:mt-10 max-md:max-w-full w-2/3 mx-auto">
        <div className={TextbooksStyle.textbookGrid}>
          {textbooks.data.map(textbook => (
            <TextbookCard key={textbook.id} textbook={textbook}/>
          ))}
        </div>
      </section>
    </main>
  </div>
  )
}