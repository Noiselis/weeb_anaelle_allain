import Arrow from "../../assets/Arrow";
import Desktop from "../../assets/Desktop";

export default function LearningRessources() {
    const handleExploreResources = () => {};

    return (
        <div className="grid grid-cols-2 grid-flow-col mb-16">
            <div className="m-2 p-2">
                <h4>DES RESSOURCES POUR TOUS LES NIVEAUX</h4>
                <h2>
                    <span className="text-secondary">Apprenez</span> et{" "}
                    <span className="text-secondary">progressez</span>
                </h2>
                <p>
                    Que vous débutiez en développement web ou que vous soyez un
                    expert cherchant à approfondir vos connaissances, nous vous
                    proposons des tutoriels, guides et bonnes pratiques pour
                    apprendre efficacement.
                </p>
                <div
                    className="flex mt-8 hover:scale-110"
                    onClick={handleExploreResources}
                >
                    <h4 className="mr-4">Explorez les ressources</h4>
                    <Arrow />
                </div>
            </div>
            <div className="flex justify-center p-2 m-2">
                <Desktop />
            </div>
        </div>
    );
}
