import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const { statistics} = info;
    const {channelTitle, title, thumbnails} = info.snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg cursor-pointer'>
        <img className='rounded-md' alt="thumbnail" src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) => {
  return (
  <div className='p-1 m-1 border border-2 border-black'>
    <VideoCard info={info} />
  </div>
  
  )
}

export default VideoCard;