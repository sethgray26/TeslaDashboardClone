import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles"

import Car from "../car/car"
import cars from "./cars"

const CarsList = (props) => {
	const { } = props;


	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				renderItem={({ item }) => <Car car={item} />}
				showsVerticalScrollIndicator={false}
				snapToAlignment={'start'}
				decelerationRate={'fast'}
				snapToInterval={Dimensions.get('window').height}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	)
}


export default CarsList;