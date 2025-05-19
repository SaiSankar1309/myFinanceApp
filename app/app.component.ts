import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h1>My Finance Tracker</h1>
    <input [(ngModel)]="entry.amount" placeholder="Amount" />
    <input [(ngModel)]="entry.note" placeholder="Note" />
    <button (click)="save()">Save</button>

    <h2>All Entries:</h2>
    <ul>
      <li *ngFor = "let item of data">
        {{ item.amount }} - {{ item.note }}
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  entry = { amount: '', note: '' };
  data: any[] = [];

  constructor(private fb: FirebaseService) {}

  ngOnInit() {
    this.fb.getFinanceRecords().subscribe(items => {
      this.data = items;
    });
  }

  save() {
    this.fb.addFinanceRecord(this.entry).then(() => {
      this.entry = { amount: '', note: '' };
    });
  }
}
