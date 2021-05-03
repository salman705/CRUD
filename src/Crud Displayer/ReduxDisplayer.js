import React from 'react'
import  '../redux.css'

function ReduxDisplayer(props) {
    return (
        <div className="container">
            <table >
                <thead>
                    <tr>
                        <th>Properties Name</th>
                        <th>Description</th>
                        <th className="type">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{props.id}</td>
                        <td className="type">VarChar</td>
                    </tr>


                    <tr>
                        <td>Nick Name</td>
                        <td>{props.nickname}</td>
                        <td className="type">String</td>
                    </tr>


                    <tr>
                        <td>User Name</td>
                        <td>{props.name}</td>
                        <td className="type">String</td>
                    </tr>


                    <tr>
                        <td>Picture</td>
                        <td>{props.photo}</td>
                        <td className="type">Blub</td>
                    </tr>


                    <tr>
                        <td>Email</td>
                        <td>{props.email}</td>
                        <td className="type">String</td>
                    </tr>


                    <tr>
                        <td>Password</td>
                        <td>{props.password}</td>
                        <td className="type">VarChar</td>
                    </tr>


                    <tr>
                        <td>Value</td>
                        <td>{props.__v}</td>
                        <td className="type">Null</td>
                    </tr>
                </tbody>



            </table>
         
         
         
         
         
         
         
         
         {/*   <table>
                <thead>
                    <label>id</label>
                <tr>
                    <td>
                        {props.id}</td>
                </tr>
                </thead>

                
                <thead>
                    <label>Nick Name</label>
                <tr>
                    <td>
                        {props.nickname}</td>
                </tr>
                </thead>

                <thead>
                    <label>User Name</label>
                <tr>
                    <td>
                        {props.name}</td>
                </tr>
                </thead>

                <thead>
                    <label>Picture</label>
                <tr>
                    <td>
                        {props.photo}</td>
                </tr>
                </thead>

                <thead>
                    <label>Email</label>
                <tr>
                    <td>
                        {props.email}</td>
                </tr>
                </thead>

                <thead>
                    <label>Password</label>
                <tr>
                    <td>
                        {props.password}</td>
                </tr>
                </thead>

                <thead>
                    <label>Value</label>
                <tr>
                    <td>
                        {props.__V}</td>
                </tr>
                </thead>
            </table>*/}
        </div>
    )
}


export default ReduxDisplayer
