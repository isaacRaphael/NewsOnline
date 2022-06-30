import React from 'react'
import Card from './Card.jsx'

const CardList = ({ posts }) => {
  return (
   
    <div className='w-[80%] mt-8 mx-auto grid grid-cols-3 gap-6 xl:grid-cols-2 md:grid-cols-1'>
        {posts.map(post =>
        
        <Card key={post.url} post={post}/>
        
        )}
    </div>
  )
}

export default CardList