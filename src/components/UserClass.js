import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state= {
            count:0,
            count2:1,
            userInfo:{
                name :"Dummy",
                location:"Dummy Location",
                avatar_url:"https:/dummy"

            }
        };
       // console.log(this.props.name+" Child UserClass Constructor");
    }
    async componentDidMount(){
       // console.log(this.props.name+"Child ComponentDidMount")
        
        const data = await fetch(
            "https://api.github.com/users/4aman16"
        )

        const json= await data.json();
        console.log(json);


        this.setState({
            userInfo: json,
        })

    
    }

    componentDidUpdate() {
        console.log(this.props.name+"Child UserClass ComponentDidUpdate")
    }

    componentWillUnmount() {
        console.log(this.props.name+"Child UserClass ComponentWillUnmount")
    }

    render() {
        // console.log(this.props.name+"Child UserClass Render");
        const { name, location,avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
            <h1>User Component</h1>
            <h1 >{this.state.count}</h1>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                    })
            }}
            >Increment</button>
            <h2>Name :- {name}</h2>
            <h3>Location: {location}</h3>
            <h2>Linkedln</h2>
            <img src={avatar_url} alt="User Avatar" />
        </div>
        )
    }

}

export default UserClass;