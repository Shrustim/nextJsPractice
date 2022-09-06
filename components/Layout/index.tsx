// components/layout.js

import Navbar from '../Navbar'

export default function Layout(props : any) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  )
}