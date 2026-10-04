import { useState } from "react";

export default function SignIn() {
    const [isSamePassword, setIsSamePassword] = useState("true");
    const [password, setPassword] = useState("");

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handlePasswordConfirmation = (e) => {
        e.target.value === password
            ? setIsSamePassword(true)
            : setIsSamePassword(null);
    };

    return (
        <div className="text-white flex flex-col content-center text-center p-8">
            <h1>Créer un compte</h1>
            <form /*  className="flex flex-col text-center content-center" */>
                <div className="text-center flex flex-col items-center m-8">
                    <input
                        type="text"
                        placeholder="Nom"
                        className="border-b-2 border-secondary size-fit m-4 focus:border-2 focus:outline-none text-center focus:placeholder:opacity-0"
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder="Prénom"
                        className="border-b-2 border-secondary size-fit m-4 focus:border-2 focus:outline-none text-center focus:placeholder:opacity-0"
                        required
                    ></input>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="border-b-2 border-secondary size-fit m-4 focus:border-2 focus:outline-none text-center focus:placeholder:opacity-0"
                        required
                    ></input>
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={handlePassword}
                        className="border-b-2 border-secondary size-fit m-4 focus:border-2 focus:outline-none text-center focus:placeholder:opacity-0"
                        required
                    ></input>
                    <input
                        type="password"
                        placeholder="Confirmation du mot de passe"
                        onChange={handlePasswordConfirmation}
                        className="border-b-2 border-secondary size-fit m-4 focus:border-2 focus:outline-none text-center focus:placeholder:opacity-0"
                        required
                    ></input>
                    <button
                        type="submit"
                        className="bg-secondary hover:bg-secondaryHover rounded p-4 text-white size-fit"
                    >
                        S'inscrire
                    </button>
                </div>
            </form>
            <a href="/login" className="p-4">
                Vous avez déjà un compte ? Cliquez ici pour vous connecter !
            </a>
        </div>
    );
}
