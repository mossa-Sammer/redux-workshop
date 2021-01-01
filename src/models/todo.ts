import firebase from 'firebase';
import firebaseutil from '../config/firebase';

export interface TodoType {
  id?: string;
  uid?: string;
  description: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Todo implements TodoType {
  id?: string;
  uid?: string;
  description: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  constructor({
    id,
    uid,
    createdAt,
    updatedAt,
    isDeleted,
    description,
  }: TodoType) {
    this.id = id;
    this.uid = uid;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isDeleted = isDeleted ?? false;
    this.description = description;
  }
  toJSON(): TodoType {
    return Object.assign({}, this);
  }
}

export const messageConverter: firebase.firestore.FirestoreDataConverter<TodoType> = {
  toFirestore: (todo: TodoType): firebase.firestore.DocumentData => {
    return {
      createdAt: todo.createdAt ?? new Date(),
      uid: todo.uid ?? firebaseutil.auth.currentUser?.uid,
      updatedAt: new Date(),
      isDeleted: todo.isDeleted ?? false,
      description: todo.description,
    };
  },
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions,
  ) => {
    const data = snapshot.data(options);
    const { createdAt, updatedAt, isDeleted, description } = data;

    return new Todo({
      id: snapshot.id,
      createdAt,
      updatedAt,
      isDeleted,
      description,
    });
  },
};
