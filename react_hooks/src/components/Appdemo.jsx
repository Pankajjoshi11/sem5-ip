import React,{useState, useEffect} from 'react'


const HomePage =()=>{
    const[name,setName]=useState('');
    const [lastName, setLastName] = useState('')
    const [fullname, setFullname] = useState(' ')

    useEffect(()=>{
        setFullname(`${name} ${lastName}`)
    },[name, lastName])


    return(
        <div>
            <h1>React Hooks</h1>
            <p>Enter first name</p>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value) } />

            <p>enter last name</p>
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />

            <p>Fullname = </p>
            <p>{fullname}</p>
        </div>
    )
}

export default HomePage