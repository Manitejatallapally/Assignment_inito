import '../styles/Card2.css'
import card2 from '../images/card2.png'

export default function Card2(){
    return(
        <div className="cardbackground">
             <text className='heading'>Why Inito is the smarter<br/>way to get pregnant</text>
            <div className='cardflex'>
                <div className='column1'> 
                    <text className='heading2'>Adapts to your<br/>irregular cycle</text>
                    <p className='fulltext'>Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.<br/><br/>
                    Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.</p>
                </div>
                <img src={card2} className='column2'></img>
            </div> 
        </div>
    );
}