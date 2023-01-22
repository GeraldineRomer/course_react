import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';


const ComponentB = ({contact}) => {
    return (
        <div>
            <h2>
                Name: { contact.name } 
            </h2>
            <h2>
                Lastname: { contact.lastname } 
            </h2>
            <h2>
                Email: { contact.email } 
            </h2>
            <h2>
                Connect: { contact.connect ? 'Connect':'Disconnect' } 
            </h2>
        </div>
    );
};


ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ComponentB;

