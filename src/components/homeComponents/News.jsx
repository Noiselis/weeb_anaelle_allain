import Squares from "../../assets/Squares";
import Arrow from "../../assets/Arrow";

export default function News() {
    const handleReadArticles = () => {};
    return (
        <div className="grid grid-cols-2 grid-flow-col mb-16">
            <div className="flex justify-center p-2 m-2">
                <Squares />
            </div>
            <div className="m-2 p-2">
                <h4>LE WEB, UN ÉCOSYSTÈME EN CONSTANTE ÉVOLUTION</h4>
                <a href="/blog">
                    <h2>
                        Restez informé des dernières
                        <span className="text-secondary"> tendances</span>
                    </h2>
                </a>
                <p>
                    Chaque semaine, nous analysons les nouveautés du web :
                    frameworks émergents, bonnes pratiques SEO, accessibilité,
                    et bien plus encore. Ne manquez aucune actualité du digital
                    !
                </p>
                <a href="/blog" className="flex mt-8 hover:scale-110">
                    <h4 className="mr-4">Lire les articles récents</h4>
                    <Arrow />
                </a>
            </div>
        </div>
    );
}
