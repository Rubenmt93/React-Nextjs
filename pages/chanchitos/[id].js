import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'
const ChanchitoDinamico = () => {
    const router =  useRouter()
    const [loaded, setLoaded] = useState(false)
    useEffect(() =>{
        if( router.isReady){
            setLoaded(true)
        }
    }, [router.isReady] )
    
    if(!loaded){
        return null
    }
    return (
        <div>
            <p> chanchito dinamico </p>
        </div>
    )
}

export default ChanchitoDinamico