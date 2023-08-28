import { Injectable } from '@angular/core';
import { Profile } from '../models';

const datakey = 'profile-data' as const
@Injectable({
  providedIn:'root',
})

export class ProfileDataServices{
  async getdata(): Promise <Profile | null >{
    return JSON.parse(localStorage)
  }
}


