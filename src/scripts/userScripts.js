import netConfig from "../networkConfig.json"

const endPoint = netConfig.endPoint
console.log('Endpoint is: ', endPoint)

export const addDbUser = async(email, firstName, lastName) => {
    const user = await fetch (`${endPoint}/users/create`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            firstName: firstName,
            lastName: lastName
        })
    })
    const response = await user.json()
    if (response) {
        console.log('Response: ', response)
        return response
    }
}

export const fetchDbUsers = async() => {
    try {
        const users = await fetch (`${endPoint}/users`)
        const response = await users.json()
        if (response) {
            return response
        }
    } catch (err) {
        console.log("Couldn't fetch Db Users: ", err)
    }

}

