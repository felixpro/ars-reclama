import React, { useContext } from 'react';
import { ClientsContext } from '../../../context/client-context';

import { IclientForm } from './types.ts';


export const validate = (client: IclientForm) => {
    const { createClient } = useContext(ClientsContext);

	console.log('Desde validacion', client);
};
