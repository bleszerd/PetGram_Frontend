import API from "../API"

const requests = {
    async getFeedFromUser({username}: IGetFeedFromUserParams){
        const response = await API.get(`/timeline/${username}`)

        return response.data
    },

    async getPostById({id}: IGetPostByIdParams){
        const response = await API.get(`/posts/${id}`)

        return response.data
    }
}

export {
    requests
}