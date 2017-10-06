import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs' ;

export class Contact {
	prefix: string;
  firstname: string ;
  lastname: string ;
	email: string ;
	phone: string ;
}

export class ContactCall {
	firstname: string ;
  lastname: string ;
	phone: string ;
  time: string ;
}

export class Favorite {
  prefix: string;
	firstname: string ;
  lastname: string ;
	phone: string ;
  email: string ;
}
/*
  Generated class for the ContactDateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactDataProvider {

  contactUrl : string = 'http://web.sit.kmutt.ac.th/sanit/int493/' ;

  recentCalls: ContactCall[]=[] ;

  favoriteList: Favorite[]=[];

  constructor(public http: Http) {
    console.log('Initiation Contact Data Provider');
  }

  getContactUrl(): string {
    return this.contactUrl ;
  }

  loadContacts(): Observable<Contact[]>{
	return this.http.get(this.contactUrl+'contacts.php')
  					.map( response => response.json().contacts ) ;
  }

  getRecentCalls(): ContactCall[] {
  	return this.recentCalls ;
  }


  addRecentCall(newCall: ContactCall){
  	//this.recentCalls.push(newCall) ;
    this.recentCalls.splice(0,0,newCall) ;
  }

  getFavoriteList(): Favorite[] {
  	return this.favoriteList ;
  }


  addFavoriteList(fav: Favorite){
    this.favoriteList.push(fav) ;
  }

}
