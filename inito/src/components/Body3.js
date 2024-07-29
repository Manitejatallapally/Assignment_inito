import '../styles/Body3.css';
import { useState, useEffect } from 'react';
import carousel1 from '../images/Body3images/carousel1.png'
import carousel2 from '../images/Body3images/carousel2.png'
import carousel3 from '../images/Body3images/carousel3.png'
import checkgreen from '../images/Body3images/checkgreen.png'
import checkblue from '../images/Body3images/checkblue.png'
import checkorange from '../images/Body3images/checkorange.png'
import checkviolet from '../images/Body3images/checkviolet.png'
import graph from '../images/Body3images/graph.png'

export default function Body3() {
    const images = [carousel1, carousel2, carousel3];


    const [carousel, setCarousel] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {

            setCarousel(prev => (prev + 1) % 3);
        }, 3000)

        return () => clearTimeout(timeout);
    }, [carousel])


    return (
    <div className='gridwrapper'>
        <div className='area1'>
            <img src={images[carousel]} className='carouselimg'></img>
        </div>
         <div className='area2'>
            <text className='para1'>Predict and confirm your ovulation with actual data</text>
            <p className='para2'>Unlike most ovulation tests that only give you "yes/no" results, Inito provides <strong>real numerical values</strong> of your fertility hormones.
                <br /><br />
                If you have irregular cycles, actual data is necessary to know exactly when you ovulate, and when is the best time to try to conceive.</p>
            <button className='buttoninito'>Get the Inito Kit</button>
        </div>

        <div className='area3'>
            <text className='para1'>Never miss a day again with Inito</text>
            <p className='para2'>Inito tracks up to 6 fertile days and confirms ovulation by measuring all 4 hormones in just 10 minutes:
            </p>
           <div className='checklist'>
            <img src={checkgreen} className='checkimg'></img>
            <text className='para2'>Estrogen, which rises 3-4 days before ovulation</text>
            <img src={checkviolet} className='checkimg'></img>
            <text className='para2'>LH, which surges 24-36 hours before ovulation</text>
            <img src={checkblue} className='checkimg'></img>
            <text className='para2'>PdG, which rises after ovulation</text>
            <img src={checkorange} className='checkimg'></img>
            <text className='para2'>FSH, to track follicle growth</text>
           </div>

          
        </div>
        <img src={graph} className='graph'></img> 
    </div>);
}