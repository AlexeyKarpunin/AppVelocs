import React from "react";


export default function DoctorCard (props) {
    const {time, address, name, rank, foto} = props;

    return (
        <div className="doctor--card">
            <div className="doctor--card__data">{time}</div>
            <div className="doctor--card__address">{address}</div>
            <div className="doctor--info">
                <div className="doctor--info__wrraper">
                    <img className="doctor--info__foto" src={foto}></img>
                    <ul className="doctor--info__list">
                        <li>{name}</li>
                        <li>{rank}</li>
                    </ul>
                </div>
                <button>Отменить</button>
            </div>
        </div>
    )
}