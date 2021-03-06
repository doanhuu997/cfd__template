
import React, { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Popup, userLogin, userLogout } from "../redux/reducers/authReducers"
import { NavLink } from 'react-router-dom';
import { Context } from '../core/AppProvider';
import logo from './logo.svg'
export default function Header() {
    let { linkLoading } = useContext(Context)
    let dispatch = useDispatch()
    function openMenu() {
        document.body.classList.toggle('menu-is-show')
    }
    function over_play() {
        document.body.classList.remove('menu-is-show')
    }
    const auth = useSelector(state => state.auth)
    const user = auth.user
    function btn_logout() {
        dispatch(userLogout())
    }
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={openMenu}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <NavLink exact to="/" className="logo" >
                        <img src={logo} alt="" />
                        <h1>CFD</h1>
                    </NavLink>
                    <div className="right">

                        {auth.login ? (
                            <div className="have-login">
                                <div className="account">
                                    <a href="#" className="info">
                                        <div className="name">{user.name}</div>
                                        <div className="avatar">
                                            <img src="img/avt.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <a href="#">Kh??a h???c c???a t??i</a>
                                    <a href="#">Th??ng tin t??i kho???n</a>
                                    <a href="#" onClick={btn_logout}>????ng xu???t</a>
                                </div>
                            </div>
                        )
                            : (
                                <div class="not-login bg-none">
                                    <a href="#" class="btn-register" onClick={() => dispatch(Popup(true))}>????ng nh???p</a>
                                    <a href="login.html" class="btn main btn-open-login">????ng k??</a>
                                </div>
                            )}




                    </div>
                </div>
            </header><div>
                <nav className="nav">
                    <ul>
                        <li className="li_login">
                            <a href="#">????ng nh???p</a>
                            <NavLink to="/register">????ng k??</NavLink>
                        </li>
                        <li >
                            <NavLink onClick={linkLoading} exact to="/">Trang ch???</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={linkLoading} to="/team">CFD Team</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={linkLoading} to="/courses">Kh??a H???c</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={linkLoading} to="/project">D??? ??n</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={linkLoading} to="/contact">Li??n h???</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="overlay_nav" onClick={over_play} />
            </div></>

    )
}