import React from 'react';
import LeftMenu from '../components/LeftMenu';
import ProfileHeader from '../components/ProfileHeader';
import DoctorsList from '../components/DoctorList';
import ElectronicCard from '../components/ElectrinicCard';

export default function PersonalArea ({doctorsList}) {

    return (
        <section style={{display: 'flex'}}>
            <LeftMenu />
            <div className="profile">
                <ProfileHeader /> 
                <div className="profile__line">Запись на прием</div>
                <DoctorsList line={true} doctors={doctorsList} />
                <div className="profile__line">Электронная карта</div>
                <ElectronicCard />
            </div>
        </section>
    )
}