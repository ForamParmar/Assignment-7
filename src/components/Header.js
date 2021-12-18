import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div align='center'>
            <h1>Cart Application</h1>
            <Link to='/about'>About Us</Link>
            </div>    
        </header>
    )
}

export default Header
