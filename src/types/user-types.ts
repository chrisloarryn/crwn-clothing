import firebase from 'firebase'

export type FirebaseUser = firebase.User

export type FirebaseUserInfo = firebase.UserInfo

export type Nullable<T> = {
	[K in keyof T]: T[K] | null
}