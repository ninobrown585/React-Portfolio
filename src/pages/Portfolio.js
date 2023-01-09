import React from 'react';
import { ProjectList} from '../helpers/ProjectList';
import PortfolioItem from '../components/PortfolioItem';
import '../styles/Portfolio.css'

function Portfolio() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Projects </h1>
        <div className='menuList'>
            { ProjectList.map((projectItem, key)=>{
                return <PortfolioItem key={key} image={projectItem.image} name={projectItem.name} description={projectItem.description} url={projectItem.url} />
            })}
        </div>
    </div>
  )
}

export default Portfolio