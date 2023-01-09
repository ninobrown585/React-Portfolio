import React from 'react';


function PortfolioItem({image, name, description, url}) {
  return (
    <div className='menuItem'>
      <a href= {url} target="_blank" rel="noreferrer">
        <div style={{backgroundImage: `url(${image})`}}>  </div>
        <h1> {name} </h1>
        <p> {description} </p>
        </a>
        
    </div>
  )
}

export default PortfolioItem