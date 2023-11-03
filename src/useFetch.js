import { useState, useEffect } from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
         fetch(url)
         .then(res =>
     
          { if (!res.ok) {
             throw Error('could not fetch the data')
           }
           return res.json()})
         .then(data => {
           setData(data)
           setIsLoaded(false)
         })
         .catch(err => {
           setError(err.message)
           setIsLoaded(false)
         })
        }, 500)
         
        },[])
        
        return {data, isLoaded, error, setData}
}
export default useFetch;