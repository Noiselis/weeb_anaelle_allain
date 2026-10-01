import { useState } from "react";
import HamburgerMenuIcon from "../assets/HamgurgerMenuIcon";

export default function Menu() {
    return (
        <div className="rounded-2xl flex-col shadow p-2 pl-4 pr-4">
            <div className="flex flex-col">
                <button className="p-2 m-1">À propos</button>
                <button className="p-2 m-1">Contact</button>
            </div>
            <div className="flex flex-col mt-8">
                <button className="p-2 m-1">Se connecter</button>
                <button className="p-2 pl-4 pr-4 m-1 bg-secondary rounded">
                    S'inscrire
                </button>
            </div>
        </div>
    );
}
