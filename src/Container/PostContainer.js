import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchPost } from '../thunk/Post Method/PostActions/PostActionCreator'
function PostContainer({postData, fetchPost}) {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')


    useEffect(()=>{
        fetchPost()
    },[fetchPost])
const handlePostData = (e) =>{
   
}
    
    return (
        <div>
            <h1>Post Example</h1>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name="name" /> <br/> <br/>
            <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" /> <br/> <br/>
            <input type='text' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile" /> <br/> <br/>
            <button type='button' onClick={handlePostData} >Post Data</button>
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
