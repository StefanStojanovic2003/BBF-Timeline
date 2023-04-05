import React, { useEffect, useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import logo from './cropped-cropped-logo-nova-zuta-1024x341-1 1.png';
 
const Highlight = () => {
    const [language, setLanguage] = useState("sr");

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

    const switchLanguagetoSr = () => {
        setLanguage("sr");
    }
    const switchLanguagetoEn = () => {
        setLanguage("en");
    }

    useEffect(() => {



        if((day ===6 && month === 4) && (hours === 8 && minutes >= 30 && hours <=9)){
            setShowIcon1("highlight");
        }else if(day ===6 && month === 4 && hours === 9 && minutes >= 0 && minutes <= 15){
            setShowIcon2("highlight");
        }else if((day=== 6 && month === 4) && (hours === 9 && minutes >= 15) || (hours === 10 && minutes <= 45)){
            setShowIcon3("highlight");
        }else if((day === 6 && month === 4) && (hours === 10 && minutes >= 45 && minutes <= 59)){
            setShowIcon4("highlight");
        }else if((day === 6 && month === 4) && (hours === 11 && minutes >= 15) || (hours > 11 && hours < 13) || (hours === 13 && minutes === 0)){
            setShowIcon5("highlight");
        }else if((day === 6 && month === 4) && (hours === 13)){
            setShowIcon6("highlight");
        }else if((day === 6 && month === 4) && (hours === 14)){
            setShowIcon7("highlight");
        }else if((day === 6 && month === 4) && (hours === 15 && minutes >= 0) || (hours === 130 && minutes <= 15)){
            setShowIcon8("highlight");
        }else if((day === 6 && month === 4) && (hours === 130 && minutes >= 15) || (hours === 17 && minutes <= 30)){
            setShowIcon9("highlight");
        }else if((day === 6 && month === 4) && (hours === 17 && minutes >= 30) || (hours === 18) || (hours === 19 && minutes === 0)){
            setShowIcon10("highlight");
        }else if((day === 6 && month === 4) && (hours === 17 && minutes >= 30) || (hours === 18) || (hours === 19 && minutes === 0)){
            setShowIcon11("highlight");
        }else if((day === 6 && month === 4) && (hours >= 19 && hours <= 23)){
            setShowIcon12("highlight");
        }
    }, [])

    return (
        <div className='app'>
            <div className='contentBox'>
                <img src={logo} />
                <p className='languageSwitcher'><span onClick={switchLanguagetoSr} style={{color: (language === "sr")?"#F5C314":"white"}}>SR</span> / <span onClick={switchLanguagetoEn} style={{color: (language === "en")?"#F5C314":"white"}}>EN</span></p>

                <div className='srb' style={{display: (language === "sr")?"block": "none"}}>
                    <div className='container'>
                        <div className='box box1'>
                            <h1>08:30 – 09:00</h1>
                            <p className="content">Registracija<br/>Kafa Dobrodošlice</p>
                            <span className={showIcon1}></span>
                        </div>
                        <div className='box box2'>
                            <h1>09:00 – 09:15</h1>
                            <p className="content">Otvaranje – Dobro došli!</p>
                            <span className={showIcon2}></span>
                        </div>
                        <div className='box box3'>
                            <h1>09:15 – 10:45</h1>
                            <p className="content">Masterclass "EMPLOYER BRANDING"<br/>
                            CATALINA SCHVENINGER - Former Global Head of Resourcing and<br/>
                            Employer Brand, VODAFONE; People Strategy Consultant</p>
                            <span className={showIcon3}></span>
                        </div>
                        <div className='box box4'>
                            <h1>10:45 – 11:00</h1>
                            <p className="content">Kafe pauza</p>
                            <span className={showIcon4}></span>
                        </div>
                        <div className='box box5'>
                            <h1>11:15 – 13:00</h1>
                            <p className="content">Radionica "TEAM PERFORMANCE LAB - maksimalne performanse za<br/>
                            poslovne menadžere"<br/>
                            ELVIN TURNER - Advisory Board Member, Global Innovation Institute</p>
                            <span className={showIcon5}></span>
                        </div>
                        <div className='box box6'>
                            <h1>13:00 – 14:00</h1>
                            <p className="content">Pauza za ručak</p>
                            <span className={showIcon6}></span>
                        </div>
                        <div className='box box7'>
                            <h1>14:00 – 15:00</h1>
                            <p className="content">PANEL – LEADERSHIP fit for the FUTURE<br/>
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
                            <p className="content">Masterclass " VIRTUELNA transformacija: uticaj METAVERSE na društvo i biznis "<br/>
                            LORENZO CAPPANNARI<br/>
                            CEO & Co-Founder, AnotheReality</p>
                            <span className={showIcon8}></span>
                        </div>
                        <div className='box box9'>
                            <h1>16:15 – 17:30</h1>
                            <p className="content">Masterclass " DIGITALNA TRANSFORMACIJA– HR kao fasilitator<br/>
                            DIGITALNE transformacije”<br/>
                            Dr Klaus Niedl - Globalni Direktor ljudskih resursa u Novomatic AG</p>
                            <span className={showIcon9}></span>
                        </div>
                        <div className='box box10'>
                            <h1>17:30 – 19:00</h1>
                            <p className="content">APERO – za učesnike sa standard paketom</p>
                            <span className={showIcon10}></span>
                        </div>
                        <div className='box box11'>
                            <h1>17:30 – 19:00</h1>
                            <p className="content">VIP sesija - TIHA POSLOVNA EVOLUCIJA</p>
                            <span className={showIcon11}></span>
                        </div>
                        <div className='box box12'>
                            <h1>19:00 – 23:00</h1>
                            <p className="content">VIP svečana večera – za učesnike sa VIP paketom</p>
                            <span className={showIcon12}></span>
                        </div>
                    </div>
                </div>

                <div className='eng' style={{display: (language === "en")?"block": "none"}}>
                    <div className='container'>
                        <div className='box box1'>
                            <h1>08:30 – 09:00</h1>
                            <p className="content">Registration<br/>Welcome Coffee</p>
                            <span className={showIcon1}></span>
                        </div>
                        <div className='box box2'>
                            <h1>09:00 – 09:15</h1>
                            <p className="content">Opening Speech / Welcome</p>
                            <span className={showIcon2}></span>
                        </div>
                        <div className='box box3'>
                            <h1>09:15 – 10:45</h1>
                            <p className="content">Masterclass "EMPLOYER BRANDING"<br/>
                            CATALINA SCHVENINGER - Former Global Head of Resourcing and<br/>
                            Employer Brand, VODAFONE; People Strategy Consultant</p>
                            <span className={showIcon3}></span>
                        </div>
                        <div className='box box4'>
                            <h1>10:45 – 11:00</h1>
                            <p className="content">Coffee Break</p>
                            <span className={showIcon4}></span>
                        </div>
                        <div className='box box5'>
                            <h1>11:15 – 13:00</h1>
                            <p className="content">Workshop "Team Performance LAB - BE LESS ZOMBIE"<br/>
                            ELVIN TURNER - Advisory Board Member, Global Innovation Institute</p>
                            <span className={showIcon5}></span>
                        </div>
                        <div className='box box6'>
                            <h1>13:00 – 14:00</h1>
                            <p className="content">Lunch Break</p>
                            <span className={showIcon6}></span>
                        </div>
                        <div className='box box7'>
                            <h1>14:00 – 15:00</h1>
                            <p className="content">PANEL – LEADERSHIP fit for the FUTURE<br/>
                            <br/>
                            PANELISTS<br/>
                            Radoslav Didić (Ernst & Young)<br/>
                            Milana Rikanović (United Nations)<br/>
                            Željko Petrović (Banca Intesa);<br/>
                            <br/>
                            FACILITATOR<br/>
                            Mirjana Gomilanović – Executive & Leadership Coach</p>
                            <span className={showIcon7}></span>
                        </div>
                        <div className='box box8'>
                            <h1>15:00 – 16:15</h1>
                            <p className="content">Masterclass " Virtual transformation: the METAVERSE impact on<br/>
                            society and business "<br/>
                            <br/>
                            LORENZO CAPPANNARI<br/>
                            CEO & Co-Founder, AnotheReality</p>
                            <span className={showIcon8}></span>
                        </div>
                        <div className='box box9'>
                            <h1>16:15 – 17:30</h1>
                            <p className="content">Masterclass " DIGITAL TRANSFORMATION – HR as enabler of<br/>
                            DIGITAL Transformation in a Company”<br/>
                            Global HR Director, Novomatic AG Group</p>
                            <span className={showIcon9}></span>
                        </div>
                        <div className='box box10'>
                            <h1>17:30 – 19:00</h1>
                            <p className="content">Apero/Networking</p>
                            <span className={showIcon10}></span>
                        </div>
                        <div className='box box11'>
                            <h1>17:30 – 19:00</h1>
                            <p className="content">VIP session – SILENT BUSINESS EVOLUTION</p>
                            <span className={showIcon11}></span>
                        </div>
                        <div className='box box12'>
                            <h1>19:00 – 23:00</h1>
                            <p className="content">VIP gala dinner</p>
                            <span className={showIcon12}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer'>Copyright © 2023 Balkan Biznis Forum | Designed and developed by MINEWEB</div>
        </div>
    );
}

export default Highlight;