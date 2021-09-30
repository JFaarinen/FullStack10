import React, { useState } from 'react';
import { Text, TextInput, Pressable, View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { exportAllDeclaration } from '@babel/types';

const Form = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        onSubmit({ username, password });
    };

    return(
        <View>
            <View>
                <TextInput
                value={username}
                onChangeText={(t) => setUsername(t)}
                placeholder="Username"
                testID="usernameField"
                />
            </View>
            <View>
                <TextInput 
                value={password}
                onChangeText={(t) => setPassword(t)}
                placeholder="Password"
                testID="passwordField"
                />
            </View>
            <View>
                <Pressable onPress={handleSubmit} testID="submitButton">
                    <Text>Submit</Text>
                </Pressable>
            </View>
        </View>
    );
};

describe('Form', () => {
    it ('calls funcction provided by onSubmit prop after pressing the submit button', () => {
        const onSubmit = jest.fn();
        const { getByTestId } = render(<Form onSubmit={onSubmit} />);

        fireEvent.changeText(getByTestId('usernameField'), 'kalle');
        fireEvent.changeText(getByTestId('passwordField'), 'password');
        fireEvent.press(getByTestId('submitButton'));

        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'kalle',
            password: 'password'
        });
    });
});