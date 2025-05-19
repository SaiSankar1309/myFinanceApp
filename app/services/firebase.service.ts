import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) {}

  // Add finance record
  addFinanceRecord(record: any) {
    const financeRef = collection(this.firestore, 'finance');
    return addDoc(financeRef, record);
  }

  // Get all finance records
  getFinanceRecords(): Observable<any[]> {
    const financeRef = collection(this.firestore, 'finance');
    return collectionData(financeRef, { idField: 'id' }) as Observable<any[]>;
  }
}
