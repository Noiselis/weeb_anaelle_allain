import { useState } from "react";
import Desktop from "../../assets/Desktop";
import Blog from "./Blog";
import NewsletterSubscriptionForm from "./NewsletterSubscriptionForm";

export default function Explore() {
    const [openingBlog, setOpeningBlog] = useState(null);
    const [newsletterSubscription, setNewsletterSubscription] = useState(null);

    const handleDiscoverArticles = () => {
        setOpeningBlog(true);
    };

    const handleNewsletterSubscription = () => {
        newsletterSubscription
            ? setNewsletterSubscription(null)
            : setNewsletterSubscription(true);
    };

    if (openingBlog) {
        return <Blog />;
    }

    return (
        <div className="text-center">
            <h1>
                Explorez le{" "}
                <span className="font-light, text-secondary">Web</span> sous
                toutes ses{" "}
                <span className="underline decoration-secondary decoration-3 underline-offset-8">
                    facettes
                </span>
            </h1>
            <p className="m-6">
                Le monde du web évolue constamment, et nous sommes là pour vous
                guider à travers ses tendances, technologies et meilleures
                pratiques. Que vous soyez développeur, designer ou passionné du
                digital, notre blog vous offre du contenu de qualité pour rester
                à la pointe.
            </p>
            <button
                className="bg-secondary rounded-md p-2 m-2"
                onClick={handleDiscoverArticles}
            >
                Découvrir les articles
            </button>
            <button
                className="border-2 border-white rounded-md p-2 m-2"
                onClick={handleNewsletterSubscription}
            >
                S'abonner à la newsletter
            </button>
            {newsletterSubscription && <NewsletterSubscriptionForm />}
            <Desktop />
        </div>
    );
}
