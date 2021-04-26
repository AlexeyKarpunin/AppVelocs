import React, { useEffect, useState } from "react";
import DoctorCard from '../components/DoctorCard';
import { Link } from 'react-router-dom'

export default function DoctorList ({line, full}) {
    const [doctors, setDoctors] = useState(undefined);

    useEffect( () => {
      fetch('./src/json/yourDoctors.json').then((res) => res.json()).then( (data) => {
          setDoctors(data);
      });
    }, [])

    return (
        <div className="doctors--container" style={{display: `${ line ? 'flex' : ''}`}}>
            {doctors ? <DoctorCardParser list={doctors} full={full} /> : <div>... loading</div>}
            {doctors && doctors.records.length > 0 && !full ? <LinkToNotes amount={doctors.records.length} /> : null}
        </div>
    )
}

function DoctorCardParser({list, full}) {
    if (!list.records || list.records.length === 0) return <div style={{padding: '0 0 0 40px'}}>Записей нет</div>

    return (
        list.records.map( (doctor, index) => {
            if (index >= 2 && !full) return;

            return (
                <DoctorCard 
                  time = {doctor.time}
                  address = {doctor.address}
                  name = {doctor.name}
                  rank = {doctor.rank}
                  foto = {doctor.foto}
                />
            )
        })
    )
}


function LinkToNotes ({amount}) {
    return (
        <div className="link--to">
            { amount > 2 ? `Eще ${amount - 2} записи` : null}
            <Link to="/profile/doctors">Подробнее</Link>
        </div>
    )
}