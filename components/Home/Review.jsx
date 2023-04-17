'use client'

import { useState } from 'react'

const reviews = [
  {
    quote:
      'This has been the best coleg in the whole world, providing almpost every fields.',
    author: 'Jangaraj',
    profession: 'Student',
  },
  {
    quote: 'This is most undeniabely best coleg in th worl',
    author: 'Kslpakam',
    profession: 'Student',
  },
]

const Review = () => {
  const [review, setReview] = useState(reviews[0])

  const nextReview = () => {
    const currentIndex = reviews.indexOf(review)
    const nextIndex = (currentIndex + 1) % reviews.length
    setReview(reviews[nextIndex])
  }

  const previousReview = () => {
    const currentIndex = reviews.indexOf(review)
    console.log(currentIndex)
    const previousIndex = (currentIndex - 1) % reviews.length
    setReview(reviews[previousIndex])
  }

  return (
    <div>
      <button onClick={previousReview}>previous</button>
      <div>
        <p>{review.quote}</p>
        <p>
          {review.author}, {review.profession}
        </p>
      </div>
      <button onClick={nextReview}>next</button>
    </div>
  )
}

export default Review
