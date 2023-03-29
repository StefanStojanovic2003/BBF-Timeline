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
    const [showIcon10, setShowIcon10] = useState("empty");
    const [showIcon11, setShowIcon11] = useState("empty");
    const [showIcon12, setShowIcon12] = useState("empty");

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth() + 1;

    useEffect(() => {
        if((day === 30 && month === 3) && (hours === 8 && minutes >= 30 && hours <=9)){
            setShowIcon1("highlight");
        }else if(day === 30 && month === 3 && hours === 9 && minutes >= 0 && minutes <= 15){
            setShowIcon2("highlight");
        }else if((day=== 30 && month === 3) && (hours === 9 && minutes >= 15) || (hours === 10 && minutes <= 45)){
            setShowIcon3("highlight");
        }else if((day === 30 && month === 3) && (hours === 10 && minutes >= 45 && minutes <= 59)){
            setShowIcon4("highlight");
        }else if((day === 30 && month === 3) && (hours === 11 && minutes >= 15) || (hours > 11 && hours < 13) || (hours === 13 && minutes === 0)){
            setShowIcon5("highlight");
        }else if((day === 30 && month === 3) && (hours === 13)){
            setShowIcon6("highlight");
        }else if((day === 30 && month === 3) && (hours === 14)){
            setShowIcon7("highlight");
        }else if((day === 30 && month === 3) && (hours === 15 && minutes >= 0) || (hours === 130 && minutes <= 15)){
            setShowIcon8("highlight");
        }else if((day === 30 && month === 3) && (hours === 130 && minutes >= 15) || (hours === 17 && minutes <= 30)){
            setShowIcon9("highlight");
        }else if((day === 30 && month === 3) && (hours === 17 && minutes >= 30) || (hours === 18) || (hours === 19 && minutes === 0)){
            setShowIcon10("highlight");
        }else if((day === 30 && month === 3) && (hours === 17 && minutes >= 30) || (hours === 18) || (hours === 19 && minutes === 0)){
            setShowIcon11("highlight");
        }else if((day === 30 && month === 3) && (hours >= 19 && hours <= 23)){
            setShowIcon12("highlight");
        }
    }, [])

    return (
        <div className='container'>
            <div className='box box1'>
                <h1>08:30 – 09:00</h1>
                <p>Registracija<br/>Kafa Dobrodošlice</p>
                <span className={showIcon1}></span>
            </div>
            <div className='box box2'>
                <h1>09:00 – 09:15</h1>
                <p>Otvaranje – Dobro došli!</p>
                <span className={showIcon2}></span>
            </div>
            <div className='box box3'>
                <h1>09:15 – 10:45</h1>
                <p>Masterclass "EMPLOYER BRANDING "<br/>
                CATALINA SCHVENINGER - Former Global Head of Resourcing and<br/>
                Employer Brand, VODAFONE; People Strategy Consultant</p>
                <span className={showIcon3}></span>
            </div>
            <div className='box box4'>
                <h1>10:45 – 11:00</h1>
                <p>Kafe pauza</p>
                <span className={showIcon4}></span>
            </div>
            <div className='box box5'>
                <h1>11:15 – 13:00</h1>
                <p>Radionica "TEAM PERFORMANCE LAB - maksimalne performanse za<br/>
                poslovne menadžere"<br/>
                ELVIN TURNER - Advisory Board Member, Global Innovation Institute</p>
                <span className={showIcon5}></span>
            </div>
            <div className='box box6'>
                <h1>13:00 – 14:00</h1>
                <p>Pauza za ručak</p>
                <span className={showIcon6}></span>
            </div>
            <div className='box box7'>
                <h1>14:00 – 15:00</h1>
                <p>PANEL – LEADERSHIP fit for the FUTURE<br/>
                <br/>
                PANELISTI<br/>
                Radoslav Didić (Ernst & Young)<br/>
                Milana Rikanović (United Nations)<br/>
                Željko Petrović (Banca Intesa);<br/>
                <br/>
                FASILITATOR<br/>
                Mirjana Gomilanović – Executive & Leadership Coach</p>
                <span className={showIcon7}></span>
            </div>
            <div className='box box8'>
                <h1>15:00 – 16:15</h1>
                <p>Masterclass " VIRTUELNA transformacija: uticaj METAVERSE na društvo i biznis "<br/>
                LORENZO CAPPANNARI<br/>
                CEO & Co-Founder, AnotheReality</p>
                <span className={showIcon8}></span>
            </div>
            <div className='box box9'>
                <h1>16:15 – 17:30</h1>
                <p>Masterclass " DIGITALNA TRANSFORMACIJA– HR kao fasilitator<br/>
                DIGITALNE transformacije”<br/>
                Dr Klaus Niedl - Globalni Direktor ljudskih resursa u Novomatic AG</p>
                <span className={showIcon9}></span>
            </div>
            <div className='box box10'>
                <h1>17:30 – 19:00</h1>
                <p>APERO – za učesnike sa standard paketom</p>
                <span className={showIcon10}></span>
            </div>
            <div className='box box11'>
                <h1>17.30 – 19.00</h1>
                <p>VIP sesija - TIHA POSLOVNA EVOLUCIJA</p>
                <span className={showIcon11}></span>
            </div>
            <div className='box box12'>
                <h1>19.00 – 23.00</h1>
                <p>VIP svečana večera – za učesnike sa VIP paketom</p>
                <span className={showIcon12}></span>
            </div>
        </div>
    );
}

export default Highlight;