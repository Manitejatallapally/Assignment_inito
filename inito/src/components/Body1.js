
import '../styles/Header.css';
import star from '../images/star.svg';
import iphone from '../images/iphone.png';
import bloomberg from '../images/bloomberg.png'
import forbes from '../images/forbes.png'
import theweek from '../images/theweek.png'
import washington from '../images/washington.png'
import enterpreneur from '../images/enterpreneur.png'
import iphonemobile from '../images/iphonemobile.png'


export default function Body1() {

  return (

    <>
      <div className="backgroundcontent">

        <div className="paragraph">
          <div className="starline">
            <img src={star} className="star"></img>
            <img src={star} className="star"></img>
            <img src={star} className="star"></img>
            <img src={star} className="star"></img>
            <img src={star} className="star"></img>
            <text className="boldtext">TRUSTED BY 20,000+ COUPLES</text>
          </div>
          <p className="bigtext">Track your fertility hormones at home, in 10 minutes</p>

          <p className="smalltext">Get accurate results of <strong>Estrogen, LH, Progesterone metabolite PdG and FSH </strong>with Inito, the all-in-one, FDA-registered fertility monitor.</p>
          <button className='initobutton'>How does Inito work?</button>
        </div>

        <img src={iphone} className='iphoneBG'></img>
        <img src={iphonemobile} className='iphonemobileBG'></img>

      </div>


      <div className="textbox">
        <button className='mobilebutton'>HOW DOES INITO WORK?</button>
        <text className="textseen">AS SEEN ON</text>
        <div className="magazinebox">
          <img src={bloomberg} className="magazine"></img>
          <img src={forbes} className="magazine"></img>
          <img src={theweek} className="magazine"></img>
          <img src={washington} className="magazine"></img>
          <img src={enterpreneur} className="magazine"></img>

        </div>

      </div>
    </>
  );
}