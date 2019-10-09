import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostPage } from '../post/post.page';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  recentPost:any[];
  data: any;
  constructor(private route: ActivatedRoute, private router: Router, public modalController: ModalController) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.type;
        console.log(this.data);
      }
    });
    this.recentPost = [
      {
          "postImage":"post1.PNG",
          "userImg":"",
          "title":"Family League",
          "by":"Xite",
          "description":"The Ultimate Weekend Is Coming - 6 July 2019 I Super Family League",
          "postdate":"03rd March, 2019",
          group:'Xite'
      },
        {
          "postImage":"post2.PNG",
          "userImg":"",
          "title":"Holi",
          "by":"Xite",
          "description":"HOLI CELEBRATIONS - 21st March 2019",
          "postdate":"21st March, 2019",
          group:'Xite'
      },
      {
        "postImage":"post3.PNG",
        "userImg":"",
        "title":"Yash theme",
        "by":"Xite",
        "description":"Yash'19: Office Decor",
        "postdate":"27th January, 2019",
        group:'Xite'
    },
      {
          "postImage":"post4.PNG",
          "userImg":"",
          "title":"Art of Story Telling",
          "by":"Learning & Development",
          "description":"Session on : The Art Of Story Telling",
          "postdate":"18th September, 2019",
          group:'Learning & Development'
      },
      {
          "postImage":"post5.PNG",
          "userImg":"",
          "title":"PRERNA INSIGHTS",
          "by":"Prerna",
          "description":"WATER HEROES  2019",
          "postdate":"24th May, 2019",
            group:'Prerna'
      },
      {
          postImage:'post6.PNG',
          userImg:"",
          title:"we are hiring",
          by:"TMG",
          description:"Bring Your Buddies - \"Program Manager\"",
          postdate:"24th May, 2019",
          group:'TMG'
      }
    ]
  }

  ngOnInit() {
  }
  async presentModal(type) {
    const modal = await this.modalController.create({
      component: PostPage,
      componentProps: {
        'typeUser': type
      }
    });
    return await modal.present();
  }
  likePost(id){

  }
  bookmerkPost(id){

  }
  logout(){
    this.router.navigateByUrl('/login');
  }
}
