// Only a first draft, to finish and polish

export default function NewsletterSubscriptionForm() {
    return (
        <form className="text-center flex flex-col">
            <label>Votre prénom</label>
            <input
                type="text"
                className="border-secondary border-2 rounded-lg"
            ></input>
            <label>Votre adresse mail</label>
            <input
                type="email"
                className="border-secondary border-2 rounded-lg"
            ></input>
        </form>
    );
}
