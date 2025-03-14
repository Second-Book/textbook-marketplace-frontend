import TextbookService from '@/services/TextbookService'
import SearchTextbooksForm from '@/components/SearchTextbooksForm/SearchTextbooksForm'

export default async function TextbookSearch () {
  const textbooks = await TextbookService.getTextbooks()

  if (!textbooks) {
    return (
      <p>Ooops! We&apos;re having some trouble, please try again later</p>
    )
  }

  return (
    <div className="flex flex-col pb-5 bg-white">
    <main className="flex flex-col items-center px-6 mt-6 w-full max-md:pl-5 max-md:max-w-full">
      <h2 className="self-center text-3xl font-bold leading-tight text-blue-900 text-center w-2/3">Find Cheap Textbooks</h2>
      <SearchTextbooksForm textbooks={textbooks.data}/>
    </main>
  </div>
  )
}