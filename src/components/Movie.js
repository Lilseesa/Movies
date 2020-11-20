import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { DateTime } from 'luxon';

import constants from '../utils/constants';

import Text from '../components/TextCustom';

// para cargar imagenes: https://image.tmdb.org/t/p/original/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg
// para cargar imagenes de fondo: https://image.tmdb.org/t/p/original//lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg

const Luxon = DateTime.local().setLocale('es');

const imageWidth = 99;
const imageMargin = imageWidth + 20;

const imageHeight = 133;
const cardTop = imageHeight / 2 - 10;

const Movie = ({ movie, navigation }) => {
	const { title, vote_average, poster_path, popularity, release_date } = movie;

	const date = DateTime.fromISO(release_date).setLocale('es').toFormat('MMM, y');

	const loadMovie = () => {
		navigation.navigate(constants.SCREEN.DETAILS, { movie });
	};

	return (
		<Pressable style={styles.card} onPress={loadMovie}>
			<Image
				resizeMode="cover"
				style={styles.poster}
				source={{
					uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
				}}
			/>
			<View style={{ flex: 1, marginLeft: imageMargin }}>
				<View style={styles.titleContainer}>
					<Text fontFamily="bold" numberOfLines={1} style={styles.title}>
						{title}
					</Text>
					<Text fontFamily="bold" style={styles.votes}>
						{vote_average}
					</Text>
				</View>
				<Text style={styles.popularity}>{popularity.toFixed(0)}</Text>
				<Text style={styles.release_date}>{date}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: constants.COLORS.LIGHT,
		marginTop: cardTop,
		paddingHorizontal: 20,
		paddingBottom: 20,
		paddingTop: 30,
		borderRadius: 20,
		flexDirection: 'row',
		alignItems: 'flex-end',
		position: 'relative',
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	title: {
		color: constants.COLORS.TEXT_COLOR,
		fontWeight: 'bold',
		flexGrow: 1,
		flexWrap: 'wrap',
		marginRight: 12,
		fontSize: 16,
	},
	votes: {
		color: constants.COLORS.WARNING,

		fontSize: 16,
	},
	popularity: {
		color: constants.COLORS.PRIMARY,
		borderColor: constants.COLORS.PRIMARY,
		borderWidth: 1,
		padding: 2,
		width: 40,
		borderRadius: 4,
		textAlign: 'center',
		marginTop: 8,
		marginBottom: 8,
		fontWeight: '300',
		fontSize: 10,
	},
	release_date: {
		fontSize: 12,
		textTransform: 'capitalize',
	},
	poster: {
		width: imageWidth,
		height: imageHeight,
		borderRadius: 16,
		position: 'absolute',
		bottom: 20,
		left: 20,
	},
});

export default Movie;

// Object {
//     "adult": false,
//     "backdrop_path": "/lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg",
//     "genre_ids": Array [
//       12,
//       35,
//       878,
//       10749,
//     ],
//     "id": 590223,
//     "original_language": "en",
//     "original_title": "Love and Monsters",
//     "overview": "Un mundo posapocalíptico. Joel Dawson es un joven que deberá luchar contra monstruos, con tal de reunirse con Aimee, su amor del instituto. En el camino, tendrá que desafiar peligrosos animales mutantes y encontrará amistades inesperadas y también algunos enemigos.",
//     "popularity": 728.86,
//     "poster_path": "/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg",
//     "release_date": "2020-10-16",
//     "title": "Love and Monsters",
//     "video": false,
//     "vote_average": 7.6,
//     "vote_count": 109,
//   },
