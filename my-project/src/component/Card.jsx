import React from 'react'

function Card({
    imglink,
    Title,
    oldPrice,
    newPrice,

}) {
  return (
    <div className="w-50 h-65  ">
        <img src={imglink} alt="Image" />
    </div>
  )
}

export default Card