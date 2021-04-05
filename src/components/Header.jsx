import Logo from '../images/logo.png'


function Header() {
    return (
        <header className='app-header'>
            <img src={Logo}></img>
            <span className='header-text'>Avatariya</span>
        </header>
    );
};

export default Header;