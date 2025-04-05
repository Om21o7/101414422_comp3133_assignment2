import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logout(): void {
    if (confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('token');
      alert('You have been logged out.');
      this.router.navigate(['/login']);
    }
  }
}
