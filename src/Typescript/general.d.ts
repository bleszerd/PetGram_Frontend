//=========== POSTS ============
interface IUserData {
    user: IUserProfile
    followers: IUserFollowers
    timeline: IUserTimeline[]
}

interface IUserProfile {
    _id: string
    profile: {
        activity: string
        followers: string
        name: string
        photo: string
        username: string
    }
}

interface IUserFollowers {
    followers: {
        count: number
        users: [string]
    }
    following: {
        count: number
        users: [string]
    }
    owner: string
    _id: string
}

interface IUserTimeline {
    comments: [
        mentionedUser: string,
        text: string,
        _id: string
    ]
    date: string
    id: string
    likes: number
    photo: string
    profile: string
    tags: [string]
    text: string
    _id: string
}

interface IFeedCardProps {
    cardData: IUserTimeline
}