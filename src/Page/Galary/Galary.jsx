import React from 'react';
import './Galary.css'
import imgb1 from'../../assets/banner1.jpg'
import imgb2 from'../../assets/banner2.jpg'
import imgb3 from'../../assets/banner3.jpg'
import imgb4 from'../../assets/banner4.jpg'
import imgb5 from'../../assets/banner5.jpg'
import imgb6 from'../../assets/banner6.jpg'
import imgb7 from'../../assets/banner10.jpg'
import imgb8 from'../../assets/banner8.jpg'
import imgb9 from'../../assets/banner9.jpg'


const Galary = () => {
    return (
        <div className='m-5'>
            <section className='container'>
                <div >
                    <img className='rounded-lg' src={imgb1} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={imgb2} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={imgb3} alt="" />
                </div>
                <div>
                    <img src={imgb4} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={imgb5} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={imgb6} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={imgb7} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={imgb8} alt="" />
                </div>
                <div>
                    <img className='rounded-lg'src={imgb9} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Galary;