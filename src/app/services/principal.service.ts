import { Injectable } from '@angular/core';
import { principalData } from '../data/PrincipalData';
import { Principal } from '../models/Principal';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private principal: Principal = principalData
  constructor() { }

  getPrincipal(): Principal {
    return this.principal
  }
}
