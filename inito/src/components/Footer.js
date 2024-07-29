import '../styles/Footer.css'
import down from '../images/collapsibledown.png'
import { useState } from 'react';
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import youtube from '../images/youtube.png'
import inito from '../images/footerlogo.svg'



export default function Footer() {

    const [current, setCurrent] = useState('');
    const [collapse, setCollapse] = useState([false, false, false]);
    const [rotate, setRotate] = useState(false)

    const company = ["About Us", "Careers", "Blog", "Contact Us"];
    const support = ["FAQ", "Terms", "Privacy Policy", "Returns & Warranty"];
    const getInTouch = ["+1 815-369-0989", "help@inito.com", "355 Bryant Street, Suite 403, San Francisco 94017"];

    // 

    function Collapsible(props) {

        return (
            <div className='collapsible'>
                <div className="heading_click" onClick={() => {

                    if (!collapse[props.index]) {
                        let temp = [false, false, false];
                        temp[props.index] = true;
                        setCollapse(temp)
                    }
                    else {
                        let temp = [...collapse];
                        temp[props.index] = false;
                        setCollapse(temp)
                    }

                }}>
                    <text className='collapsible_heading'>{props.heading}</text>
                    {window.innerWidth <= 650 ? <img src={down} className={collapse[props.index] ? 'collapsible_icon_up' : 'collapsible_icon_down'} ></img> : null}
                </div>
                {collapse[props.index] || window.innerWidth > 650 ?
                    <> {props.list.map((elem) => {
                        return (<text className='list_elem'>{elem}</text>);
                    })}
                    </> : null}
            </div>);

    }


    return (
        <>
            <div className="footer_background">
                <Collapsible heading="Company" list={company} index="0" />
                <Collapsible heading="Support" list={support} index="1" />
                <Collapsible heading="Get In Touch" list={getInTouch} index="2" />
                <div className="social_media">
                    <img src={facebook} className='sm_icon' />
                    <img src={instagram} className='sm_icon' />
                    <img src={linkedin} className='sm_icon' />
                    <img src={youtube} className='sm_icon' />

                </div>
            </div>
            <div className='footer_bottom'>
                <img src={inito} className='footer_logo' />
                <text className='footer_text'>Copyright 2024. Samplytics Technologies Private Limited. All Rights Reserved.</text>
            </div>
        </>
    );
}



