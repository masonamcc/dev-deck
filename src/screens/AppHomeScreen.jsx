import {useEffect} from "react";
import {config} from "../config.js";

export default function AppHomeScreen() {

    useEffect(() => {
        console.log('app loaded')
    }, []);

    return (

        <div className={'mainframe-grid'}>

            <div className="mainframe-section scroll column">

                <div className="flex fullwidth horizon-center">


                    <div className={'color-white is-col-span-3 flex-col width-50 mb-1-children'} style={{height: '500px', justifyContent: 'center'}}>
                        <div>
                            <p className={'accent'}>{config.location}</p>
                        </div>
                        <div className={'horizon-line'}>

                        </div>
                        <div>
                            <h1><span className={'wavy-text accent-waves'}>Full Stack</span> Software Engineer</h1>
                        </div>
                        <div>
                            <h6>{config.bio}</h6>
                        </div>


                    </div>

                </div>

            </div>
        </div>

    )
}