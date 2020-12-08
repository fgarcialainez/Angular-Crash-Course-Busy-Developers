import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubFollowersService {
  private url = 'https://api.github.com/users/fgarcialainez/followers';
  
  constructor(private http: HttpClient) { 
  }

  getFollowers() {
    return this.http.get(this.url)
  }
}
