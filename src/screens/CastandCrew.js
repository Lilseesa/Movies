import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, Dimensions, Platform } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';


import constants from "../utils/constants";

const { width } = Dimensions.get("window");

import { ScrollView } from 'react-native-gesture-handler';

export const CastandCrew = ({ navigation, route }) => {
    console.log(route.params)
    const { cast, crew } = route.params;

    let items = cast ? cast : crew;

    React.useEffect(() => {
        navigation.setOptions({
            title: cast ? "Actores" : "Equipo de producción",
            headerBackTitleVisible: false,
        });
    });

    return (
        <ScrollView style={styles.container}>
            <View style={styles.castContainer}>
                {items.map((item, index) =>
                    <View key={index} style={styles.card}>
                        {item.profile_path ? (
                            <Image
                                key={index}
                                resizeMode='cover'
                                style={styles.image}
                                source={{
                                    uri: `https://image.tmdb.org/t/p/original/${item.profile_path}`
                                }}
                            />
                        ) : (
                                <View style={styles.iconContainer}>
                                    <Ionicons name="md-person" size={60} color={constants.COLORS.GRAY} />
                                </View>
                            )}

                        <Text style={{ textAlign: "center" }}>
                            {cast ? item.character : item.department}
                        </Text>
                        <Text style={{ textAlign: "center" }}>
                            {item.name}
                        </Text>
                    </View>
                )}

            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: Platform.OS == "ios" ? 0 : 20,
    },
    card: {
        width: (width - 40) / 3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 26,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    title: {
        color: constants.COLORS.TEXT_COLOR,
        fontWeight: 'bold',
        flexGrow: 1,
        flexWrap: "wrap",
        marginRight: 12,
    },
    castContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "flex-start",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 80,
    },
    seemore: {
        color: constants.COLORS.GRAY,
        fontSize: 12,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    iconContainer: {
        backgroundColor: constants.COLORS.LIGHT_GRAY,
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 80,
    },
});
