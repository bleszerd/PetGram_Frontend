//========== REQUESTS ===========
interface IGetFeedFromUserParams {
    username: string
}

interface IGetPostByIdParams {
    id: string
}

interface IFindUserByUsernameParams {
    username: string
}

interface IFindFollowersByUsername {
    username: string
}

interface IFindTimelineByUsername {
    username: string
}