
"use client";
import React from 'react'
import "./globals.css"
function VisitLink({ url }) {
    return (
        <button className='visit-url' onClick={() => window.open(url)}>
            visit
        </button>
    )
}

export default VisitLink