import React from 'react'
import "./App.css"
import {Overlay, OverlayTrigger, Tooltip} from "react-bootstrap"


export const User = ({user}) => {
    return (
        <OverlayTrigger
            placement="right"
            overlay={<Tooltip id={"user-tooltip"}>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
            </Tooltip>}
        >t
            <a href={`user?userid=${user.id}`}>{user.name}</a>
    </OverlayTrigger>
    )
}

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            dataReady: false,
            userHover:'',
        }
    }

    componentDidMount = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    users: json,
                    dataReady: true

                })
            });
    }

    renderUserInfo = (user) => {
        return <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    }

    handleHoverEnter = (user) => {
        return this.setState({userHover: this.renderUserInfo(user)})
    }

    handleHoverExit = () => {
        return this.setState({userHover: ''})
    }

    render() {
        if(this.state.dataReady === true)
        {
            return(
                <div>
                    <h1>Users</h1>
                    <div>
                        {
                            this.state.users.map((user, index) => (
                                <div>
                                    <User key={index} user={user}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
        else
        {
            return(
                <h1>Loading</h1>
            )
        }
    }

}

export default App