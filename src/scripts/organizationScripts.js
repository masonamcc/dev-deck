import netConfig from "../networkConfig.json"

const endPoint = netConfig.endPoint
console.log('Endpoint is: ', endPoint)

export const fetchDbOrgs = async() => {
    try {
        const orgs = await fetch (`${endPoint}/organizations`)
        const response = await orgs.json()
        if (response) {
            return response
        }
    } catch (err) {
        console.log("Couldn't fetch Db Orgs: ", err)
    }
}

export const fetchOrgUsers = async(orgId) => {
    try {
        const orgUsers = await fetch (`${endPoint}/organizations/users/${orgId}`)
        const response = await orgUsers.json()
        if (response) {
            console.log('orgUsers: ', orgUsers)
            return response
        }
    } catch (err) {
        console.log("Couldn't fetch Db OrgsUsers: ", err)
    }
}

export const fetchUserGroups = async(orgId) => {
    try {
        const userGroups = await fetch (`${endPoint}/user-groups/${orgId}`)
        const response = await userGroups.json()
        if (response) {
            console.log('userGroups: ', userGroups)
            return response
        }
    } catch (err) {
        console.log("Couldn't fetch Db OrgsUsers: ", err)
    }
}

export async function fetchOrgTabs(orgId) {
    const res = await fetch(`http://10.0.0.38:8080/tabs/${orgId}`);

    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const tabs = await res.json();
    console.log("Retrieve tabs:", tabs);

    return tabs;
}
