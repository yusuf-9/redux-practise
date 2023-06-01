import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateFetchUser, getData } from '../../redux/localusers'

const Users = () => {
  const data = useSelector(getData)
  const dispatch = useDispatch()


  // const handleFetchUsers = () => {
  //   dispatch(CreateFetchUser({uri: "userList"}))
  //   }

    useEffect(()=>{
      dispatch(CreateFetchUser({uri: "userList"}))
      console.log(data)
    }, [dispatch])


  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        {/* <button onClick={handleFetchUsers}>Fetch Users</button> */}
        {data.loading && <p>Loading...</p>}

        {data.users.map((item,index)=>{
          
          return (<p key={index}>{item.name}</p>)
        })}

        {data.error && <p>{data.error}</p>}
    </div>
  )
}

export default Users
