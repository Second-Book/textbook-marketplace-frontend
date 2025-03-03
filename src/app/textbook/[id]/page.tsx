import React from 'react'

export default async function TextbookId({ params, }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <div>Textbook {id}</div>
}