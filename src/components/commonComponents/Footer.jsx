import SocialMedia from "../../assets/SocialMedia";

export default function Footer() {
    const buttonStyle = "p-3 text-black";
    const titleStyle = "p-2 text-gray font-semibold";
    const divStyle = "flex flex-col p-[2%] text-center";
    return (
        <div className="bg-white p-[4%]" id="footer">
            <div className="flex justify-evenly">
                <h3>weeb</h3>
                <div className={divStyle}>
                    <h5 className={titleStyle}>PRODUITS</h5>
                    <button className={buttonStyle}>Prix</button>
                    <button className={buttonStyle}>
                        Produits les plus populaires
                    </button>
                    <button className={buttonStyle}>Parcourir le site</button>
                    <button className={buttonStyle}>Accessibilité</button>
                </div>
                <div className={divStyle}>
                    <h5 className={titleStyle}>SOLUTIONS</h5>
                    <button className={buttonStyle}>Brainstorming</button>
                    <button className={buttonStyle}>
                        Trouver les idées avec vous
                    </button>
                    <button className={buttonStyle}>
                        Maquettes fonctionnelles
                    </button>
                    <button className={buttonStyle}>Recherche</button>
                </div>
                <div className={divStyle}>
                    <h5 className={titleStyle}>RESSOURCES</h5>
                    <button className={buttonStyle}>Centre d'aide</button>
                    <button className={buttonStyle}>Blog</button>
                    <button className={buttonStyle}>Tutoriels</button>
                </div>
                <div className={divStyle}>
                    <h5 className={titleStyle}>ENTREPRISE</h5>
                    <button className={buttonStyle}>À propos</button>
                    <button className={buttonStyle}>Presse</button>
                    <button className={buttonStyle}>Évènements</button>
                    <button className={buttonStyle}>Carrière</button>
                </div>
            </div>
            <hr className="border-grey" />
            <div className="flex justify-between pt-[5%]">
                <p>@ 2025 Weeb, Inc. All rights reserved.</p>
                <div>
                    <SocialMedia />
                </div>
            </div>
        </div>
    );
}
