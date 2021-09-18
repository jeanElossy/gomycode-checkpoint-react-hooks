import React from 'react'

const NavBar = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 p-3">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="#" >FILMS</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <form>
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default NavBar;