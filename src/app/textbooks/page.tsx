import Image from 'next/image'
import TextbookService from '@/services/TextbookService'

export default async function TextbookSearch () {
  const textbooks = await TextbookService.getTextbooks()
  console.log(textbooks.data[0].image)
  return (
    <div>{textbooks.data.map(book => (
      <div key={book.id}>
        <p>{book.title}</p>
        <Image src={"http://127.0.0.1:8000" + book.image.preview} width={240} height={312} alt={book.title}/>
      </div>
    ))}</div>
  )
}