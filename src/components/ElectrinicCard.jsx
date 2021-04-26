import React from 'react';

import Warmer from '../assets/imges/warmer.svg';
import File from '../assets/imges/file.svg';
import Flask from '../assets/imges/flask.svg';
import Clock from '../assets/imges/clock.svg';

export default function ElectronicCard () {
    return (
        <div className="electronic--card">

          <div className="electronic--card__item">
              <div className="electronic--card__img">
                  <Warmer />
              </div>
              <div className="electronic--card__info">
                  <h3>Информация о пациенте</h3>
                  <hr />
                  <ul>
                      <li>Ваши личные данные</li>
                      <li>Рекомендации врачей</li>
                      <li>История болезней</li>
                  </ul>
              </div>
           </div>


           <div className="electronic--card__item">
              <div className="electronic--card__img">
                  <Flask />
              </div>
              <div className="electronic--card__info">
                  <h3>Результаты анализов</h3>
                  <hr />
                  <span>Вы можете узнать здесь результаты своих анализов</span>
              </div>
           </div>

           <div className="electronic--card__item">
              <div className="electronic--card__img">
                  <File />
              </div>
              <div className="electronic--card__info">
                  <h3>Добавить  информацию</h3>
                  <hr />
                  <span>Добавляйте в свою электронную медицинскую карту новые данные</span>
              </div>
           </div>

           <div className="electronic--card__item">
              <div className="electronic--card__img">
                  <Clock />
              </div>
              <div className="electronic--card__info">
                  <h3>История приемов</h3>
                  <hr />
                  <span>Вся информация о полученных услугах за все время хранится здесь</span>
              </div>
           </div>
        </div>
    )
}


