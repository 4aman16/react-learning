import React from 'react';
import {Component} from 'react';
import User from './User';
import UserClass from './UserClass';



// class AboutUs extends React.Component {

//     constructor(props){
//         super(props);
//         console.log("About Us Constructor")
        
//         this.state= {
//             count:0,
//         }
        
//         console.log("Parent Constructor");
    
//     }

//     componentDidMount(){
//         console.log("Parent ComponentDidMount")
        
//         // Used to make an api call


    
//     }

//     render(){

//         console.log("Parent Render")
//         return (
//             <div>
//                 <h1>About Us</h1>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={
//                     () => {
//                         {
//                             this.setState({
//                                 count: this.state.count + 1
//                             })
//                         }
//                     }
//                 } >Increment</button>
//                 <User name="Aman"/>
//                 <UserClass name="Aman" />
//            </div>
//         )
//     }




// }


const AboutUs = () => {

return (
    <div>

        <h1>About Us</h1>
        <User name="Aman"/>
        {/* <UserClass name="Aman" /> */}
    </div>



)

}

/**
 * 
 * - Parent COnstructor
 *  - Parent Render
 *  
 *  - Aman Child Constructor
 *  - Aman Child Render
 * 
 *  
 * - Aman 2 Child Constructor
 *  - Aman 2 Child Render
 *  
 * - Aman 3 Child Constructor
 *  - Aman 3 Child Render
 * 
 *  DOM UPDATES NOW IN A SINGLE BATCH AND Commit phase is called
 * 
 *  - Aman componentDidMount
 *  - Aman 2 componentDidMount
 *  - Aman 3 componentDidMount
 *  
 *  - Understand using react Lifecycle Diagram
 * 
 * 
 * 
 */

export default AboutUs;