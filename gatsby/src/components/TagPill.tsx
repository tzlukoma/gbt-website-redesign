import React from 'react'

interface TagPillProps {
    tag: string
}

const TagPill = ({ tag }: TagPillProps) => {
    return (
        <div>
            <div className="mr-2 px-2 py-1 bg-gray-200">{tag.toLowerCase()}</div>
        </div>

    )
}

export default TagPill