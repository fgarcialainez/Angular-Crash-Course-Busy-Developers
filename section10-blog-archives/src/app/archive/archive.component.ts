import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number = 0;
  month: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;

    let yearParam = params.get('year');
    let monthParam = params.get('month');

    if(yearParam != null)
      this.year = +yearParam;

    if(monthParam != null)
      this.month = +monthParam;
  }

  viewAll() {
    this.router.navigate(['/']);
  }

}