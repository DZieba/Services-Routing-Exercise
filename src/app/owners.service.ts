import {Owner} from './shared/owner.model';
export class OwnersService {
  private owners:Owner[] = [
    { name: 'Mr Jade', city: 'Katowice'},
    { name: 'Mrs Norris', city: 'Warsaw'},
    { name: 'Mr Pump', city: 'Cracow'},
    { name: 'Mr Glice', city: 'Wroclaw'}
  ];
  getOwners(){
    return this.owners;
  }
  addOwners(owner: Owner){
    this.owners.push(owner);
    console.log(this.owners);
  }
}
