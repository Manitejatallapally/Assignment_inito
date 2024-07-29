import {useState, useEffect} from 'react'
import '../styles/Card3.css'
import card2 from '../images/card3.png'
import image1 from '../images/Card3/image1.svg'
import image2 from '../images/Card3/image2.svg'
import image3 from '../images/Card3/image3.svg'
import image4 from '../images/Card3/image4.svg'



export default function Card2() {

 const carousel =[image1, image2, image3, image4];

const [currentImage, setCurrentImage] = useState(0)

useEffect(()=>{

const timeout = setTimeout(()=>{

    setCurrentImage(prev => (prev+1)%4);


},3000)

return ()=> clearTimeout(timeout);

},[currentImage]

)



    return (
        <div className="cardbackground_card3">

            <div className='cardflex_card3'>
                <div className='column1_card3'>
                    <text className='heading2_card3'>Inito tracks everything<br />so you don’t have to
                    </text>
                    <p className='fulltext_card3'>The Inito Fertility Monitor comes with a free easy-to-use App, so you can track your fertile days with ease and know exactly when you ovulate.<br /><br />
                        Our App notifies you for everything:<br />
                        <span style={{ color: '#1F94AA', fontSize: 25 }}>• </span>  Your fertility levels<br />
                        <span style={{ color: '#1F94AA', fontSize: 25 }}>• </span>  When to test on the right days<br />
                        <span style={{ color: '#1F94AA', fontSize: 25 }}>• </span>  When you’ve successfully ovulated<br />
                        <span style={{ color: '#1F94AA', fontSize: 25 }}>• </span>  And when to roll into bed!
                    </p>
<button className='button_card3'>Get the Inito Kit</button>
                </div>
                <div className='column2_card3'>
                <img src={card2} className='column2_img1'></img>
                <img src={carousel[currentImage]} className='column2_img2'></img>
                
                </div>
                
            </div>
        </div>
    );
}