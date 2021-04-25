
import React from 'react';
// import Heart from '../assets/imges/mini-heart.svg';
import {ReactComponent as Heart} from '../assets/imges/mini-heart.svg';
export default function Leftmenu () {
    return (
        <div className="left-menu">

            <div>
              <div className="left-menu__logo">Логотип</div>

              <ul className="left-menu__list">
                  <li className="left-menu__item">
                      {/* <img src={Heart}></img> */}
                      <Heart />
                      Профиль
                  </li>
                  <li className="left-menu__item">
                      Врачи и клиники
                  </li>
                  <li className="left-menu__item">
                      Сообщения
                  </li>
                  <li className="left-menu__item">
                      Тестирование
                  </li>
                  <li className="left-menu__item">
                      Полезно знать
                  </li>
                  <li className="left-menu__item">
                      баттон
                  </li>
              </ul>

            </div>

            <div>
                <div>Help</div>
                <div>AppVelox</div>
            </div>
        </div>
    )
}