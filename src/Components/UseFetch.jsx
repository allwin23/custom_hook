import { useEffect, useState } from "react"

const url ='https://api.npoint.io/9045c260b1565daa9e15'
const UseFetch = (url) => {
    const[data,setData] = useState();
    useEffect(()=>{
        fetch(url).then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
return [data]
}

export default UseFetch
