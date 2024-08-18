import React from 'react'
import Link from "next/link";
import "./globals.css";

function Nav() {
  return (
    <>
      <div className="nav-header">
        <h1 >Daily News</h1>
      </div>
      <ul className='nav-links'>

        <Link href={"/Politics"}>Politics</Link>
        <Link href={"/Sports"}>Sports</Link>
        <Link href={"/Business"}>Business</Link>
      </ul>
    </>
  )
}

export default Nav