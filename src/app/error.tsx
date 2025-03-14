"use client"

import CustomError from "@/components/CustomError"
import { useRouter } from "next/navigation"
import { startTransition, useEffect } from "react"

const GlobalError = ({error, reset}: {error: Error & { digest?: string }, reset: () => void}) => {

  useEffect(() => {
    console.log(error)
  }, [error])

  const router = useRouter()

  const resetTransition = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }
  
  return (
    <CustomError text="Ooops! We&apos;re having some trouble, please try again later" onClick={resetTransition} />
  )
}

export default GlobalError