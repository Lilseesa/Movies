import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import constants from '../utils/constants';

const { width } = Dimensions.get('window');

export const CastAndCrewScreen = ({ navigation, route }) => {
	console.log(route.params);

	const { cast, crew } = route.params;

	let items = cast ? cast : crew;

	React.useEffect(() => {
		navigation.setOptions({
			title: cast ? 'Actores' : 'Equipo de producción',
			headerBackTitleVisible: false,
		});
	});

	return (
		<ScrollView style={styles.container}>
			<View style={styles.castContainer}>
				{items.map((item, index) => (
					<View key={index} style={styles.card}>
						{item.profile_path ? (
							<Image
								resizeMode="cover"
								style={styles.image}
								source={{
									uri: `https://image.tmdb.org/t/p/original/${item.profile_path}`,
								}}
							/>
						) : (
							<View style={styles.iconContainer}>
								<Ionicons
									name="md-person"
									size={60}
									color={constants.COLORS.GRAY}
								/>
							</View>
						)}
						<Text style={{ textAlign: 'center' }}>
							{cast ? item.character : item.department}
						</Text>
						<Text style={{ textAlign: 'center' }}>{item.name}</Text>
					</View>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		marginTop: Platform.OS === 'ios' ? 0 : 20,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		color: constants.COLORS.TEXT_COLOR,
		fontWeight: 'bold',
		flexGrow: 1,
		flexWrap: 'wrap',
		marginRight: 12,
		fontSize: 16,
	},
	castContainer: {
		marginTop: 25,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 80,
	},
	seemore: {
		color: constants.COLORS.GRAY,
		fontSize: 12,
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		backgroundColor: constants.COLORS.LIGHT_GRAY,
		width: 80,
		height: 80,
		borderRadius: 80,
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		width: (width - 40) / 3,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 24,
	},
});

// Object {
//       "cast_id": 0,
//       "character": "Billy Mitchell",
//       "credit_id": "5b13bbfbc3a368628c016d55",
//       "gender": 2,
//       "id": 75129,
//       "name": "Damian Walshe-Howling",
//       "order": 8,
//       "profile_path": null,
//     },
