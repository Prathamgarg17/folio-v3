// import './index.scss'
// import { useState } from 'react'
// import LogoS from '../../assets/images/logo-p.png'
// // import LogoSubtitle from '../../assets/images/logo-p.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faLinkedin,
//   faGithub,
//   faYoutube,
//   faSkype,
// } from '@fortawesome/free-brands-svg-icons'
// import {
//   faHome,
//   faUser,
//   faEnvelope,
//   faSuitcase,
//   faBars,
//   faClose,
// } from '@fortawesome/free-solid-svg-icons'
// import { Link, NavLink } from 'react-router-dom'

// const Sidebar = () => {
//   const [showNav, setShowNav] = useState(false);

//   return (
//     <div className="nav-bar">
//       <Link 
//         className="logo"
//         to="/"
//         onClick={() => setShowNav(false)}>
//         <img src={LogoS} alt="Logo" />
//         {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
//       </Link>
//       <nav className={showNav ? 'mobile-show' : ''}>
//         <NavLink 
//           exact="true"
//           activeclassname="active"
//           to="/"
//           onClick={() => setShowNav(false)}>
//           <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
//         </NavLink>
//         <NavLink 
//           activeclassname="active"
//           className="about-link"
//           to="/about"
//           onClick={() => setShowNav(false)}>
//           <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
//         </NavLink>
//         <NavLink
//           activeclassname="active"
//           className="portfolio-link"
//           to="/portfolio"
//           onClick={() => setShowNav(false)}
//         >
//           <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
//         </NavLink>
//         <NavLink
//           activeclassname="active"
//           className="contact-link"
//           to="/contact"
//           onClick={() => setShowNav(false)}
//         >
//           <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
//         </NavLink>
//         <FontAwesomeIcon 
//           onClick={() => setShowNav(false)}
//           icon={faClose}
//           color="#ffd700"
//           size="3x"
//           className='close-icon' />
//       </nav>
//       <ul>
//         <li>
//           <a
//             href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faLinkedin}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://github.com/bobangajicsm"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faGithub}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
//             rel="noreferrer"
//             target="_blank"
//           >
//             <FontAwesomeIcon
//               icon={faYoutube}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
//             <FontAwesomeIcon
//               icon={faSkype}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//       </ul>
//       <FontAwesomeIcon 
//           onClick={() => setShowNav(true)}
//           icon={faBars}
//           color="#ffd700"
//           size="3x"
//           className='hamburger-icon' />
//     </div>
//   )
// }

// export default Sidebar

import './index.scss'
import LogoP from '../../assets/images/logo-p.png'
import LogoSubtitle from '../../assets/images/Portfolio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faLinkedin,
//   faGithub,
//   faYoutube,
//   faSkype,
// } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faBars ,faClose } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav , setShowNav] = useState(false);


  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoP} alt="Logo" id='log'/>
        <img src={LogoSubtitle} alt="Logo" id='sub'/>
      </Link>
      <nav className={showNav ? 'mobile-show':''}>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
        onClick={()=>setShowNav(false)} 
        icon={faClose}
        color="#4d4d4e"
        size="3x"
        className='close-icon'
        />
      </nav>
      {/* <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"  id='linkdn'/>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" id='git'/>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" id='yt' />
          </a>
        </li>
        <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" id='sky' />
          </a>
        </li>
      </ul> */}
      <FontAwesomeIcon 
      onClick={()=> setShowNav(true)}
      icon={faBars}
      color="#ffd700"
      size="3x"
      className='hamburger-icon'
      />
    </div>
  )
}
export default Sidebar