import navIcon from '../assets/img/logo-full.svg'
import decorateIcon from '../assets/img/pattern-squiggly-line-top.svg'

const NavBar = () => {
    return (
        <nav className='w-full relative'>
            <img src={navIcon} alt="" className='m-auto pt-5'/>
            <img src={decorateIcon} alt="" className='h-20 w-28 absolute top-0 right-0' />
        </nav>
    )
}

export default NavBar