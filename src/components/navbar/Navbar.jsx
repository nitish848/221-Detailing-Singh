import React, { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




import "./navbar.css";
const Navbar = () => {
    useEffect(() => {
        Events.scrollEvent.register('begin', function (to, element) {
            console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log('end', arguments);
        });

        scrollSpy.update();
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    });
    return (
        <>
            <ul className="header">
                <ul>
                    <li className='logo'>LOGO</li>
                </ul>
                <ul className='nav'>
                    <Link activeClass="active"
                        to="Home"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                    >
                        Home
                    </Link>
                    <Link activeClass="active"
                        to="Services"
                        spy={true}
                        smooth={true}
                        hashSpy={true}

                    >
                        Services
                    </Link>
                    <Link activeClass="active"
                        to="Gallery"
                        spy={true}
                        smooth={true}
                        hashSpy={true}

                    >
                        Gallery
                    </Link>
                    <Link activeClass="active"
                        to="Testimonials"
                        spy={true}
                        smooth={true}
                        hashSpy={true}

                    >
                        Testimonials
                    </Link>
                    <Link activeClass="active"
                        to="ContactUs"
                        spy={true}
                        smooth={true}
                        hashSpy={true}

                    >
                        Contact Us
                    </Link>


                </ul>

            </ul>
        </>
    );
}

export default Navbar