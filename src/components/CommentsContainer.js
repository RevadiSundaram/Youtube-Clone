import React from 'react';
import { FaUserCircle } from "react-icons/fa";

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
];

const Comment = ({data}) => {
    const {name, text} = data;
    return (
        <div className='flex items-center bg-gray-100 rounded-lg p-2 my-2'>
            <FaUserCircle size={40} />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({commentsData}) => {
    return commentsData.map((each, index) => (
        <div key={index}>
            <Comment  data={each} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList commentsData = {each.replies} />
            </div>
        </div>
    ));
}




const CommentsContainer = () => {
  return (
    <div className='p-2 m-5'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList commentsData = {commentsData} />
    </div>
  )
}

export default CommentsContainer