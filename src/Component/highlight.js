import React, { useEffect, useState } from 'react';
 
const Highlight = () => {
    const [showIcon1, setShowIcon1] = useState("empty");
    const [showIcon2, setShowIcon2] = useState("empty");
    const [showIcon3, setShowIcon3] = useState("empty");
    const [showIcon4, setShowIcon4] = useState("empty");
    const [showIcon5, setShowIcon5] = useState("empty");
    const [showIcon6, setShowIcon6] = useState("empty");
    const [showIcon7, setShowIcon7] = useState("empty");
    const [showIcon8, setShowIcon8] = useState("empty");
    const [showIcon9, setShowIcon9] = useState("empty");

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth() + 1;

    useEffect(() => {
        if(day === 8 && month === 2 && hours === 9 && minutes <= 30){
            setShowIcon1("highlight");
        }else if(day === 8 && month === 2 && hours === 9 && minutes >= 30 && minutes <= 45){
            setShowIcon2("highlight");
        }else if(day === 8 && month === 2 && hours >= 9 && hours <= 11 && minutes >= 45 || minutes >= 0 && minutes <= 30){
            setShowIcon3("highlight");
        }else if(day === 8 && month === 2 && hours === 11 && minutes >= 30 && minutes <= 50){
            setShowIcon4("highlight");
        }else if(day === 8 && month === 2 && hours >= 10 && hours <= 11 && minutes >= 30 || minutes >= 0 && minutes <= 30){
            setShowIcon5("highlight");
        }else if(day === 8 && month === 2 && hours === 11 && minutes >= 30 && minutes <= 50){
            setShowIcon6("highlight");
        }else if(day === 8 && month === 2 && hours === 11 && minutes >= 30 && minutes <= 50){
            setShowIcon7("highlight");
        }else if(day === 8 && month === 2 && hours === 11 && minutes >= 30 && minutes <= 50){
            setShowIcon8("highlight");
        }else if(day === 8 && month === 2 && hours === 11 && minutes >= 30 && minutes <= 50){
            setShowIcon9("highlight");
        }
    }, [])

    return (
        <div className='container'>
            <div className='box box1'>
                <h1>09:00 – 09:30</h1>
                <p>Registracija</p>
                <span className={showIcon1}></span>
            </div>
            <div className='box box2'>
                <h1>09:30 – 09:45</h1>
                <p>Otvaranje – Dobro došli!</p>
                <span className={showIcon2}></span>
            </div>
            <div className='box box3'>
                <h1>09:45 – 11.30</h1>
                <p>Radionica “ Od korporativnog giganta do agilnog ekosistema „<br/>
                David Gram – LEGO Innovation Director, Diplomatic Rebel CEO</p>
                <span className={showIcon3}></span>
            </div>
            <div className='box box4'>
                <h1>11:30 – 11:50</h1>
                <p>Kafe pauza</p>
                <span className={showIcon4}></span>
            </div>
            <div className='box box5'>
                <h1>13:30 – 14:30</h1>
                <p>Radionica “ Od korporativnog giganta do agilnog ekosistema „<br/>
                David Gram – LEGO Innovation Director, Diplomatic Rebel CEO</p>
                <span className={showIcon5}></span>
            </div>
            <div className='box box6'>
                <h1>11:50 – 13:30</h1>
                <p>Pauza za ručak / VIP ručak</p>
                <span className={showIcon6}></span>
            </div>
            <div className='box box7'>
                <h1>15:50 – 16:30</h1>
                <p>Masterclass “ Organizacione lekcije iz antropologije“<br/>
                Jitske Kramer – CEO, Human Dimensions, Korporativni Antropolog</p>
                <span className={showIcon7}></span>
            </div>
            <div className='box box8'>
                <h1>16:30 – 18:00</h1>
                <p>VIP sesija – TAČKA PREOKRETA</p>
                <span className={showIcon8}></span>
            </div>
            <div className='box box9'>
                <h1>11:50 – 13:30</h1>
                <p>VIP koktel</p>
                <span className={showIcon9}></span>
            </div>
        </div>
    );
}

export default Highlight;