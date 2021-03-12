import { ReactNode } from "react";

//========== GLOBAL ==========
interface IAppContainerProps {
    children: ReactNode
}

interface IFeedViewProps {
    data: IFeedCard[]
}


interface IFeedCard {
    comments: [any]
    date: string
    likes: number
    photo: string
    profile: string
    tags: [string]
    text: string
    _id?: string
    id: string
}

interface FeedCardProps {
    card: IFeedCard
}