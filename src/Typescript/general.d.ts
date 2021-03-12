//=========== POSTS ============
interface IPost {
    comments?: [{
        mentionedUser: string
        text: string
        _id: string
    }]
    date: string
    likes: number
    photo: string
    profile: string
    tags: [string]
    text: string
    _id?: string
    id: string
}