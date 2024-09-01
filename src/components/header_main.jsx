import React,{ useState, useRef, useEffect } from 'react'
import '../css/design.css'
import '../css/global.css'
import '../css/layout.css'

export default function Main(){
    const [level, setLevel] = useState(1) 
    const [exp, setExp] = useState(0)
    const [sterEgg, setEgg] = useState('')
    const mainContentRef = useRef(null) /* useRef() is for receiving that will trigger an effect or alterations */
    const levelBar = useRef(null)
    const expBar = useRef(null);
    console.log(expBar);
    let playEffects = () => {
        levelBar.current.classList.add("expand")
        levelBar.current.classList.add("animate");
        let allButtons = document.querySelectorAll('.quest_buttons')   /* I get all the elements that hava an effect */
        allButtons.forEach((ele) => {
            ele.classList.add('animateButtons')
            ele.disabled = true;
        })
        setTimeout(() => {
            levelBar.current.classList.remove("expand");
        }, 2000)
        setTimeout(() => {
            levelBar.current.classList.remove("animate");
            allButtons.forEach((ele) => {
                ele.classList.remove('animateButtons')
                ele.disabled = false;
            })
        }, 3500)
    }
    let possibleAnswers = [ /* String array to activate the sterEgg effect (useState) */
        'video game',
        'a game', 
        'the best game',
        'game',
        'masterpiece', 
        'master piece']
    let sterEggsAnswer = [   /* I´m try to place the sterEggs in an array of objects. To try to make more easier to handle this functionality */
        {
            name : 'skyrim',
            img : `url(${require('../img/skyrim.jpg')})` /* Not done yet */
        },
        {
            name : 'sonic',
            
        }
    ]
    function expMission(expGain){
/* Here I call the setExp state to change it to a new value. What´s more, I can make more stuff with it, like treat the max EXP*/
        setExp((exp) => {
            let newExp = exp + parseInt(expGain)
            expBar.current.style.setProperty('--progress', `${newExp}%`) /* Take the useRef named expBar and change the AFTER effect. */
            if(newExp >= 100){
                newExp = 0
                expBar.current.style.setProperty('--progress', `0%`)
                setLevel((level) => {
                    playEffects() /* call the functions that enable and disable the effects */
                    return level+1 /* In this type of function in state we need to return the new value of state,
                    React don´t get the value if u don´t return it*/
                })
            }
            return newExp 
        })
    }
    function mission(correctAnswer , expGainMission){ /* Function that is used to make all the quests. */
        /* correctAnswer is the attribute that the buttons have to store correct answer */
        let userAnswer = window.prompt("Your answer: ") 
        if(userAnswer != null){
            userAnswer.toLowerCase()
            let verifyUsrAnswer = userAnswer === correctAnswer;
            if(possibleAnswers.includes(userAnswer)){ 
                window.alert("You are a legend!")
                expMission(80) /* 72-77 - here is where I will treat the sterEgg of skyrim.*/
                setEgg(correctAnswer)
                return
            }
            if(verifyUsrAnswer || parseInt(userAnswer) === parseInt(correctAnswer)){
                /* 78 Verify if the userAnswer are a number or a string. */
                window.alert("Congrulations on your quest!")
                expMission(expGainMission)
                return true
            } else {
                window.alert("Wrong answer!")
            }
        } else {
            window.alert("Please type an answer!")
            return
        }
    }
    useEffect(() => {
        switch (sterEgg){
            case 'sonic':
                mainContentRef.current.style.setProperty('--background', `${`url(${require('../img/sonic.jpg')}`}`)
            break;
            case 'skyrim':
                mainContentRef.current.style.setProperty('--background', `${`url(${require('../img/skyrim.jpg')}`}`)
            break;
        }
        }, [sterEgg])

        return (
        <>
            <header className="main_header">
                <div className="content">
                    <h1 className="header_title">Game quiz</h1>
                    <div className="progress-container">
                        <p>EXP: </p>
                        <h3 className="progress-bar" ref={expBar}></h3>
                    </div>
                </div>
            </header>
            <main className="main_content" ref={mainContentRef}>
                <section className="list_screen">
                    <div className="title_list">
                        <h2>List</h2>
                        <h4 id="level" ref={levelBar}>Your Level: {level}</h4>
                        <h5>Choose a quest</h5>
                    </div>
                    <ul className="quest_list">
                        <li className="quests">
                            <p className="text_quest">
                                How much is 4+4?
                            </p>
                            <button
                                className="quest_buttons"
                                data-ans="crash"
                                data-expquest="100"
                                onClick={(event) => mission(
                                    event.target.getAttribute('data-ans'), 
                                    event.target.getAttribute('data-expquest'))
                                }>
                                Got it
                            </button>
                        </li>
                        <li className="quests">
                            <p className="text_quest">
                            In the sentence: "The teacher is with the students" what is the verb?
                            </p>
                            <button
                                data-ans="is"
                                data-expquest="30"
                                className="quest_buttons"
                                onClick={(event) => mission(
                                    event.target.getAttribute('data-ans'), 
                                    event.target.getAttribute('data-expquest'))
                                }>
                                Got it
                            </button>
                        </li>
                        <li className="quests">
                            <p className="text_quest">
                            What is the name of the sword that merges with the moon?
                            </p>
                            <button
                                data-ans="moonligth"
                                data-expquest="60"
                                className="quest_buttons"
                                onClick={(event) => mission(
                                    event.target.getAttribute('data-ans'), 
                                    event.target.getAttribute('data-expquest'))
                                }>
                                Got it
                            </button>
                        </li>
                        <li className="quests">
                            <p className="text_quest">
                            In the sentence: "The teacher is with the students" what is the verb?
                            </p>
                            <button
                                data-ans="is"
                                data-expquest="30"
                                className="quest_buttons"
                                onClick={(event) => mission(
                                    event.target.getAttribute('data-ans'), 
                                    event.target.getAttribute('data-expquest'))
                                }>
                                Got it
                            </button>
                        </li>
                        <li className="quests">
                            <p className="text_quest">
                                What is Skyrim?
                            </p>
                            <button
                                data-ans='skyrim'
                                data-expquest="60"
                                className="quest_buttons"
                                onClick={(event) => mission(
                                    event.target.getAttribute('data-ans'), 
                                    event.target.getAttribute('data-expquest'))
                                }>
                                Got it
                            </button>
                        </li>
                        <li className="quests">
                            <p className="text_quest">
                                What is the name of the blue Hedgehog?
                            </p>
                            <button
                                data-ans='sonic'
                                data-expquest="50"
                                className="quest_buttons"
                                onClick={(event) => mission(
                                    event.target.getAttribute('data-ans'), 
                                    event.target.getAttribute('data-expquest'))
                                }>
                                Got it
                            </button>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}