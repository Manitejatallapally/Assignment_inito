import '../styles/Card1.css'
import card1 from '../images/card1.png'
import rachel from '../images/rachel.png'



export default function Card1() {

    return (
        <div className='bottombackground'>
        <div className='cardwrapper'>
            <img src={card1} className='image1'></img>
            <text className="text1">WHY MEASURE PROGESTERONE?</text>
            <p className="text2"><strong>Anovulation</strong> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*.<br /><br />
                A sure way to confirm ovulation is a <strong>rise in Progesterone level</strong> after peak fertility. Progesterone also supports implantation and elevated levels of PdG during the 7-10 day window after ovulation correlates to higher chances of a successful pregnancy.
            </p>
            <text className="text3">* Source: National Institutes of Health</text>
            <text className="text4">“Inito is all that you need to give you the best chance of conception."</text>
            <div className='doctorprofile'>
                <img src={rachel} className="doctorimg"></img>
                <text className='doctorname'>Dr. Rachel Wagner<br/><br/><br/> <i style={{color: '#94A0A4'}}>MD</i></text>

            </div>
        </div>
        </div>
    );
}