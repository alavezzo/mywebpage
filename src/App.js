import { useInView } from 'react-intersection-observer';
import './App.css';
import assortment79 from './assets/images/Assortment79.jpg'

const projects = [
    {
      title: 'VayuAI Wind Opportunity Tool',
      text:
          "Allows geolocation and viewing of US wind farms and turbines. Users can view details pertaining to each US turbine and wind farm as well as Vayu generated power reports. Built with the REACT, AWS, Mapbox",
      name: 'Turbine Viewer',
      href: 'https://vayuaidata.com',
      alt: 'Turbine Viewer gif',
      src: require('./assets/images/TurbineViewer.png'),
      bg: 'blue.300'
    },
    {
      title: 'VayuAI Wind Dashboards',
      text:
          "Wind monitoring displays for wind farm operators and stakeholders.",
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
 
  const {ref: aboutRef, inView: aboutSectionIsVisible} = useInView({
    threshold: .6
  }
    );
  const {ref: projectRef, inView: projectSectionIsVisible} = useInView({
    threshold: .8
  });
  const {ref: otherFunRef, inView: otherFunIsVisible} = useInView({
    threshold: .5
  });


  return (
    <div className="App">
      <div className='header-column'>
            <a className='header' href='#about'>
              Anthony Lavezzo
            </a>
          <div className='menu'>
       
            <a onMouseEnter={mouseEnter} className={aboutSectionIsVisible ? 'inView' : ' outOfView'} href='#about'>
            About
            </a>
          
            <a onMouseEnter={mouseEnter}  className={projectSectionIsVisible ? 'inView' : ' outOfView'} href='#projects'>
            Projects 
            </a>
         
            <a onMouseEnter={mouseEnter} className={otherFunIsVisible ? 'inView' : ' outOfView'} href='#hobbies'>
            Other fun stuff
            </a>
         
            </div>  

        </div>

      <div className='center-column'  >

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
        <p>FullStack Developer</p>
      </div>
      <div id='about' className='right-column'>
        <div ref={aboutRef} className='about-section'>
            <p style={{textAlign: 'center'}}>
           I began to code a couple years ago and haven't looked back. What started as an outlet for creative energy soon became a professional pursuit. Currently, I work for <a target='_blank' rel='noreferrer'  href={'https://vayuai.com'}style={{textDecoration: 'none', color: '#d14031'}}>Vayu AI</a> helping develop fullstack applications. 
            </p>
          </div>
         <div className='sub-header'>
            <p id="projects"  style={{width: '100%', textAlign: 'center'}}>
              In my free time I write music,  paint, and draw. 
            </p>
          </div>     
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'right', width: '100%'}}className='sub-header'>
            <h2  className='second-h2'  style={{textAlign: 'center'}}>Projects </h2>
            <ul ref={projectRef} className={'projects'} > {projects.map((project,idx) => (
                <li className='project-list-item' key={idx} >
                    <a href={project.href} rel='noreferrer' target='_blank' className='project-list-button' >
                    <img style={{boxShadow: '0 0 5px #d14031',height: '75px', width: '120px'}} src={project.src} alt={project.alt}></img>
                      <div style={{marginTop: 0, marginLeft: 25, padding: 0}}>
                      <h3 style={{margin: 0, padding: 0}}> {project.title}</h3>
                    <p>{project.text}</p>
                    </div>
                   
                        </a>
                        
                    </li>
                ))} </ul> 
          </div>
          <div ref={otherFunRef}>
          <h2  id='hobbies' style={{textAlign: 'center'}}>Other fun stuff </h2>
          <img alt='Assortment 79' src={assortment79}/>
          </div>
      </div>
    </div>
  );
}

export default App;
