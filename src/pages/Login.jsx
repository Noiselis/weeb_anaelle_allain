export default function Login() {
    return (
        <div className="bg-primary text-white flex flex-col content-center text-center p-8">
            <h1>Se connecter</h1>
            <form /*  className="flex flex-col text-center content-center" */>
                <div className="text-center flex flex-col items-center m-8">
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="border-b-2 border-secondary size-fit m-4 focus:border-2 focus:outline-none text-center focus:placeholder:opacity-0"
                        required
                    ></input>
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        className="border-b-2 border-secondary size-fit m-4 focus:border-2 focus:outline-none text-center focus:placeholder:opacity-0"
                        required
                    ></input>
                    <button
                        type="submit"
                        className="bg-secondary hover:bg-secondaryHover rounded p-4 text-white size-fit"
                    >
                        Se connecter
                    </button>
                </div>
            </form>
            <a href="" className="p-4">
                Mot de passe oublié ?
            </a>
            <a href="/signin" className="p-4">
                Vous n'avez pas de compte ? Cliquez ici pour vous inscrire !
            </a>
        </div>
    );
}
