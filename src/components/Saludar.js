import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function Saludar(props) {
    const {name,lastName} = props;

    return (
             <Text>Hellow, It's name my wife is: {name} {lastName}</Text>         
    );
}

Saludar.defaultProps = {
    name: 'Diana',
    lastName: 'Caicedo Cobacango'
}

Saludar.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string,
}