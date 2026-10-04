import { useState } from "react";
import HamburgerMenuIcon from "../../assets/HamgurgerMenuIcon";

export default function Menu() {
    return (
        <div className="rounded-2xl flex-col shadow p-2 pl-4 pr-4">
            <div className="flex flex-col">
                <a href="/blog" className="p-2 m-1">
                    Blog
                </a>
                <a href="/contact" className="p-2 m-1">
                    Contact
                </a>
            </div>
            <div className="flex flex-col mt-8">
                <a href="/login" className="p-2 m-1">
                    Se connecter
                </a>
                <a
                    href="/signin"
                    className="p-2 pl-4 pr-4 m-1 bg-secondary rounded"
                >
                    S'inscrire
                </a>
            </div>
        </div>
    );
}
