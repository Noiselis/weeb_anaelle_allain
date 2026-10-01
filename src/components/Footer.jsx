export default function Footer() {
    const buttonStyle = "p-3";
    const titleStyle = "p-2 tex-gray";
    return (
        <div className="bg-white text-black">
            <div>
                <h3>weeb</h3>
                <div>
                    <h5 className={titleStyle}>PRODUITS</h5>
                    <button className={buttonStyle}>Prix</button>
                    <button className={buttonStyle}>
                        Produits les plus populaires
                    </button>
                    <button className={buttonStyle}>Parcourir le site</button>
                    <button className={buttonStyle}>Accessibilité</button>
                </div>
                <div>
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
                <div>
                    <h5 className={titleStyle}>RESSOURCES</h5>
                    <button className={buttonStyle}>Centre d'aide</button>
                    <button className={buttonStyle}>Blog</button>
                    <button className={buttonStyle}>Tutoriels</button>
                </div>
                <div>
                    <h5 className={titleStyle}>ENTREPRISE</h5>
                    <button className={buttonStyle}>À propos</button>
                    <button className={buttonStyle}>Presse</button>
                    <button className={buttonStyle}>Évènements</button>
                    <button className={buttonStyle}>Carrière</button>
                </div>
            </div>
            <hr />
            <div>
                <p></p>
                <div></div>
            </div>
        </div>
    );
}
