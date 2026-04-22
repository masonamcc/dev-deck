import {useLocation} from "react-router-dom";
import {fetchOrgTabs, fetchOrgUsers, fetchUserGroups} from "../scripts/organizationScripts.js";
import {useEffect, useState} from "react";
import {checkbox} from "ionicons/icons";

export default function EditOrgScreen() {

    const location = useLocation();
    const {org} = location.state
    const [allOrgUsers, setAllOrgUsers] = useState([])
    const [userGroups, setUserGroups] = useState([])
    const [view, setView] = useState(0)
    const [orgTabs, setOrgTabs] = useState([])

    const getUsersByOrg = async (orgId) => {

        const orgUsers = await fetchOrgUsers(orgId);
        if (orgUsers) {
            setAllOrgUsers(orgUsers)
        }
    }

    const getUserGroups = async (orgId) => {
        const userGroups = await fetchUserGroups(orgId)
        if (userGroups) {
            setUserGroups(userGroups)
        }
    }

    const getOrgTabs = async (orgId) => {
        const orgTabs = await fetchOrgTabs(orgId)
        if (orgTabs) {
            setOrgTabs(orgTabs)
        }
    }



    const hideDiv = (divId) => {
        document.getElementById(divId).classList.add('is-hidden')
    }

    useEffect(() => {
        getUsersByOrg(org.orgId)
        getUserGroups(org.orgId)
        getOrgTabs(org.orgId)

    }, []);

    return (
        <div className={'mainframe-grid light'}>
            <div className="mainframe-section column">

                <div className={'cell is-col-span-3 white-bg p-1'}>
                    <h3>{org.orgName}</h3>
                    <table className={'data-table'}>
                        <thead>
                        <tr>
                            <th>
                                Org Code
                            </th>
                            <th>
                                Users
                            </th>
                            <th>
                                User Groups
                            </th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{org.orgCode}</td>
                            <td>{allOrgUsers.length}</td>
                            <td>{userGroups.length}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div style={{paddingTop: '1rem'}}>
                        <ul className={'tabs'}>
                            <li><a onClick={() => setView(0)}>Overview</a></li>
                            <li>|</li>
                            <li><a onClick={() => setView(1)}>Extension</a></li>
                            <li><a onClick={() => setView(2)}>User Groups</a></li>
                            <li>Modules</li>
                        </ul>
                    </div>

                </div>

                {view === 0 &&
                    <div id={'dashboardView'} className="grid has-2-col p-1 flex view">

                        <div className={'cell panel p-1 white-bg'}>
                            <h5>Users</h5>
                            <table className={'small-table'}>
                                <thead>
                                <tr>
                                    <th>
                                        Id
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        User Group
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {allOrgUsers.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.userId}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.userGroup.name}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>


                    </div>
                }

                {view === 1 &&
                    <div className={'grid has-2-col p-1 flex view'}>
                        <div className={'cell panel p-1 white-bg flex-column'}>
                            <h4>Extension Configuration</h4>
                            <div className={'grid has-2-col'}>
                                <div className="cell outline p-1">
                                    <h5>Modules</h5>
                                    <ul>
                                        <li><input id={'talkTrackModuleCheck'} type={'checkbox'}/> Chat GPT</li>
                                        <li><input id={'talkTrackModuleCheck'} type={'checkbox'}/> Scripts</li>
                                        <li><input id={'talkTrackModuleCheck'} type={'checkbox'}/> Talk Tracks</li>
                                    </ul>

                                </div>
                                <div className="cell outline p-1 ">
                                    <h5>Navigation</h5>
                                    <div className={'grid has-3-col'}>
                                        <div className="cell outline">
                                            <ul id={'availableScripts'}>
                                                <li>Talk Tracks</li>
                                            </ul>

                                        </div>
                                        <div className="cell">

                                        </div>
                                        <div className="cell">

                                        </div>
                                    </div>
                                </div>

                                <div className={'cell outline p-1 is-col-span-2'}>
                                    <h5>Tabs</h5>
                                    <p>Add which tabs you'd like users to have access to in the extension.</p>
                                    {orgTabs.map((tab, index) => (
                                        <div key={index} className={'p-1'}>
                                            <p>{tab.label}</p>
                                        </div>
                                    ))}
                                    <div style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        border: '1px solid'
                                    }}>
                                        <p>+ Add a Tab</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                }

                {view === 2 &&
                    <div id={'userGroupsView'} className={'grid has-2-col p-1 flex view'}>
                        <div className={'cell panel p-1 white-bg flex-column'}>
                            <h4>User Groups</h4>
                            <p>Determine which user groups have access to which tabs in the extension</p>
                            {userGroups.map((userGroup, index) => (
                                <div key={index} className={'p-1 grid has-3-col'}>
                                    <h5>{userGroup.name}</h5>

                                    <textarea></textarea>
                                </div>
                            ))}
                            <div style={{width: '100%', justifyContent: 'center', display: 'flex'}}>
                                <h4>+ Add a Tab</h4>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}