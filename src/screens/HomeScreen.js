import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}> Pantalla principal</Text>
			<Button onPress={() => navigation.navigate('Components')} title="Go to Components Demo" />
			<Button onPress={() => navigation.navigate('List')} title="Go to List demo" />
			<Button onPress={() => navigation.navigate('Image')} title="Go to Images demo" />
			<Button onPress={() => navigation.navigate('Counter')} title="Go to Counter Screen (useReducer)" />
			<Button onPress={() => navigation.navigate('Color')} title="Go to Color Demo" />
			<Button onPress={() => navigation.navigate('Square')} title="Go to Custom Color Demo (useReducer)" />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;
