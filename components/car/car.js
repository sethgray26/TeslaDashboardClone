import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./car-styles"
import StyledButton from "../../components/StyledButton/StyledButton"


const Car = (props) => {
    const { name, tagline, taglineCTA, image } = props.car

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />


            <View style={styles.header}>
                <Text style={styles.title}> {name} </Text>

                <Text style={styles.subTitle}>
                    {tagline}
                    {" "}
                    <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>

                <StyledButton onPress={() => console.log(" ")}
                    type="primary"
                    content={"CUSTOM ORDER"} />

                <StyledButton onPress={() => console.log("  ")}
                    type="secondary"
                    content={"EXISTING INVENTORY"} />

            </View>

        </View>
    )
}


export default Car;