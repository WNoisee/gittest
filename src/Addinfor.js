import React from "react";
import Delete from "./Delete";

class Addinfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id:1,
                name: 'Phong',
                age: '22',
                address: 'K108/40 Nguyen Chanh',
            }]
        };
    }

    Verify = (event, name, age, address) => {
        event.preventDefault();
        const PrevState = this.state.data.length
        this.setState({
            data: [...this.state.data, { 'id': PrevState+1 ,'name':name, 'age':age, 'address':address}]
        })
        console.log(this.state)
    }
    render() {
        const name = this.props.name
        const age = this.props.age
        const address = this.props.address
        const Check = this.state.data
        return (
            <div>
                <button onClick={(event) => this.Verify(event, name, age, address)}>Submit</button>
                {Check.map((item) => {
                    return (
                        <Delete id={item.id} name={item.name} age={item.age} address={item.address} Data={Check}></Delete>
                    )
                })}
            </div>
        );
    }
}

export default Addinfor;
