//========== REQUESTS ===========
interface IFindUserByUsernameParams {
    username: string
}

interface IFindFollowersByUsername {
    username: string
}

interface IFindTimelineByUsername {
    username: string
}

interface IFindPostById {
    id: string
}