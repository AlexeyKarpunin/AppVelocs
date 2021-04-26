import React from 'react';

/* imges */

import Magnifier from '../assets/imges/magnifier.svg';
import Bell from '../assets/imges/bell.svg';
import Eye from '../assets/imges/eye.svg';
import Mark from '../assets/imges/mark.svg';
import Face from '../assets/imges/face.png';

/*       */


export default function ProfileHeader () {
    return (
        <div className="profile--header">
            <span>Мой профиль</span>
            <div className="profile__info">
                <Magnifier />
                <Bell />
                <Eye />
                <img src={Face} />
                <Mark />
            </div>
        </div>
    )
}