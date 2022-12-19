import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function UserHeader(props) {
    const history = useHistory();

    const token = localStorage.getItem(
        process.env.REACT_APP_ACCESS_TOKEN_NAME
    );

    const onClickLogout = () => {
        localStorage.clear();
        history.push('/log-in');
    }

    return (
        <React.Fragment>
            {/* <!-- Humberger Begin --> */}
            <div className="humberger__menu__overlay"></div>
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <a href="#"><img src="img/logo.png" alt="" /></a>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                        <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__register">
                        <img src="img/language.png" alt="" />
                        <div>English</div>
                        <span className="arrow_carrot-down"></span>
                        <ul>
                            <li><a href="#">Spanis</a></li>
                            <li><a href="#">English</a></li>
                        </ul>
                    </div>
                    <div className="header__top__right__auth">
                        <a href="/log-in"><i className="fa fa-user"></i> Login</a>
                    </div>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/">Shop</a></li>
                        {/* <li><a href="#">Pages</a>
                            <ul className="header__menu__dropdown">
                                <li><a href="/">Shop Details</a></li>
                                <li><a href="/cart">Shoping Cart</a></li>
                                <li><a href="/">Check Out</a></li>
                            </ul>
                        </li> */}
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="header__top__right__social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li><i className="fa fa-envelope"></i> team11@gmail.com</li>
                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>
            {/* <!-- Humberger End --> */}

            {/* <!-- Header Section Begin --> */}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope"></i> team11@gmail.com</li>
                                        <li>Free Shipping for all Order of $99</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">


                                    {token == null
                                        ?
                                        <div className="header__top__right__register">
                                            <a href="/register"><i className="fa fa-user"></i> Register</a>
                                        </div>
                                        :
                                        <div className="header__top__right__social">
                                            <a href="/profile">Profile</a>
                                        </div>
                                    }

                                    <div className="header__top__right__auth">
                                        {token != null
                                            ?
                                            <a onClick={onClickLogout}> Logout</a>
                                            :
                                            <a href="/log-in"><i className="fa fa-user"></i> Login</a>
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <a href="/"><img src="img/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><a href="/">Home</a></li>
                                    <li><a href="/">Shop</a></li>
                                    {/* <li><a href="#">Pages</a>
                                        <ul className="header__menu__dropdown">
                                            <li><a href="/">Shop Details</a></li>
                                            <li><a href="/cart">Shoping Cart</a></li>
                                            <li><a href="/">Check Out</a></li>
                                        </ul>
                                    </li> */}
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    {/* <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li> */}
                                    <li><a href="/cart"><i className="fa fa-shopping-bag"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
            {/* <!-- Header Section End --> */}
        </React.Fragment>
    )
};
