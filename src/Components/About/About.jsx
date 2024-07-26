import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
const About = () => {
  return (
    <div id = 'about' className='about'>
    <div className='about-title'>
    <h1>About Me</h1>
    <img src = {theme_pattern} alt='' />
    </div>
    <div className='about-sections'>
    <div className='about-left'>
    <img src={profile_img} alt='' />
    </div>
    <div className='about-right'>
        <div className='about-para'>
            <p>I am on my way to become a full stack developer. I am currently Focusing on the Frontend part.</p>
            <p>My passion for full stack development started when I was learning HTML and CSS.</p>
        </div>
        <div className='about-skills'>
        <div className='about-skill'><p>HTML & CSS </p> <hr style={{width:'50%'}} /></div>
        <div className='about-skill'><p>React JS </p> <hr style={{width:'70%'}} /></div>
        <div className='about-skill'><p>JavaScript </p> <hr style={{width:'60%'}} /></div>
        <div className='about-skill'><p>Next JS</p> <hr style={{width:'30%'}} /></div>
    </div>
    </div>
    </div>
<div className='about-achievments'>
<div className='about-achievment'>
    <h1>1</h1>
    <p>Years of Experience</p>
</div>
<hr />
<div className='about-achievment'>
    <h1>20+</h1>
    <p>PROJECTS COMPLETED</p>
</div>
<hr />
<div className='about-achievment'>
    <h1>10+</h1>
    <p>HAPPY CLIENTS</p>
</div>
</div>
</div>
  )
}

export default About
