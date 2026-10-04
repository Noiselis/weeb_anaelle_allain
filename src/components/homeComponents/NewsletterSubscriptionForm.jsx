// Only a first draft, to finish and polish

export default function NewsletterSubscriptionForm() {
    return (
        <form className="text-center m-4">
            <label htmlFor="newsletterNameInput" className="p-2" for>
                Votre prénom
            </label>
            <input
                type="text"
                className="border-secondary border-2 rounded-lg outline-none p-2"
                id="newsletterNameInput"
            ></input>
            <label htmlFor="newsletterEmailInput" className="p-2">
                Votre adresse mail
            </label>
            <input
                type="email"
                className="border-secondary border-2 rounded-lg outline-none p-2"
                id="newsletterEmailInput"
            ></input>
            <button
                type="submit"
                className="bg-secondary hover:bg-secondaryHover text-white rounded-lg p-2 pl-4 pr-4 ml-4"
            >
                S'abonner à la newsletter
            </button>
        </form>
    );
}
