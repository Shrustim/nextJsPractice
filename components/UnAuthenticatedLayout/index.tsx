// components/layout.js

import Navbar from '../Navbar'

export default function UnAuthenticatedLayout(props : any) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  )
}