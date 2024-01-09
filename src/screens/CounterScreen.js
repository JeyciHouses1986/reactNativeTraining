import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const INCREASE_VALUE = 1;

const reducer = (state, action) => {
	switch (action.type) {
		case 'increase_counter':
			return { ...state, counter: state.counter + action.payload };
		case 'decrease_counter':
			return { ...state, counter: state.counter - action.payload };
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { counter: 0 });

	return (
		<View>
			<Button title="Increase" onPress={() => dispatch({ type: 'increase_counter', payload: INCREASE_VALUE })} />
			<Button title="Decrease" onPress={() => dispatch({ type: 'decrease_counter', payload: INCREASE_VALUE })} />
			<Text style={styles.text}>Current Count: {state.counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default CounterScreen;
