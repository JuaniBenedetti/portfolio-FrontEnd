import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {

  username: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(): void{
    this.router.navigate([this.username])
  }
}
