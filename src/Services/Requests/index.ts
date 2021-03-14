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

        return response.data.response
    },

    async findPostById({id}: IFindPostById){
        const response = await API.get(`/posts/${id}`)

        return response.data.response.posts
    }
}

export {
    requests
}