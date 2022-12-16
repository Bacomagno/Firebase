import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdentificationtypeService {
  constructor(private firestore: Firestore) {}

  public getAllIdentificationtype(): Observable<any[]> {
    const listIdentificationType = collection(this.firestore, 'application');
    return collectionData(listIdentificationType, {
      idField: 'identificationtType',
    }) as Observable<any[]>;
  }
}
