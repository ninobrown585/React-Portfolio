import React from 'react';


function PortfolioItem({image, name, description, url, github}) {
  return (
    <div className='menuItem'>
      <a href= {url} target="_blank" rel="noopener noreferrer">
        <div style={{backgroundImage: `url(${image})`}}>  </div>
        <h1> {name} </h1>
        {/* <p> {description} </p> */}
        </a>
        <b><a href= {github} target="_blank" rel="noopener noreferrer"> GitHub Repo  </a> </b>      
    </div>
  )
}

export default PortfolioItem