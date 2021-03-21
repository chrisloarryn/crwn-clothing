import firebase from 'firebase'

export type FirebaseUser = { id: string } & firebase.User

export type FirebaseUserInfo = firebase.UserInfo

export type FirebaseDocumentReference = firebase.firestore.DocumentReference

export type FirebaseDocumentData = firebase.firestore.DocumentData

export type UserI = {
	id: string
} & Partial<FirebaseUserInfo>

export type Nullable<T> = {
	[K in keyof T]: T[K] | null
}