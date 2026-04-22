import {Auth} from "aws-amplify";
import {useNavigate} from "react-router-dom";
import {use, useState} from "react";
import {IonIcon} from '@ionic/react';
import {eyeOffOutline, eyeOutline, personOutline} from "ionicons/icons";
// import '../ionicons/dist/css/ionicons.min.css';
import { useAwsUser } from '../contexts/AwsUserContext.js';


export default function SignInScreen() {

    const { setAwsUser, awsUser } = useAwsUser();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const signIn = async (username, password) => {
        try {
            console.log('Getting Auth User')
            const authUser = await Auth.signIn(username, password);
            console.log('Signed in:', authUser);
            setAwsUser(authUser)
            console.log(awsUser)
            navigate('/home')
        } catch (error) {
            console.error('Sign in error:', error);
        }
    };


    return (
        <div className={'center-container'}>

            <div className="hero-section">

                <div className={'grid-2-col'}>

                    <div className={'general-field'}>
                        <h1 style={{fontSize: '40px', lineHeight: '1', fontWeight: '400'}}>Sign In</h1>

                        <p style={{fontSize: '25px', fontWeight: '200'}}>Sign in to gain access to the app.</p>

                    </div>

                    <div>
                        <div className={'hero-field'}>
                            <p>Email Address</p>
                            <div className={'input-field'}>
                                <input className={'input-dark'}
                                       placeholder={'your_email@email.com'}
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>
                        </div>

                        <div className={'hero-field'}>
                            <p>Password</p>
                            <div className={'input-field'}>
                                <input className={'input-dark'}
                                       type={showPassword ? 'text' : 'password'}
                                       placeholder={'********'}
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                />
                                <IonIcon icon={showPassword ? eyeOutline : eyeOffOutline}
                                         onClick={() => setShowPassword(prev => !prev)}
                                />
                            </div>
                        </div>

                        {errorMessage ? (
                            <div className="hero-field">
                                <p className={'error-message'}>{errorMessage}</p>
                            </div>
                        ) : (
                            <></>
                        )}

                        <button className={'button-accent'}
                                onClick={() => signIn(email, password)}
                        >Sign In</button>
                    </div>

                </div>
            </div>

        </div>
    )

}
