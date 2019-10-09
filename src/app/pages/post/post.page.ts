import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  @Input() typeUser: string;
  pageName: any;
  constructor(public modalCtrl: ModalController, public navParams: NavParams) { 
    this.pageName = navParams.get('typeUser');
  }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
