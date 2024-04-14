"use client";
// import 'mmenujs/style';
import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Vk,
} from "../public/svg/social/IconSocial";

export default function MobileHeader() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <div className="industify_fn_mobilemenu_wrap">
        <div className="industify_fn_toppanel">
          <div className="left_panel">
            <div className="info">
              <Link href="tel:8328995970">832-899-5970</Link>
            </div>
            <div className="info">
              <Link href="mailto:Stone@vortexconstructiontx.com">
                Stone@vortexconstructiontx.com
              </Link>
            </div>
            <div className="industify_fn_social_list">
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/vortexconstruction/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook className="fn__svg" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.instagram.com/vortex.construction/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="fn__svg" />
                  </Link>
                </li>

                {/* <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Linkedin className="fn__svg" />
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- LOGO & HAMBURGER --> */}
        <div className="logo_hamb">
          <div className="in">
            <div className="menu_logo">
              <Link href="/">
                <img src="/img/vortex-logo-white.png" alt="Vortex Logo" />
              </Link>
            </div>
            <div
              onClick={MobileMenuTrueFalse}
              className={
                !isMobileMenu
                  ? "hamburger hamburger--collapse-r"
                  : "hamburger hamburger--collapse-r is-active"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /LOGO & HAMBURGER --> */}
        {/* <!-- MOBILE DROPDOWN MENU --> */}
        <div
          className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}
        >
          <div>
            <nav>
              <ul className="mmenu">
                <li className="menu-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link href="/services">About Us</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <!-- /MOBILE DROPDOWN MENU --> */}
      </div>
    </>
  );
}
