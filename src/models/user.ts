import firebase from 'firebase';

export interface UserType {
  id?: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
}

export class User implements UserType {
  id?: string;
  email: string;
  constructor({ id, email }: UserType) {
    this.id = id;
    this.email = email;
  }
  toJSON(): UserType {
    return Object.assign({}, this);
  }
}

export const userConverter: firebase.firestore.FirestoreDataConverter<UserType> = {
  toFirestore: (user: UserType): firebase.firestore.DocumentData => {
    return {
      createdAt: user.createdAt ?? new Date(),
      updatedAt: new Date(),
      email: user.email,
    };
  },
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions,
  ) => {
    const data = snapshot.data(options);
    const { createdAt, updatedAt, isDeleted, email } = data;

    return new User({
      id: snapshot.id,
      createdAt,
      updatedAt,
      isDeleted,
      email,
    });
  },
};
