import React from "react";
import "./Tile.css";

function Tile({ header, subHeader, img, text, link, linkText, position, bgColor }) {
    return (
        <div className={`tile ${position} ${bgColor}`}>
            <div className="img-parent">
                {img ? <img src={img} alt="tile-img" /> : null}
            </div>
            <div className="text-parent">
                {header ? <h2>{header}</h2> : null}
                {subHeader ? <h3>{subHeader}</h3> : null}
                {text ? <div className="text">{text}</div> : null}
                {link && linkText ? (
                    <div className="link-parent">
                        <a href={link} className="link">
                            {linkText}
                        </a>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Tile;
