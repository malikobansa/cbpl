import React from 'react'
import './BigNav.css'

export default function BigNav() {
  return (
    <div className='big-container'>
        <ul>
            <li><h1 className='head'>CBPL</h1></li>
                <li className='contain'>
                    <form className='form'>
                    <select name="cars" id="cars">
                    <option value="volvo">About</option>
                    <option value="saab">FAQs</option>
                    <option value="mercedes">Communities</option>
                    <option value="audi">Contact</option>
                    </select>
                    </form>
                </li>
                <li>
                    <form>
                    <select name="car" id="cars">
                    <option value="volv">Admissions</option>
                    <option value="saa">Bsc</option>
                    <option value="mercede">Pgd</option>
                    <option value="aud">Msc</option>
                    <option value="ben">Phd</option>
                    </select>
                    </form>
                </li>
                <li>
                    <form>
                    <select name="ca" id="cars">
                    <option value="vol">Academics</option>
                    <option value="sa">Bsc</option>
                    <option value="mercede">Pgd</option>
                    <option value="au">Msc</option>
                    <option value="be">Phd</option>
                    </select>
                    </form>
                </li>
                <li>
                    <form>
                    <select name="ca" id="cars">
                    <option value="vol">Sports</option>
                    <option value="sa">Football</option>
                    <option value="mercede">Basketball</option>
                    <option value="au">Tennis</option>
                    <option value="be">Sprints</option>
                    </select>
                    </form>
                </li>
                <li>
                    <a href='/visit'><button className='btn'>Plan A Visit</button></a>
                </li>
        </ul>
    </div>
  )
}
