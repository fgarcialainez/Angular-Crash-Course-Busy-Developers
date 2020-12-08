import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService) { 
    this.followers = [];
  }

  ngOnInit(): void {
    this.service.getFollowers()
      .subscribe(response => {
        //this.followers = response;
        console.log(response);
        this.followers = response as any[];
      });
  }
}
