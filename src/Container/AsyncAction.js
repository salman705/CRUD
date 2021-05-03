import React, { useEffect} from 'react'
import  { connect } from 'react-redux'
//import {fetchUserRequest,fetchUserSuccess,fetchUserFailure}  from './index'
import {fetchUsers} from '../thunk/Get Method/ThunkActions/actionCreator'
import ReduxDisplayer from '../Crud Displayer/ReduxDisplayer'


 const AsyncAction=({userData, fetchUsers})=> {

    useEffect(() => {
         fetchUsers()
    },[])
    return userData.loading ? (<h2>loading</h2>)
     : userData.error ? (<h2>{userData.error}</h2>) 
     : (<div>
          <h2> User List </h2>
     <div>
     {
                    userData && userData.users && userData.users.map(user => 
                    <ReduxDisplayer
                    id={user._id}
                    nickname={user.nickname}
                    name={user.username}
                    pic={user.photo}
                    email={user.email}
                    password={user.password}
                    value={user.__v}

                    />)
                }
     </div>
     </div>)
}

const mapStateToProps = (state)=>{
    return{
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchUsers:() => {dispatch(fetchUsers())}
            }
}
export default connect(mapStateToProps,mapDispatchToProps)(AsyncAction)
