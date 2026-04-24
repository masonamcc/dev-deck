import React from "react";

import {navigate} from "ionicons/icons";
import {Link} from "react-router-dom";

export default function ManageOrgsScreen() {

    const storedOrgs = JSON.parse(localStorage.getItem('orgs')) || [];
    console.log(storedOrgs)

    return (
        <div className={'mainframe-grid light'}>
            <div className="mainframe-section scroll column">

                <div className={"cell is-col-span-3 p-1 white-bg"}>
                    <h4>Manage Organizations</h4>
                </div>

                <div className="grid has-3-col p-1">

                    <div className={"cell is-col-span-3"}>
                        <table className={'table'}>
                            <thead>
                            <tr>
                                <th style={{width: "5%"}}>
                                    Org Id
                                </th>
                                <th style={{width: "20%"}}>
                                    Org Name
                                </th>
                                <th style={{width: "20%"}}>
                                    Org Code
                                </th>
                                <th>
                                    Domain
                                </th>
                                <th style={{width: "10%"}}>
                                    Actions
                                </th>

                            </tr>

                            </thead>
                            <tbody>
                            {storedOrgs.map((org, index) => (
                                <tr key={index}>
                                    <td><input type={"checkbox"}/>{org.orgId}</td>
                                    <td>{org.orgName}</td>
                                    <td>{org.orgCode}</td>
                                    <td>{org.domain}</td>
                                    <td>
                                        <Link
                                        to="/app/manage/organizations/edit"
                                        state={{ org }}
                                    >
                                        Edit
                                    </Link></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>



            </div>
        </div>
    )
}