import { AsyncPipe, CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Observable } from "rxjs";


@Component({
    selector: 'app-contact',
    imports:[AsyncPipe,CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})

export class ContactComponent {

    cntTitle = 'I from contact page';
    cssArray=['secondary', 'small'];
  cssClass = {
    primary: true,
    big: true,
  };
  numbers = [30, 40, 50, 60, 70, 80];
  getClass(num: number){
    if (num < 50) return 'primary';
    else return 'secondary'
  }
    obsValue = new Observable((observer) => {
        console.log('Observable starts..')
        setTimeout(() => {
            observer.next("9000")
        },1000)
    })
     movies:any=[];

    Refresh() {
    console.log("refresh")
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
      { title: 'Warcraft', director: 'Duncan Jones'},
    ]
  }

   

}