import React from 'react'
import { GrSearch } from "react-icons/gr"
import './TopNavBar.css'

export default function TopNavBar() {
  return (
    <div className="navbar">
        <ul className='nav'>
            <li><a href="/"><h1>CALENDAR <sup>.</sup></h1></a></li>
            <li><a href="/"><h1>SUPPORT <sup>.</sup></h1></a></li>
            <li><a href="/"><h1>CONTACT <span></span></h1></a></li>
            <li><a href="/"><h1><GrSearch />  <sup>SEARCH</sup></h1></a></li>
        </ul>
    </div>
  )
}
