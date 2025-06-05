import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  accounts = [
    {
      iban: 'DE123456789012345678',
      balance: 9999
    },
    {
      iban: 'AT611904300234573201',
      balance: 7900
    }
  ];

  recentTransactions = [
    {
      date: '2025-06-02',
      type: 'CREDIT',
      amount: '2500',
      description: 'Bonus'
    },
    {
      date: '2025-06-06',
      type: 'DEBIT',
      amount: '1900',
      description: 'EMI'
    }
  ];
}
