import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import { Fragment } from "react";

import Button from '~/components/Button';
import logo from '~/assets/images/logo.png'
import style from './Nav.module.scss'
const cx = classNames.bind(style)

function OverLay({ handle }) {

    //isNav
    const MAIN_NAV = [
        {
            display: "Laptops",
            path: "/filter"
        },
        {
            display: "Desktop PCs",
            path: "/filter"
        },
        {
            display: "Netwoking Devices",
            path: "/filter"
        },
        {
            display: "Printers & Scanners",
            path: "/filter"
        },
        {
            display: "PC Parts",
            path: "/filter"
        },
        {
            display: "All Other Products",
            path: "/filter"
        },
        {
            display: "Repairs",
            path: "/filter"
        }
    ]

    return (
        <div className={cx('isNav')}>
            <Fragment>
                <div className={cx('isNavTablet-head')}>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>

                    <AiOutlineClose
                        className={cx('xmark-icon')}
                        onClick={handle}
                    />
                </div>
                <div className={cx('isNavTablet-body')}>
                    {MAIN_NAV.map((item, index) => (
                        <div key={index} className={cx('isLinksTab')}>
                            <Link to={item.path}>{item.display}</Link>
                        </div>
                    ))}

                    <Button primary to="/comming" >Our Deals</Button>
                </div>
            </Fragment>
        </div>
    );
}

export default OverLay;