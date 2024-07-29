import '../styles/Body5.css'
import { useState } from 'react';


export default function Body4() {

    const [currentQuestion, setCurrentQuestion] = useState('');

    const FAQs = [

        {
            question: "What results does Inito give?",
            answer: "Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 3 hormones."
        },
        {
            question: "Will Inito work if I have PCOS?",
            answer: "Every woman is unique, especially with a condition like PCOS, which can influence hormone levels. Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation."
        },
        {
            question: "How many test strips are required per cycle?",
            answer: "The number of tests depends on the irregularity and length of your cycles. For someone with an average cycle length of 30 days, 12-15 tests may be required to track and confirm ovulation."
        },
        {
            question: "Do medications affect the results?",
            answer: "Fertility medications or other drugs that influence your hormones can prevent Inito from giving you accurate results. You will still be able to see your hormone patterns via the App."
        },
        {
            question: "Where can I get more refill strips? Do I need to buy a new monitor every cycle?",
            answer: "Boxes of strips are available in the ‘shop’ tab in the Inito app. You don’t need to purchase the monitor again."
        },
        {
            question: "Can I use HSA benefits to purchase Inito?",
            answer: "Yes!"
        },
        {
            question: "Do I need to use a test strip for each hormone?",
            answer: "No. Inito is the only fertility monitor that measures Estrogen, LH, PdG (urine metabolite of progesterone) and FSH on a single test strip."
        },
        {
            question: "What is Inito's regulatory status in the US?",
            answer: "The Inito Fertility Monitor is registered with the U.S. Food and Drug Administration (FDA) as a Class I medical device that is exempt from FDA's premarket notification submission requirements. The registration status should not be misunderstood as suggesting that the Inito Fertility Monitor has been reviewed, cleared or approved by FDA."
        },

    ]


    function FAQDisplay(props) {
        return (
            <div className='FAQ_wrapper' onClick={() => {
                if (currentQuestion == props.number) setCurrentQuestion('');
                else setCurrentQuestion(props.number);
            }}>
                <div className='FAQ_row1'>
                    <text className='FAQ_question'>{FAQs[props.number].question}</text>
                    <text style={{ fontSize: 40 }}>{currentQuestion == props.number ? '-' : '+'}</text>
                </div>
                <text className='FAQ_answer'>{currentQuestion == props.number ? FAQs[props.number].answer : ''}</text>
            </div>
        );
    }



    return (
        <div className='Body5_background'>
            <text className='Body5_heading'>Your top questions,<br />answered</text>

            <div className='column_wrapper'>
                <FAQDisplay number="0" />
                <FAQDisplay number="2" />
                <FAQDisplay number="4" />
                <FAQDisplay number="6" />
            </div>
            <div className='column_wrapper'>
                <FAQDisplay number="1" />
                <FAQDisplay number="3" />


                <FAQDisplay number="5" />

                <FAQDisplay number="7" />
            </div>



        </div>
    );

}