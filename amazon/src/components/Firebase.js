import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyA2rHx-eX6j3Qb5dO575eBeUXusaNQOxEw',
	authDomain: 'clone-8e631.firebaseapp.com',
	databaseURL: 'https://clone-8e631.firebaseio.com',
	projectId: 'clone-8e631',
	storageBucket: 'clone-8e631.appspot.com',
	messagingSenderId: '619141965',
	appId: '1:619141965:web:543c65b6676968ddc53504',
	measurementId: 'G-8YTYQN217T',
});

const auth = firebase.auth();

export { auth };
