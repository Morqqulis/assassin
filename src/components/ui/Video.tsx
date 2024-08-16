'use client'

import { useRef } from 'react'

const Video = () => {
   const ref = useRef<HTMLVideoElement | null>(null)

   if (ref.current) ref.current.playbackRate = 2

   return (
      <video
         className={`absolute left-0 top-0 h-full w-full object-cover opacity-[.48]`}
         ref={ref}
         src="/video/smoke.mp4"
         autoPlay
         muted
         loop
      ></video>
   )
}

export default Video
