import {Component} from "react";
import {NavLink} from "react-router-dom";
import React from "react";






// const User = () => {
//   return(
//       <div>
//       <h1>Welcome User</h1>
//         <ul>
//             <li>
//                 <NavLink to="/user/123" exact activeStyle={{color:'green'}}>Login</NavLink>
//             </li>
//         </ul>
//
//       </div>
//   )
// }





class User extends Component {
    render(){
        return(
            <div>
                <h1>Welcome User</h1>
                <ul>
                    <li>
                        <NavLink to="/user/login" exact activeStyle={{color:'green'}}>Nested Login</NavLink>
                    </li>
                </ul>

            </div>
        );
    }

}

export default User;