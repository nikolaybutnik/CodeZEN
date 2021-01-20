import React from 'react'
import './Image.css'

const Image = ({ id, urls, tags, links, source, alt }) => {
  const handleSaveImg = () => {
    const newImg = {
      id: id,
      urls: urls,
      tags: tags,
      links: links,
    }
    console.log(newImg)
    fetch('/add', {
      method: 'POST',
      body: JSON.stringify(newImg),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <>
      <img src={source} alt={alt} />
      <button onClick={handleSaveImg}>
        <i className="fa fa-heart"></i>
      </button>
    </>
  )
}

export default Image
