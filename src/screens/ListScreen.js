import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'Friend #1', age: 22 },
		{ name: 'Friend #2', age: 27 },
		{ name: 'Friend #3', age: 29 },
		{ name: 'Friend #4', age: 21 },
		{ name: 'Friend #5', age: 19 },
		{ name: 'Friend #6', age: 18 },
		{ name: 'Friend #7', age: 36 },
		{ name: 'Friend #8', age: 50 },
		{ name: 'Friend #9', age: 34 }
	];

	return (
		<FlatList
			data={friends}
			keyExtractor={(friend) => friend.name}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};
const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50
	}
});

export default ListScreen;
