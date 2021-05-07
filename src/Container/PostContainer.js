import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchPost } from '../thunk/Post Method/PostActions/PostActionCreator'
function PostContainer({postData, fetchPost}) {
   const [id,setId] = useState()
   const [name, setName] =useState()
   const [password,setPassword] = useState()


    useEffect(()=>{
        fetchPost()
    },[fetchPost])


    
const handleSubmit = (e) =>{
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    () => handleSubmit(fetchPost())
}    


    return (
        <div>
            <h1>Post Example</h1>
            <form onSubmit={handleSubmit}>
            <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}} name="id" /> <br/> <br/>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name="name" /> <br/> <br/>
            <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" /> <br/> <br/>

            <button type='submit' >Post Data</button>
            </form>
        </div>
    )
    
}


const mapStateToProps = (state) => {
    return {
        postData: state.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: () => {dispatch(fetchPost())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostContainer)
