import { useState } from "react";
import HamburgerMenuIcon from "../../assets/HamgurgerMenuIcon";
import Menu from "./Menu";

export default function NavBar(props) {
    const [openingMenu, setOpeningMenu] = useState(null);
    const [navBarStyleMobile, setNavBarStyleMobile] = useState(
        "bg-tertiary rounded-2xl shadow p-2 pl-4 pr-4",
    );

    const handleClickMenu = () => {
        if (openingMenu) {
            setOpeningMenu(null);
            setNavBarStyleMobile(
                "bg-tertiary rounded-2xl shadow p-2 pl-4 pr-4",
            );
        } else {
            setOpeningMenu(true);
            setNavBarStyleMobile(
                "bg-tertiary rounded-2xl shadow p-2 pl-4 pr-4 flex flex-col",
            );
        }
    };

    if (props.isDeviceMobile) {
        return (
            <div className={navBarStyleMobile}>
                <div className="flex justify-between">
                    <a href="/" className="p-2">
                        <h3>weeb</h3>
                    </a>
                    <div
                        onClick={handleClickMenu}
                        className="bg-secondary rounded w-8 h-8 m-2 p-0.5 hover:bg-secondaryHover"
                    >
                        <HamburgerMenuIcon />
                    </div>
                </div>
                {openingMenu && <Menu />}
            </div>
        );
    }

    return (
        <div className="bg-tertiary text-white rounded-2xl flex flex-row justify-between shadow p-2 pl-4 pr-4">
            <div>
                <a href="/" className="p-2">
                    <h3>weeb</h3>
                </a>
                <a href="/blog" className="p-2">
                    Blog
                </a>
                <a href="/contact" className="p-2">
                    Contact
                </a>
            </div>
            <div>
                <a href="/login" className="p-2 mr-4">
                    Se connecter
                </a>
                <a
                    href="/signin"
                    className="p-2 pl-4 pr-4 bg-secondary rounded"
                >
                    S'inscrire
                </a>
            </div>
        </div>
    );
}
