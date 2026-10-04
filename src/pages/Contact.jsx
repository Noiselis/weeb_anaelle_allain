import { useState } from "react";

export default function Contact() {
    const inputStyle =
        "border-b-2 border-secondary size-fit m-4 focus:border-2 focus:outline-none text-center focus:placeholder:opacity-0";
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [emailAdress, setEmailAdress] = useState("");
    const [message, setMessage] = useState("");

    const handleLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleEmailAdress = (event) => {
        setEmailAdress(event.target.value);
    };
    const handleMessage = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div className=" text-white text-center p-[5%] md:pl-[25%] md:pr-[25%]">
            <h1>Votre avis compte !</h1>
            <p>
                Votre retour est essentiel pour nous améliorer ! Partagez votre
                expérience, dites-nous ce que vous aimez et ce que nous
                pourrions améliorer. Vos suggestions nous aident à faire de ce
                blog une ressource toujours plus utile et enrichissante.{" "}
            </p>
            <form /*  className="bg-tertiary rounded-2xl border-2 border-secondary text-center flex flex-col justify-evenly p-8 m-8 size-fit" */
            >
                <div className="bg-tertiary rounded-2xl border-2 border-secondary text-center p-8 m-8 size-fit w-min">
                    <div className="sm:flex w-full">
                        <input
                            type="text"
                            value={lastName}
                            className={inputStyle}
                            onChange={handleLastName}
                            placeholder="Nom"
                        ></input>
                        <input
                            type="text"
                            value={firstName}
                            className={inputStyle}
                            onChange={handleFirstName}
                            placeholder="Prénom"
                        ></input>
                    </div>
                    <input
                        type="email"
                        value={emailAdress}
                        className={inputStyle}
                        onChange={handleEmailAdress}
                        placeholder="E-mail"
                    ></input>
                    <textarea
                        value={message}
                        className="border-b-2 border-secondary pr-4 pl-4 mb-4 mt-4 focus:border-2 focus:outline-none resize-none text-center focus:placeholder:opacity-0 focus:text-left field-sizing-content w-full"
                        onChange={handleMessage}
                        placeholder="Message"
                        rows={1}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-secondary text-white rounded p-2 pl-4 pr-4 size-fit m-2 mt-4"
                    >
                        Contact
                    </button>
                </div>
            </form>
        </div>
    );
}
