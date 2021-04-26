import React from 'react';
import LeftMenu from '../components/LeftMenu';
import ProfileHeader from '../components/ProfileHeader';
import DoctorList from '../components/DoctorList';

import MiniArrow from '../assets/imges/mini-arrow.svg';

export default function ChooseDoctors () {
    return (
    <section style={{display: 'flex'}}>
        <LeftMenu />
        <div className="profile">
                <ProfileHeader /> 
                <div className="profile__line"> <MiniArrow /> &ensp; Мои записи</div>
                <div className="doctors">
                  <DoctorList full={true} />
                </div>
       </div>
    </section>
    )
}