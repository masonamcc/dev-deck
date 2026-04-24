import {Link, useNavigate} from "react-router-dom";

import {useEffect} from "react";
import {Auth} from "aws-amplify";
import {IonIcon} from "@ionic/react";
import '@ionic/react/css/core.css';



export default function Sidebar() {

    const navigate = useNavigate()



    return (
        <div className={'sidebar'}>
            <div>
                <div className={'menu-container'}>
                    <Link to={'/home'}>Dashboard</Link>
                    <Link to={'/resources'}>Account Settings</Link>
                    <Link to={'/resources'}>General Settings</Link>
                </div>
            </div>

        </div>
    )
}

