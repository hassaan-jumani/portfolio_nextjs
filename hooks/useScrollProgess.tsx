import React, {useEffect, useState} from 'react'

const useScrollProgess = () => {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress:number = window.scrollY
            const scrollHeight:number =  document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion((currentProgress/ scrollHeight) * 100);
            }
        }
    
        window.addEventListener('scroll', updateScrollCompletion);
        return () => {
            window.removeEventListener('scroll', updateScrollCompletion);
        }

    },[]);
  return completion
}

export default useScrollProgess