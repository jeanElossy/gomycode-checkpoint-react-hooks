import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav class="navbar container-fluid header p-3 ">
                <div class="container-fluid">
                    <div>
                        <a className="navbar-brand">FILMS</a>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </nav>
        </>
    )
}
export default NavBar;