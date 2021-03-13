import API from "../API"

const requests = {
    async findUserByUsername({username}: IFindUserByUsernameParams){
        const response = await API.get(`/user/${username}`)

        return response.data.response[0]
    },

    async findFollowersByUsername({username}: IFindFollowersByUsername){
        const response = await API.get(`/followers/${username}`)
        
        return response.data.response[0]
    },

    async findTimelineByUsername({username}: IFindTimelineByUsername){
        const response = await API.get(`/timeline/${username}`)

        console.log(response.data.response);

        return response.data.response
    }
}

export {
    requests
}