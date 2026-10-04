import LearningRessources from "../components/homeComponents/LearningRessources";
import News from "../components/homeComponents/News";
import Partners from "../components/homeComponents/Partners";
import Explore from "../components/homeComponents/Explore";

export default function Home() {
    return (
        <div className="bg-primary p-8 text-white">
            <Explore />
            <Partners />
            <LearningRessources />
            <News />
        </div>
    );
}
