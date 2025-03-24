import { initializeApp } from 'firebase/app'
import {
	initializeFirestore,
	collection,
	writeBatch,
	doc,
	query,
	getDocs
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID
}

export const app = initializeApp(firebaseConfig)

export const db = initializeFirestore(app, {
	experimentalForceLongPolling: true
})

export const addCollectionAndDocument = async (collectionKey, objects) => {
	const collectionRef = collection(db, collectionKey)
	const batch = writeBatch(db)
	objects.forEach((object) => {
		const docRef = doc(collectionRef, object.category.toLowerCase())
		batch.set(docRef, object)
	})
	await batch.commit()
	console.log('done')
}

export const getCategoriesCollection = async () => {
	const collectionRef = collection(db, 'categories')
	const q = query(collectionRef)

	try {
		const querySnapShot = await getDocs(q)
		const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
			const data = docSnapShot.data()
			if (data && data.category && data.items) {
				const { category, items } = data
				acc[category] = items
			} else {
				console.warn('Document missing expected fields:', data)
			}
			return acc
		}, {})

		return categoryMap
	} catch (error) {
		return null
	}
}
