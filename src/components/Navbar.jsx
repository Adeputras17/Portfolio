
import './Navbar.css'
import navIcon1 from '../assets/nav-icon1.svg'
import navIcon3 from '../assets/nav-icon3.svg'
import navIcon2 from '../assets/iconmonstr-github-1.svg'


const Navbar = () => {

    const links = [
        {
            id: 1,
            link:'home'
        },
        {
            id: 1,
            link:'about'
        },
        {
            id: 1,
            link:'skills'
        },
        {
            id: 1,
            link:'project'
        }
    ]

  return (
    <div className="Nav-con">
        <div>
            <h1 className='Nav-logo'>Ade Putra</h1>
        </div>
        <ul className='Nav-ul'>
            {links.map(({id, link})=> (
                <li className='Nav-li'>{link}</li>
            ))}
        </ul>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#top'><img src={navIcon1} alt=''/></a>
                <a href='#center'><img src={navIcon2} alt=''/></a>
                <a href='#botom'><img src={navIcon3} alt=''/></a>
            </div>
            <button className="vvd"><span>Let’s Connect</span></button>
        </span>
    </div>
  );
};

export default Navbar