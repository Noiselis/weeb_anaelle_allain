import ArtVenue from "../../assets/ArtVenue";
import Shells from "../../assets/Shells";
import SmartFinder from "../../assets/SmartFinder";
import Waves from "../../assets/Waves";
import Zoomer from "../../assets/Zoomer";

export default function Partners() {
    const partnersStyle = "size-auto p-[5%]";
    return (
        <div className="text-center p-2 ml-[3%] mr-[3%]">
            <h2>Ils nous font confiance</h2>
            <div className="flex justify-evenly p-2">
                <SmartFinder style={partnersStyle} />
                <Zoomer style={partnersStyle} />
                <Shells style={partnersStyle} />
                <Waves style={partnersStyle} />
                <ArtVenue style={partnersStyle} />
            </div>
        </div>
    );
}
