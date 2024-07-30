import '../styles/Body4.css';
import apple from '../images/Body4images/apple.png'
import gif1 from '../images/Body4images/gif1.gif'
import gif2 from '../images/Body4images/gif2.gif'
import gif3 from '../images/Body4images/gif3.gif'
import gif4 from '../images/Body4images/gif4.gif'
import step1 from '../images/Body4images/step1.mp4'
import step2 from '../images/Body4images/step2.mp4'
import step3 from '../images/Body4images/step3.mp4'
import step4 from '../images/Body4images/step4.mp4'


function GifDisplay(props) {
    return (
        <div className='gif_wrapper'>
           
           <video autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Loading..." playsinline="true" src={props.gif}></video>
         
     
            {/* <img src={props.gif} className='body4_gif'></img> */}
            <text className='gif_number_mobile' style={{ backgroundColor: props.color }}>
                {props.number}
            </text>
            <div className='gif_row2'>
                <text className='gif_number'>
                    {props.number}
                </text>
                <text className='gif_text'>{props.text}</text>
            </div>
        </div>
    );
}

export default function Body4() {



    return (
        <>
            <div className='body4_background'>
                <div className='body4_column1'>
                    <text className='body4_text1'>A fertility lab at<br />your fingertips</text>
                    <text className='body4_text2'>Easy-to-read fertility diagnostic results directly on your iPhone¹, in just 10 minutes.</text>
                    <button className='body4_button'>Get the Inito Kit</button>
                    <text className='body4_text3'>* The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.</text>
                    <img src={apple} className='body4_image'></img>
                </div>

                <div className='body4_column2'>
                    <GifDisplay gif={step1} color="#BDE0E6" number="1" text="Dip the test strip in urine for 15 seconds." />
                    <GifDisplay gif={step2} color="#96CDD7" number="2" text="Attach the Inito Fertility Monitor to your iPhone*." />
                    <text className='body4_text4'>* The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.</text>
                    <GifDisplay gif={step3} color="#64B4C3" number="3" text="Insert the test strip into the Inito Fertility Monitor." />
                    <GifDisplay gif={step4} color="#1F94AA" number="4" text="Get personalized results on our App in 10 minutes." />
                </div>
            </div>

            <div className="review">
                <text style={{ color: '#0096AD', fontSize: 18 }}>★  ★  ★  ★  ★</text>
                <p className="review_text">This is my favorite fertility monitor I’ve tried so far. I was cautious about ordering since there’s very little info
                    or reviews around the internet, but it seems
                    to be a very well made and reliable device.
                    It’s totally fascinating to see my hormone levels on the chart! My LH levels don’t cooperate
                    with standard ovulation strips (I never get a positive with standard strips),
                    so it’s nice to see all the different hormones mapped out together.</p>
                <text className="reviewer">Sunny</text>
            </div>
            <text style={{ fontSize: 50, color: '#D9D9D9' }}><span style={{ color: '#1F94AA' }}>•</span>    •    •    •</text>


        </>
    );
}

