import { Link } from 'gatsby'
import React from 'react'

function LearnPage() {
  return <div className="p-8 md:px-8 lg:px-20">
    <h1 className="text-3xl text-center">What Topic Would You Like to Learn About?</h1>
    <h2 className="text-2xl text-center">Search by Topic</h2>
    <div className="p-3 w-full md:w-1/2 m-auto">
      <div className="bg-white flex items-center shadow-md">
        <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
        <div className="p-4">
          <button className="bg-primary-500 text-white rounded-full p-2 hover:bg-primary-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <h2 className="text-2xl text-center">Find by Content Type</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
      <div style={{ cursor: "pointer" }} className="h-32 shadow-md border-primary-200 border-solid border-1 hover:bg-primary-600 hover:cursor-pointer hover:text-white">
        <Link to="/archive/videos">
          <h3 className="h-20 text-3xl">Watch Video</h3>
        </Link>

      </div>
      <div style={{ cursor: "pointer" }} className="h-32 shadow-md border-primary-200 border-solid border-1 hover:bg-primary-600 hover:cursor-pointer hover:text-white">
        <h3 className="h-20 text-3xl">Read an Article</h3>
      </div>
      <div style={{ cursor: "pointer" }} className="h-32 shadow-md border-primary-200 border-solid border-1 hover:bg-primary-600 hover:cursor-pointer hover:text-white">
        <h3 className="h-20 text-3xl">Listen to the Podcast</h3>
      </div>
    </div>
  </div>


}

export default LearnPage