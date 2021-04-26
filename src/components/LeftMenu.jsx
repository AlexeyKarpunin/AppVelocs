
import React from 'react';

/* imeges */
import Heart from '../assets/imges/mini-heart.svg';
import DoctorEquipment from '../assets/imges/doctor-equipment.svg';
import Message from '../assets/imges/message.svg';
import Form from '../assets/imges/form.svg';
import Book from '../assets/imges/book.svg'
import Help from '../assets/imges/help.svg';
import Logo from '../assets/imges/logo.png';
/*     */

export default function Leftmenu () {
    return (
        <div className="left-menu">

            <div>
              <div className="left-menu__logo">Логотип</div>

              <ul className="left-menu__list">
                  <li className="left-menu__item left-menu_active">
                      <Heart />
                      <span>Профиль</span>
                  </li>
                  <li className="left-menu__item">
                      <DoctorEquipment />
                      <span>Врачи и клиники</span>
                  </li>
                  <li className="left-menu__item">
                      <Message />
                      <span>Сообщения</span>
                  </li>
                  <li className="left-menu__item">
                      <Form />
                      <span>Тестирование</span>
                  </li>
                  <li className="left-menu__item">
                      <Book />
                      <span>Полезно знать</span>
                  </li>
              </ul>
              <div className="left-menu__btn">
                <button>Подать заявку</button>
              </div>
            </div>

            <div>
                <div className="left-menu__item"> 
                  <Help /> 
                  <span>Help</span>
                </div>
                <div className="left-menu__logo--down">
                    <img src={Logo}></img>
                </div>
            </div>
        </div>
    )
}