
export type VideoEvent = Omit<Event, 'synopsis' | 'registerUrl'>

export interface Event {
    node: any
    id: number,
    date: string,
    publishPlatform: {
        name: string,
        platformUrl: string,
        platformImage: {
            asset: any
        } | null,
    } | null,
    slug: {
        current: string
    },
    status: string,
    thumbnail: {
        asset: any
    } | null,
    title: string,
    synopsis: [{
        children: [
            {
                text: string
            }
        ]
    }],
    registerUrl: string | null,
    videoUrl: string | null,
}