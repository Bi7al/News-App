import React from 'react'
import Link from "next/link";
import "./globals.css";

function SideNav() {
  return (
    <>
      <div className="header">
        <h1>Daily News</h1>
      </div>
      <ul className='nav-links'>
        <Link href={"/Sports"}>Sports</Link>
        <Link href={"/Politics"}>Politics</Link>
        <Link href={"/Business"}>business</Link>
      </ul>
    </>
  )
}

export default SideNav