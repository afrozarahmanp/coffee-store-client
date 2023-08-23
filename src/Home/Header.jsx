import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            
                <a className="btn btn-ghost normal-case text-3xl">CoffeeStore</a>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                <Link className='fs-4 text-decoration-none' to="/addcoffee">Add Coffee</Link>
                <Link className='fs-4 text-decoration-none' to="/"><span className="ml-5">Update Coffee</span></Link>
                    
                </ul>
            </div>
            <div className="navbar-end">
                
            </div>
        </div>
    );
};

export default Header;