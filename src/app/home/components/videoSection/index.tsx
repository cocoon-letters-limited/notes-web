"use client"
import React, { useState } from 'react'
import PosterImage from "../../../../../public/images/webp/video.webp"

const VideoSection = () => {
    const [isPlay, setIsPlay] = useState(false);

    const handleToggleVideo = (e: any) => {
        if(isPlay){
            e.target.pause()
            setIsPlay(false)
        } else {
            e.target.play()
            setIsPlay(true)
        }
    }
    return (
        <div className='relative -top-28 md:-top-52 container px-4 md:px-8 xl:px-4 mx-auto'>
            <div className='w-full md:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto'>
                <video
                    onClick={handleToggleVideo}
                    src="https://noteopxds.blob.core.windows.net/media/vid.mp4"
                    poster={PosterImage.src}
                    className='border-[.5rem] md:border-[.8rem] lg:border-[1rem] xl:border-[1.4rem] border-[#F1F5FF] rounded-[1rem] md:rounded-[2rem] lg:rounded-[4rem]'
                >
                </video>
            </div>
        </div>
    )
}

export default VideoSection