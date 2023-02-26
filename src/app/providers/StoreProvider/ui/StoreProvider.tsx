import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../index';

interface StoreProviderProps {
 children?: ReactNode;
 initilaState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initilaState } = props;
    const store = createReduxStore(initilaState as StateSchema);
    return (

        <Provider store={store}>
            {children}
        </Provider>
    );
};
