import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    /* componentes tipo clase */
    constructor(props){ /* props -> propiedades que necesita el html */
        super(props);
        /* state -> info privada */
        this.state = {
            age : 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡HELLO { this.props.name } !
                </h1>
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    /* nos permite cambiar la constante de age */
    birthday = () =>{
        this.setState((prevState) =>(
            {
                age: prevState.age +1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
