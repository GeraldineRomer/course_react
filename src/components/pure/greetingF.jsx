import React, {useState} from 'react';
import PropTypes from 'prop-types';

/* funciones */
const GreetingF = (props) => {

    //breve intro a useState
    //const [variable, método para actualizarlo] = useState(valor inicial);
    const [age, setage] = useState(29);

    const birthday = () => {
        //actualizzar el state
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                    ¡HELLO { this.props.name } desde componente princiapal!
            </h1>
            {/*  <h2>
                Tu edad es de: {this.state.age}
            </h2>
            <div>
                <button onClick={this.birthday}>
                    Cumplir años
                </button>
            </div>*/}
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
