import Container from 'react-bootstrap/Container';
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import { Fragment, useState } from "react"
import { useSelector } from 'react-redux';

import Button from '~/components/Button';
import Nav from '~/components/Nav'
import logo from '~/assets/images/logo.png'
import Hovercart from './HoverCart';
import style from './Navbar.module.scss'
import Search from '~/components/Search';
import Account from './Account';
const cx = classNames.bind(style)
function Navbar() {

    const user = useSelector(state => state.user)

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

    const [toogleSearch, setToogleSearch] = useState({
        input: false,
        icon: true,
        navLinks: true
    })

    const [bars, setBars] = useState(false)

    const handleShowInput = () => {
        setToogleSearch({ input: true, icon: false, navLinks: false });
    }

    return (
        <div className={cx('background')}>
            <Container>
                <div className={cx('wrapper')}>

                    <Link to="/" className={cx('logo')}>
                        <img src={logo} alt="logo" />
                    </Link>

                    {!bars && <FaBars className={cx('bars')} onClick={() => setBars(true)} />}

                    {bars && <Nav handle={() => setBars(false)} />}

                    {toogleSearch.navLinks && (
                        <div className={cx('navLinks')}>
                            {
                                MAIN_NAV.map((item, index) => (
                                    <div key={index} className={cx('link')}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </div>
                                ))
                            }
                            <Button primary>Our Deals</Button>
                        </div>
                    )}

                    <div className={cx('search', toogleSearch.input && 'activeF')}>
                        <Search />
                    </div>

                    <div className={cx('actions')}>
                        {toogleSearch.icon && (
                            <div className={cx('hideTablet')} onClick={handleShowInput}>
                                <AiOutlineSearch className={cx('icon')} />
                            </div>
                        )}
                        {
                            user.value.id ? (
                                <Fragment>
                                    <Link to="/yourcart" className={cx('icon')}>
                                        <Hovercart />
                                    </Link>
                                    <Account user={user} />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Hovercart />
                                    <Account user={user} />
                                </Fragment>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Navbar;