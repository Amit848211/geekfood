import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="bg-slate-800 w-full h-20 flex px-20 items-center justify-between">
            <div className="flex items-center">
                <img src='https://flowbite.com/docs/images/logo.svg'></img>
                <h1 className="text-white text-2xl font-bold">GookFoods</h1>
            </div>
            <ul className="flex items-center gap-8 text-white text-xl">
                <li>Home</li>
                <li>Qoute</li>
                <li>Resturants</li>
                <li>Foods</li>
                <li>Contact</li>
            </ul>
            <div>
                <h1 className="bg-blue-500 text-white rounded px-3 py-2">Get started</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar