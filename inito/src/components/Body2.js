import '../styles/Body2.css'
import starcircle from '../images/circlestars.png'
import checkcircle from '../images/checkcircle.png'
import boxcircle from '../images/boxcircle.png'


export default function Body2() {

    return (<div className="wrapper">
        <h1 className="paragraph1">The only fertility kit you will ever need</h1>
        <p className="paragraph2">Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH), but fail to measure the hormone that actually confirms your ovulation and supports pregnancy: <strong>Progesterone</strong>.</p>
        <h1 className="paragraph3">What makes Inito different?</h1>
        <p className="paragraph2">Inito is the only fertility monitor that measures all <strong>4 hormones</strong> on a <strong>single test strip</strong>, showing you a full picture of your cycles with results unique to your body.</p>
       <div className="circlewrapper">
        <img src={starcircle} className='circleimg'></img>
        <text className='circletxt'>TRUSTED BY<br/>20,000+ COUPLES</text>
        <img src={checkcircle} className='circleimg'></img>
        <text className='circletxt'>FREE US SHIPPING</text>
        <img src={boxcircle} className='circleimg'></img>
        <text className='circletxt'>HSA/FSA ELIGIBLE</text>
       </div>

    </div>)

}