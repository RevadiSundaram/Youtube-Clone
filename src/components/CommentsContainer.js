import React from 'react';

const commentsData = [
    {
        name: "Renu",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
        ]
    },
    {
        name: "Renu",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
            {
            name: "Renu",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            replies: []
            },
            {
            name: "Renu",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            replies: [
                {
                name: "Renu",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [
                    {
                    name: "Renu",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    replies: [
                        {
                        name: "Renu",
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        replies: []
                        }
                    ]
                    }
                ]
                }
            ]
            }
        ]
    },
    {
        name: "Renu",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: []
    },
    {
        name: "Renu",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: []
    },
    {
        name: "Renu",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: []
    },
]

const CommentsContainer = () => {
  return (
    <div className='p-2 m-5'>
        <h1 className='text-2xl font-bold'>Comments</h1>
    </div>
  )
}

export default CommentsContainer