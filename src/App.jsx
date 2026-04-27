
import {Route, Routes} from 'react-router-dom';
import Navbar from './navigation/Navbar.jsx';
import Home from './screens/Home.jsx';
import ManageOrgsScreen from "./screens/ManageOrgsScreen.jsx";
import EditOrgScreen from "./screens/EditOrgScreen.jsx";
import RepoDetail from "./screens/RepoDetail.jsx";

function App() {

    return (
        <div className={'master-container'} style={{overflow: 'hidden'}}>

                <div className={`static-container`}>
                    <Navbar/>

                    <div className={'page-content'}>
                        <div className={'mainframe'}>
                            <Routes>
                                <Route path={'/'} element={<Home/>}/>
                                <Route path={'/repo/:repoName'} element={<RepoDetail/>}/>
                            </Routes>
                        </div>
                    </div>

                </div>

        </div>
    );
}

export default App;
