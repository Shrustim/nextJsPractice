import React from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'

const DynamicRouting: NextPage = () => {
    const router = useRouter()
    const { blogId } = router.query
  return (
    <div>
   
      <br/>
      <h1>  DynamicRouting : blog Id : {blogId}</h1></div>
  )
}
export default DynamicRouting;