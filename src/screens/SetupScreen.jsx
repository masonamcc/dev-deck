import {Auth} from "aws-amplify";
import {useLocation, useNavigate} from "react-router-dom";
import {use, useState} from "react";
import {IonIcon} from '@ionic/react';
import {eyeOffOutline, eyeOutline, personOutline} from "ionicons/icons";
import {addDbUser} from "../scripts/userScripts.js";
// import '../ionicons/dist/css/ionicons.min.css';


export default function SetupScreen({setAwsUser}) {

    const location = useLocation();

    const {username, user} = location.state;
    const email = username
    console.log('Retrieved from state: ', username, user)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [verificationCode, setVerificationCode] = useState('')

    const navigate = useNavigate();

    const createDbUser = async() => {
        const response = await addDbUser(email, firstName, lastName);
        if (response) {
            console.log('Response in front-end: ', response)
            navigate("/home")
        }
    }

    return (
        <div className={'page'}>

            <div className="hero-section">

                <div className={'grid-2-col'}>

                    <div className={'general-field'}>
                        <h1 style={{fontSize: '40px', lineHeight: '1', fontWeight: '400'}}>Thank you for signing up!</h1>
                        <p style={{fontSize: '25px', fontWeight: '200'}}>You can either skip ahead to the main app or you can fill in these additional fields so I can personalize the experience for you.</p>
                    </div>

                    <div>
                        <div className={'hero-field'}>
                            <p>First Name</p>
                            <div className={'input-field'}>
                                <input className={'input-dark'}
                                       placeholder={'(Optional)'}
                                       value={firstName}
                                       onChange={(e) => setFirstName(e.target.value)}
                                />

                            </div>
                        </div>

                        <div className={'hero-field'}>
                            <p>Last Name</p>
                            <div className={'input-field'}>
                                <input className={'input-dark'}
                                       placeholder={'(Optional)'}
                                       value={lastName}
                                       onChange={(e) => setLastName(e.target.value)}
                                />

                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <button className={'button-accent'}
                                onClick={() => createDbUser(email, firstName, lastName)}
                            >Save and Continue
                            </button>
                            <button className={'button-dull'}
                                // onClick={() => handleConfirmation(email, verificationCode)}
                            >Skip Ahead
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )

}
