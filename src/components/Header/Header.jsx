import { useState } from 'react'
import './Header.css'
import { FaHome, FaCode, FaGithubSquare, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";

export function Header() {

    let [navSelect, setNavSelect] = useState(0)

    let navItems = [
        {
            text : 'Inicio',
            url : '#',
            icon : <FaHome size={14} />,
            style : 'flex flex-center align-center height-100 p-inline-4 p-block-2 radius-3'
        },
        {
            text : 'Proyectos',
            url : '#',
            icon : <FaCode size={14} />,
            style : 'flex flex-center align-center height-100 p-inline-4 p-block-2 radius-3'
        },
        {
            text : 'Sobre mí',
            url : '#',
            icon : <FaUserGear size={14} />,
            style : 'flex flex-center align-center height-100 p-inline-4 p-block-2 radius-3'
        }
    ]
    

    let [lightSelect, setLightSelect] = useState(0)

    let lightMode = [
        {
            icon: <FaMoon size={16} style={{ color: 'var(--select)' }}/>,
            style : 'light-icon flex aling-center p-1 radius-3 op-5 pointer',
            state : 'dark'   
        },
        {
            icon: <FaSun size={16} style={{ color: 'var(--select)' }}/>,
            style : 'light-icon flex aling-center p-1 radius-3 op-5 pointer',
            state : 'light'   
        }
    ]
    return(
        <header className='header height-70p width-100 flex flex-between align-center p-inline-4'>
           <FaCode size={40} style={{ color: 'var(--select)', minWidth: '132px' }}/>
            <nav className='header-nav relative grid col-3 align-content-center width-content radius-4'>
                { navItems.map((item, i) => (
                    <a onClick={ () => setNavSelect(i) } key={item.text + i} href={item.url} className={item.style }>
                        <span className={ navSelect == i && "select-span"}>{item.text}  {item.icon}</span>                    
                    </a>
                  ))
                }
                <div className={`move-background-nav bg-1 absolute radius-4 ${ navSelect == 0 && ""} ${ navSelect == 1 && "move-nav-1"} ${ navSelect == 2 && "move-nav-2"}`}></div>
            </nav>
            <div className='right-header flex flex-center align-center gap-3'>
                <div className='contact-header flex flex-center align-center'>
                    <a href="#" className='flex flex-center align-center op-5'><FaGithubSquare size={30} style={{ color: 'var(--select) ' }}/></a>
                    <a href="#" className='flex flex-center align-center op-5'><FaLinkedin size={30} style={{ color: 'var(--select)' }}/></a>
                </div>
                <div className='light-mode flex flex-between align-center gap-2 radius-3 relative'>
                    { lightMode.map((mode, i) => (
                            <div onClick={ () => setLightSelect(i) } key={mode.state + i}  className={`${mode.style} ${lightSelect === i ? "light-icon-select" : ""}`}>
                            {mode.icon}
                            </div>
                        ))
                    }
                    <div className={`move-background-lmode bg-1 absolute radius-4 ${lightSelect == 0  ? 'move-lmode-1' : ''} ${lightSelect == 1  ? 'move-lmode-2' : ''}`}>
                    </div> 
                </div>             
            </div>
        </header>
    )
    
} 

