
import { useEffect, useState } from 'react'
import './App.css'

function App() {


  let [users,setUsers] = useState([])

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users",{
      method:"GET"
    })
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setUsers(data)
    })
    .catch((err)=>{
      console.log(err)
    })




  },[])


  return (
    <>
     
      {

          users.map((user)=>{
            return (
              <h1>{user.name}</h1>
            )
          })

      }
    

    </>
  )
}

export default App
