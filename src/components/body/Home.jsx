import LearningRessources from "./LearningRessources";
import News from "./News";
import Footer from "../Footer";
import Partners from "./Partners";
import Explore from "./Explore";
import NavBar from "../NavBar";
import { useState } from "react";

export default function Home() {
    const [isDeviceMobile, setIsDeviceMobile] = useState("true");
    return (
        <div className="bg-primary p-8">
            <NavBar isDeviceMobile={isDeviceMobile} />
            <Explore />
            <Partners />
            <LearningRessources />
            <News />
            <Footer />
        </div>
    );
}
