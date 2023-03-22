import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { FontIcon } from "@fluentui/react";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

const Layout = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const hamburgerIcon = hamburgerOpen ? "ChromeClose" : "CollapseMenu";

    const onMobileLinkClick = () => {
        setHamburgerOpen(false);
    };

    return (
        <div className={styles.layout}>
            <header role={"banner"}>
                <nav className={styles.menu}>
                    <Link to="/" className={styles.titleContainer}>
                        <h3 className={styles.title}>GPT + Enterprise data | Sample</h3>
                    </Link>

                    <ul className={styles.menuNavList}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? styles.menuNavPageLinkActive : styles.menuNavPageLink)}>
                                Chat
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.menuNavPageLinkActive : styles.menuNavPageLink)}>
                                Ask a question
                            </NavLink>
                        </li>
                        <li>
                            <a href="https://aka.ms/entgptsearch" target={"_blank"} title="Github repository link">
                                <img
                                    src={github}
                                    alt="Github logo"
                                    aria-label="Link to github repository"
                                    width="20px"
                                    height="20px"
                                    className={styles.githubLogo}
                                />
                            </a>
                        </li>
                    </ul>
                    <h4 className={styles.rightTitle}>Azure OpenAI + Cognitive Search</h4>
                    <button className={styles.hamburger} onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                        <FontIcon aria-label="Toggle menu" iconName={hamburgerIcon} style={{ color: "#f2f2f2", fontSize: "2rem" }} />
                    </button>
                </nav>

                <div className={`${styles.mobileMenu} ${hamburgerOpen && styles.mobileMenuOpen}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? styles.menuNavPageLinkActive : styles.menuNavPageLink)}
                        onClick={onMobileLinkClick}
                    >
                        Chat
                    </NavLink>

                    <NavLink
                        to="/qa"
                        className={({ isActive }) => (isActive ? styles.menuNavPageLinkActive : styles.menuNavPageLink)}
                        onClick={onMobileLinkClick}
                    >
                        Ask a question
                    </NavLink>

                    <a href="https://aka.ms/entgptsearch" target={"_blank"} title="Github repository link" onClick={onMobileLinkClick}>
                        {"Github repository"}
                    </a>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
