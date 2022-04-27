import React from "react";
import "../styles/App.css"
import StickerItem from "./item";

const Sticker = () => {
    return(
        <div className="sticker">
            <StickerItem/>
            <StickerItem/>
            <StickerItem/>
            <StickerItem/>
        </div>
    );
};

export default Sticker