import React from "react";

class Delete extends React.Component{
    state = {
        data : []
    }

    Del = (event) => {
        event.preventDefault();
        const id = this.props.id
        const data = this.props.Data.filter((item) => item.id !== id)
        
        console.log(this.setState({
            data: [...this.state.data, ...data]
        }))
    }
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.id}</li>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.address}</li>
                    <button onClick={(event) => this.Del(event)}>Delete</button>
                </ul>
            </div>
        )
    }
}

export default Delete;