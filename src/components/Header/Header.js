import {Link} from "react-router-dom";
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Ready to travel</Link>
      </div>
      <nav className='navigation'>
        <ul className='navigation-list'>
          <li className='navigation-list-link'><Link to='/countries'>Страны</Link></li>
          <li className='navigation-list-link'><Link to='/check-list'>Чек лист</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
