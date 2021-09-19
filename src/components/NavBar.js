import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-3 header container-fluid">
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
        </>
    )
}
export default NavBar;