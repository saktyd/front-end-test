import React from 'react'

function HightlightTile({ title, imgSource, description }) {
    return (
        <div className="tile__box">
            <div className="tile__box--header">
                <span>{title}</span>
                <img src={imgSource} alt=""/>
            </div>
            <div className="tile__box--discription">
                {description}
            </div>
        </div>
    )
}

export default HightlightTile
