import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard implements OnInit {

  @Input('trip') trip: any;

  @Output() onDelete = new EventEmitter<string>();

  constructor(private router: Router, private authentication: Authentication) {}

  ngOnInit(): void {
    
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(tripCode: string): void {
    this.onDelete.emit(tripCode);
  }

  public isLoggedIn()
  {
    return this.authentication.isLoggedIn();
  }
}
