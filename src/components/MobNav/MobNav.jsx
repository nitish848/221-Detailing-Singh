import React from 'react'
import "./mobnav.css"
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { AiOutlineHome } from 'react-icons/ai';
import { MdMiscellaneousServices } from 'react-icons/md';
import { RiGalleryFill } from 'react-icons/ri';
import { VscPreview } from 'react-icons/vsc';
import { MdOutlineContactSupport } from 'react-icons/md';

const MobNav = () => {
    return (
        <ul className='mobnav'>
            <Link activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                hashSpy={true}
            >
                Home <AiOutlineHome />
            </Link>
            <Link activeClass="active"
                to="Services"
                spy={true}
                smooth={true}
                hashSpy={true}

            >
                Services <MdMiscellaneousServices />
            </Link>
            <Link activeClass="active"
                to="Gallery"
                spy={true}
                smooth={true}
                hashSpy={true}

            >
                Gallery <RiGalleryFill />
            </Link>
            <Link activeClass="active"
                to="Testimonials"
                spy={true}
                smooth={true}
                hashSpy={true}

            >
                Testimonials <VscPreview />
            </Link>
            <Link activeClass="active"
                to="ContactUs"
                spy={true}
                smooth={true}
                hashSpy={true}

            >
                Contact Us <MdOutlineContactSupport />
            </Link>


        </ul>
    )
}

export default MobNav