import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Cart from './cart';
function Nav({ totalItems, cart, removeItem, emptyCart, filterBooks, handleSubmit, handleSearch }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="ketaby">كتابي</Link>
                    <button className="btn btn-primary menu-btn order-last" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvasExample" aria-controls="offcanvasExample">
                        <i className='fa-solid fa-bars'></i>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={"-1"} id="offCanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h3 className="offcanvas-title" id="offcanvasExampleLabel">قايمة كتابي</h3>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="ketaby/arabicbooks">روايات عربية</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/forigen">روايات أجنبية</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/translated">روايات مترجمة</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/books">كتب</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/series">سلاسل</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="search">
                        <form className='d-flex' action="" method="get" onSubmit={handleSubmit}>
                            <input id='search' className="search form-control" name='s' onChange={handleSearch} type="search" placeholder="إبحث عن كتابك هنا" aria-label="Search" />
                        </form>
                        <ul className="result" id='result'>
                            {filterBooks.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Link to={`/ketaby/${item.id}`}>{item.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="cart">
                        <div className="count">{totalItems}</div>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-label='cart' aria-controls="offcanvasRight">
                            <i className="fa-solid fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </nav>
            <Cart cart={cart} removeItem={removeItem} emptyCart={emptyCart} />
        </header>
    );
}
export default Nav;