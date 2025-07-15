import React from 'react'

const Review = ({ title, author, review }) => {
  return (
    <div className='w-100 h-45 p-5 rounded-xl'>
        <h1 className='text-white text-xl font-bold'>{title}</h1>
        <h2 className='text-md text-light-200'>@{author}</h2>
        <p className='text-light-100 mt-2 text-justify'>
        {review}
        </p>

    </div>
  )
}

export default Review