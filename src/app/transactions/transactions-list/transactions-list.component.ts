import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactions-list',
  standalone: false,
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.scss'
})
export class TransactionsListComponent implements OnInit {

  displayColumns = ['date', 'type', 'amount', 'description'];
  transactions: any[] = [];

  constructor(private transactionsService: TransactionsService) {}
 
  ngOnInit(): void {
    this.transactionsService.getTransactions().subscribe({
      next: (data) => this.transactions = data
    });
  }

}
