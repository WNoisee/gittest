
import React from 'react'
import Addinfor from './Addinfor'

class ChangeData extends React.Component{
    state = {
        'id':1,
        'name': 'Phong',
        'Age': '22',
        'Address': 'K108/40 Nguyen Chanh',
        'Condition': false,
    }
    ChangeName = (event) => {
        this.setState({...this.state, 'name': event.target.value})
    }
    ChangeAge = (event) => {
        this.setState({ ...this.state, 'Age': event.target.value })
    }
    ChangeAdrress = (event) => {
        this.setState({ ...this.state, 'Address': event.target.value })
    }
    render() { 

        return (
            <div>
                <input onChange={(event) => this.ChangeName(event)}></input>
                <br></br>
                <input onChange={(event) => this.ChangeAge(event)}></input>
                <br></br>
                <input onChange={(event) => this.ChangeAdrress(event)}></input>

                <Addinfor name={this.state['name']} age={this.state['Age']} address={this.state['Address']}></Addinfor>
            </div>
        )
    }
}

export default ChangeData;