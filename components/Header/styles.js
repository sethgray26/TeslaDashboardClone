import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
	container: {
		height: 40,
		width: "90%",
		position: 'absolute',
		top: 50,
		zIndex: 1,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	logo: {
		height: 20,
		width: 100,
		resizeMode: "contain"
	},
	menu: {
		height: 25,
		width: 25
	}

});

export default styles