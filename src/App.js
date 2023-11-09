import { useState } from 'react';
import './App.css';
import assortment79 from './assets/images/Assortment79.jpg'

const projects = [
    {
      title: 'VayuAI Wind Opportunity Tool',
      text:
          "Allows geolocation and viewing of all US Wind Turbines. Users can view details pertaining to each US turbine and wind farm as well as Vayu generated Power Reporst. Built with the REACT, AWS, Mapbox",
      // image: yellow,
      name: 'Turbine Viewer',
      href: 'https://vayuaidata.com',
      alt: 'Turbine Viewer gif',
      src: require('./assets/images/TurbineViewer.png'),
      bg: 'blue.300'
    },
    {
      title: 'VayuAI Wind Dashboards',
      text:
          "Displays current and historical wind data for wind farm operators.",
      // image: yellow,
      name: 'Turbine Viewer',
      href: 'https://vayuaidata.com',
      alt: 'Wind Dash gif',
      src: require('./assets/images/WindDash.png'),
      bg: 'blue.300'
    },
      {
        title: 'Cocktail and Music Pairings',
        text:
          "This application returns a list of music recommended to pair with a selected cocktail. Users can add their favorite music to a favorites list that is stored locally. Built with JQuery, HTMl, and Bootstrap CSS.",
        // image: blue,
          name: 'Cocktail and Music Pairings',
          href: 'https://alavezzo.github.io/prism/',
          github: 'https://github.com/alavezzo/prism#readme',
          alt: 'Cocktail and Music Pairings SplashPage',
          src: 'https://media.giphy.com/media/pPirlhtP77nifbTuPc/giphy.gif',
          bg: 'green.200'
      },
      {
        title: 'Employee Database Interface',
        text:
          "This command line application guides users as they interface with a MySql database storing Employee information. Built with Node.js, Inquirer, and MySql.",
        // image: pink,
        name: 'Employee Database Interface',
        href: 'https://github.com/alavezzo/employee-tracker#readme',
        github: 'https://github.com/alavezzo/employee-tracker#readme',
        alt: 'Interface Depiction',
        src: 'https://media.giphy.com/media/qAVT2mN2FY1FJgp8tg/giphy.gif',
        bg: 'blue.300'
      }
]
  
const mouseEnter = (e) => {
  e.target.style={color: '#d14031',  cursor: 'pointer'}
}
function App() {
  const [menuItem, setMenuItem] = useState(0)
  
  return (
    <div className="App">
      <div className='left-column'>
        <div className='sub-header'>
          <h2  style={{textAlign: 'left'}}>Anthony Lavezzo</h2>
          <div className='menu' style={{textAlign: 'left'}}>
            <a onMouseEnter={mouseEnter} style={{fontWeight: menuItem===0 ? 'bold' : 'normal', color: menuItem===0 ? '#d14031' : ' #d2d1d0'}} href='#about'>
            FullStack Developer
            </a>
            <a onMouseEnter={mouseEnter}style={{fontWeight: menuItem===1 ? 'bold' : 'normal', color: menuItem===1 ? '#d14031' : ' #d2d1d0'}}href='#projects'>
            Projects 
            </a>
            <a onMouseEnter={mouseEnter} style={{fontWeight: menuItem===2 ? 'bold' : 'normal', color: menuItem===2 ? '#d14031' : ' #d2d1d0'}}href='#hobbies'>
            Other fun stuff
            </a>
            </div>
        </div>
        
          
        </div>

      <div className='sideName' style={{width: '10%'}} >

        <h1> 
          P
        </h1>
        <h1>
          L
        </h1>
        <h1>
          A
        </h1>
        <h1>
          N
        </h1>
        <h1 style={{marginTop: '8vh'}}>
          D
        </h1>
        <h1>
         E
        </h1>
        <h1>
          S
        </h1>
        <h1>
          I
        </h1>
        <h1 >
          G
        </h1>
        <h1>
        N
        </h1>
        <h1 style={{marginTop: '8vh'}}>
          B
        </h1>
        <h1>
         U
        </h1>
        <h1>
         I
        </h1>
        <h1>
         L
        </h1>
        <h1>
         D
        </h1>
      </div>
      <div  id='about' className='right-column'>
        <div className='sub-header'>
            <p style={{textAlign: 'center'}}>
           I began to code a couple years ago and haven't looked back. What started as an outlet for creative energy soon became a professional pursuit. Currently, I work for <a target='_blank' href={'https://vayuai.com'}style={{textDecoration: 'none', color: '#d14031'}}>Vayu AI</a> helping develop fullstack applications. 
            </p>
          </div>
         <div className='sub-header'>
            <p className='second-p' style={{textAlign: 'center'}}>
              In my free time I write music,  paint, and draw. 
            </p>
          </div>     
          <div id="projects"  style={{display: 'flex', flexDirection: 'column', alignItems: 'right', width: '100%'}}className='sub-header'>
            <h2 className='second-h2'  style={{textAlign: 'center'}}>Projects </h2>
            <ul className={'projects'} > {projects.map((project,idx) => (
                <li className='project-list-item' key={idx} >
                    <a href={project.href} target='_blank' className='project-list-button' >
                    <img style={{boxShadow: '0 0 5px #d14031',height: '75px', width: '120px'}} src={project.src} alt={project.alt}></img>
                      <div style={{marginTop: 0, marginLeft: 25, padding: 0}}>
                      <h3 style={{margin: 0, padding: 0}}> {project.title}</h3>
                    <p>{project.text}</p>
                    </div>
                   
                        </a>
                        
                    </li>
                ))} </ul> 
          </div>
          <h2  id='hobbies' style={{textAlign: 'center'}}>Other fun stuff </h2>
          <img src={assortment79}/>
         
      </div>
    </div>
  );
}

export default App;
