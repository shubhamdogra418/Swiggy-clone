const Title =()=> {
    return (
        <img className="logo" src="https://www.logopeople.in/wp-content/uploads/2022/10/bahama-eats-N-YC-USA-3.png"/>
    )
}


const Header = () =>{
    return (
        <div className="header">
            <Title/>    
            <div>
                <ul className="nav-items">
                    <li> Home</li>
                    <li> About</li>
                    <li> Contact</li>
                    <li> Cart </li>
                </ul>
            </div>
        </div>
    )
}


export default Header;