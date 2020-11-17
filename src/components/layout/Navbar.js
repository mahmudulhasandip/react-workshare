import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInlinks'
import SignedOutlinks from './SignedOutLinks'

function Navbar(){
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">WorkShare</Link>
                <SignedInLinks />
                <SignedOutlinks />
            </div>
        </nav>
    )
}

export default Navbar