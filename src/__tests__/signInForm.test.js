import React from 'react'; 
import {render, fireEvent, waitFor } from '@testing-library/react-native';
import { iterateObserversSafely } from '@apollo/client/utilities';
//...

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            //render the SignInContainer component, fill the text inputs and submit

            await waitFor(() => {
                // expect the onSubmit function to have been called once witc a correct first argument
            })
        })
    })
})