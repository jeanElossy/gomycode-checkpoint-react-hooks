import React from 'react'

const NavBar = ({search, searchRating}) => {

    return (
        <>
            <nav className="navbar container-fluid header p-3 ">
                <div className="container-fluid">
                    <div>
                        <a href="#" className="navbar-brand">FILMS</a>
                    </div>
                    <form className="d-flex">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Recherche par titre" 
                            aria-label="Search" 
                            onChange={search}
                        />
                        <input 

                            className="form-control me-2" 
                            type="search" 
                            placeholder="Recherche par note" 
                            aria-label="Search" 
                            onChange={searchRating}
                        />
                    </form>
                </div>
            </nav>
        </>
    )
}
export default NavBar;