import React from 'react';
import BannerPic from '../media/about-night.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about' >
        <div className='aboutTop' style={{backgroundImage: `url(${BannerPic})`}}>
            {/* <p>jgher ouhg ohg</p> */}
        </div>
        <div className='aboutBottom'>
            <h1> About</h1>
            <p className='about-me'>I’ve always sought out opportunities and challenges that are meaningful to me. Staying vigilant and self-motivated allowed me to  never stop engaging my passion to help others and solve problems.
              As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to 
              literally change the world. That's why I’m excited to make a big impact at a high growth company.</p>
        </div>
        <div className='aboutBottom'>
          <h1>
            Experience
          </h1>
          <table class="center">
            <tr>
              <th>REACT </th>
              <th><hr></hr>CSS</th>
              <th>HTML <hr></hr></th>
            </tr>
            <hr></hr>
            <tr>
              <td>GRAPHQL</td>
              <td><hr></hr>NODE</td>
              <td>MONGODB<hr></hr></td>
            </tr>
            <hr></hr>
            <tr>
              <td>MONGOOSE</td>
              <td><hr></hr>MYSQL</td>
              <td>SEQUELIZE<hr></hr></td>
            </tr>
            <hr></hr>
            <tr>
              <td>HANDLEBARS</td>
              <td><hr></hr>JQUERY</td>
              <td>DOM MANIPULATION<hr></hr></td>
            </tr>
            <hr></hr>
            <tr>
              <td>EXPRESS</td>
              <td><hr></hr>INSOMNIA</td>
              <td>AZURE<hr></hr></td>
            </tr>
            <hr></hr>
            <tr>
              <td>JAVASCRIPT</td>
              <td>BCRYPT</td>
              <td>HEROKU</td>
            </tr>
            
          </table>
        </div>
        
    </div>
  )
}

export default About