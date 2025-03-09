import NewTextbookForm from '@/components/NewTextbookForm'
import React from 'react'

const NewTextbook = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Add a New Textbook</h1>
      <NewTextbookForm />
    </div>
  )
}

export default NewTextbook