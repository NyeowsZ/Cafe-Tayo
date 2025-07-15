import React from 'react'
import Review from './Review'

function LandingReview() {
  return (
    <>
        <div className='h-10 flex items-center px-10'>
            <h3 className='text-green-500 font-semibold'>Rated 4.7 ★ on Google Review</h3>
        </div>

        <div className='flex-1 flex'>
          <div className='flex-1 h-full flex items-center px-10 bg-primary-500 gap-10 overflow-x-auto'>
              <Review
                title="A Hidden Gem in the Neighborhood"
                author="coffeelover23"
                review="This café is such a relaxing place! The atmosphere is cozy, and the cappuccino is one of the best I’ve had. Definitely coming back soon."
              />

              <Review
                title="Good Vibes, Great Brews"
                author="morningsip"
                review="The baristas really know their craft here. The latte art was a nice touch, and the playlist made my morning productive. 10/10!"
              />

              <Review
                title="Perfect Study Spot"
                author="notetaker101"
                review="Spacious, quiet, and has reliable WiFi. I spent hours here working on my thesis. The iced mocha kept me going!"
              />

          </div>
        </div>
        
    </>
        
  )
}

export default LandingReview