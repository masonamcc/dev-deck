import {useEffect, useState} from "react";

export default function HomeScreen() {

    const [greetingMessage, setGreetingMessage] = useState('')

    const greetUser = () => {
        const now = new Date();
        const thisHour = now.getHours()
        if (thisHour < 6) {
            setGreetingMessage('Early Bird, Huh?')
        } else if (thisHour >= 6 && thisHour < 12) {
            setGreetingMessage('Good Morning')
        } else if (thisHour >= 12 && thisHour < 18) {
            setGreetingMessage('Good Afternoon,')
        } else if (thisHour >= 18 && thisHour < 21) {
            setGreetingMessage('Good Evening,')
        } else if (thisHour >= 21 && thisHour <= 24) {
            setGreetingMessage('Late Night?')
        }
    }

    useEffect(() => {
        greetUser()
    }, []);

    return (
        <div className={'center-container gradient-1'}>
            <div className={'hero-section'}>

                <div className={'grid-2-col'}>

                    <div className={'general-field'}>
                        <h1 style={{fontSize: '40px', lineHeight: '1', fontWeight: '400'}}>AutoDeck</h1>

                        <p style={{fontSize: '25px', fontWeight: '300'}}>Automate your work through Chrome Extensions</p>

                        <button className={'button-accent'}>Sign Up</button>
                    </div>

                    <div style={{display: 'none'}}>
                        <div className={'hero-field'}>
                            <p style={{marginTop: '0'}}>Front-End Skills</p>
                            <div className={'icon-container'}>

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"/>
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"/>

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"/>

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bulma/bulma-plain.svg"/>
                            </div>
                        </div>

                        <div className={'hero-field'}>
                            <p>Back-End Skills</p>

                            <div className={'icon-container'}>
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"/>
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"/>


                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"/>


                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg"/>

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"/>
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"/>


                            </div>

                        </div>

                        <div className="hero-field">
                            <p>IDE's</p>
                            <div className="icon-container">

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"/>


                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg"/>

                            </div>
                        </div>
                    </div>

                </div>

                <div className={'grid has-3-col'}>
                    <p>Automate your workflows </p>
                </div>

            </div>
        </div>
    )
}