import '../styles/Card2.css'
import card4 from '../images/card4.png'

export default function Card4(){
    return(
        <div className="cardbackground" style={{paddingBottom: 50, paddingTop: 0}}>
            
            <div className='cardflex'>
                <div className='column1'> 
                    <text className='heading2'>Get charts and actual values of your hormones
                    </text>
                    <p className='fulltext'>Actual numerical values are necessary to know whether your PdG levels are sufficient enough to support a healthy pregnancy.<br/><br/>
                    Studies show that PdG levels lower than 7.9ng/ml in serum (around 10ug/ml PdG) 6-8 days after ovulation are associated with lower pregnancy outcomes.</p>
                   
                </div>
                <button className='button_card4'>GET THE INITO KIT</button>
                <img src={card4} className='column2'></img>
            </div> 
        </div>
    );
}

