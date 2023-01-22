import React from 'react';
import { Contact } from '../../models/contact';
import ComponentB from '../pure/componentB';

const ComponentA = () => {

    const contact1 = new Contact("Miguel","Giraldo","miguel@gmail.com",false);

    return (
        <div>
            <div>
                <h1>
                    Your contact is:
                </h1>
            </div>
            <ComponentB contact={contact1}></ComponentB>
        </div>
    );
};

export default ComponentA;

