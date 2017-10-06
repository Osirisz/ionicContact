import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactDataProvider, Favorite, Contact } from '../../providers/contact-data/contact-data' ;
import { ContactDetailPage } from '../contact-detail/contact-detail' ;
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favorites: Favorite[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public contactData: ContactDataProvider) {
    this.favorites=this.contactData.getFavoriteList();
  }
  showFavorite(contactDetail: Contact){
  	this.navCtrl.push(ContactDetailPage,{contact: contactDetail}) ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

}
