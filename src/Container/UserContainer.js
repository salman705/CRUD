import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../thunk/Get Method/ThunkActions/actionCreator'
import '../redux.css'

function GetContainer ({userData, fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    },[fetchUsers])

    return userData.loading ? (
        <h2 className="container">Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Get Example</h2>
            <div className="div">
                {
                    userData && userData.users && userData.users.map(user => 
                    <table className='table'>
                        <thead className='thead'>
                        <tr>
                        <th>PropertiesName</th>
                        <th>Description</th>
                        <th className="type">Type</th>
                    </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td >ID</td>
                        <td>{user._id}</td>
                        <td className="type">VarChar</td>
                    </tr>


                    <tr>
                        <td>Nick Name</td>
                        <td>{user.nickname}</td>
                        <td className="type">String</td>
                    </tr>


                    <tr>
                        <td>User Name</td>
                        <td>{user.username}</td>
                        <td className="type">String</td>
                    </tr>


                    <tr>
                        <td>Picture</td>
                        <td>{user.photo}</td>
                        <td className="type">Blub</td>
                    </tr>


                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                        <td className="type">String</td>
                    </tr>


                    <tr>
                        <td>Password</td>
                        <td>{user.password}</td>
                        <td className="type">VarChar</td>
                    </tr>


                    <tr>
                        <td>Value</td>
                        <td>{user.__v}</td>
                        <td className="type">Null</td>
                    </tr>
                        </tbody>
                    </table>
                        )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {dispatch(fetchUsers())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetContainer)