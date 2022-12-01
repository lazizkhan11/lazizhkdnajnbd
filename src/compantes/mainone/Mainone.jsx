import React from 'react';
import s from './Mainone.module.css'
import one from '../img/one.png'
function Mainone() {
    return (
        <div className={s.father}>
            <div className={s.bigbox}>
<img src={one} alt="" />
<h1 className={s.title}>ОДНОЭТАЖНЫЙ ЖИЛОЙ ДОМ С ПОДВАЛОМ, ТЕРРАСОЙ И МАНСАРДОЙ ЛСП5227</h1>
<p className="s.text">Общая площадь: 250 кв.м.
Количество комнат: 8</p>
<h1 className="text">от 1 200 000 руб.</h1>
<button className='btn'>Подробнее</button>
            </div>
            <div className={s.bigbox}>
<img src={one} alt="" />
<h1 className={s.title}>ОДНОЭТАЖНЫЙ ЖИЛОЙ ДОМ С ПОДВАЛОМ, ТЕРРАСОЙ И МАНСАРДОЙ ЛСП5227</h1>
<p className="s.text">Общая площадь: 250 кв.м.
Количество комнат: 8</p>
<h1 className="text">от 1 200 000 руб.</h1>
<button className='btn'>Подробнее</button>
            </div>
            <div className={s.bigbox}>
<img src={one} alt="" />
<h1 className={s.title}>ОДНОЭТАЖНЫЙ ЖИЛОЙ ДОМ С ПОДВАЛОМ, ТЕРРАСОЙ И МАНСАРДОЙ ЛСП5227</h1>
<p className="s.text">Общая площадь: 250 кв.м.
Количество комнат: 8</p>
<h1 className="text">от 1 200 000 руб.</h1>
<button className='btn'>Подробнее</button>
            </div>  
        </div>
    );
}

export default Mainone;
