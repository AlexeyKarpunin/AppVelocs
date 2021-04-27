import React, { useEffect, useState } from 'react';
import LeftMenu from '../components/LeftMenu';
import ProfileHeader from '../components/ProfileHeader';
import DoctorList from '../components/DoctorList';

import MiniArrow from '../assets/imges/mini-arrow.svg';

import Calendar from 'react-calendar';

export default function ChooseDoctors ({doctorsList}) {
  const [value, onChange] = useState(new Date());
  const [notes, setNotes] = useState(new Map());
  const [renderCalendar, setRenderCalendar] = useState(false)
  
  useEffect( () => {
    if (!doctorsList) return;

    doctorsList.records.forEach( (note) => {
      const key = new Date(note.date).toString();

      if (notes.has(key)) {
        setNotes( (map) => {
          return map.set(key, map.get(key) + 1);
        })
      } else {
        setNotes( (map) => map.set(key, 1));
      }
    })
    setRenderCalendar(true);
  }, [doctorsList])

  function checkNotes (date) {
    if (notes.get(date.toString())) {
      return notes.get(date.toString())
    }
    return null
  }
  
  function myFormatDay(locale, date) {
    const dateKnow= new Date()
    const today = dateKnow.getDate();
    const mounth = dateKnow.getMonth();

    const day = date.getDate();
    const lastMounth = date.getMonth();
    
    const note = checkNotes(date);

    if (lastMounth > mounth) return <div className="my-date-day">{day}</div>

    const formatClass = `my-date-day ${lastMounth < mounth || day < today ? 'my-date-day_disable' : ''} ${note ? 'my-date-day__notes' : null}`;

    return <div className={formatClass} data-notes={note}>{day}</div>
  }

    return (
    <section style={{display: 'flex'}}>
        <LeftMenu />
        <div className="profile">
                <ProfileHeader /> 
                <div className="profile__line"> <MiniArrow /> &ensp; Мои записи</div>
                <div className="doctors">
                <div className="doctor--wrraper">
                  <DoctorList full={true} doctors={doctorsList} />
                </div> 
                  
                  {renderCalendar ? <Calendar 
                        onChange={onChange}
                        value={value}
                        navigationLabel={({ date, label, locale, view }) => `${label.replace(/г.$/, '')}`}
                        formatDay={myFormatDay}
                        showNeighboringMonth={false}
                        onClickYear={(value, event) => alert('Clicked year: ', value)}
                  /> : <div>... loading</div> }
                </div>
       </div>
    </section>
    )
}