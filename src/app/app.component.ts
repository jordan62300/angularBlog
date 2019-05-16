import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  welcome = 'blogAngular';
 

  
  posts = [
    {
     title: 'Mon premier Post',
     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta nostrum, aliquam libero repellat nulla dolore nam sunt perspiciatis eaque et! Similique quis, ipsa tenetur ullam dolorem voluptatum reprehenderit laudantium.',
   } ,
   {
     title: 'Mon deuxieme Post',
     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta nostrum, aliquam libero repellat nulla dolore nam sunt perspiciatis eaque et! Similique quis, ipsa tenetur ullam dolorem voluptatum reprehenderit laudantium.',
   },
   {
     title: 'Mon troisieme Post',
     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta nostrum, aliquam libero repellat nulla dolore nam sunt perspiciatis eaque et! Similique quis, ipsa tenetur ullam dolorem voluptatum reprehenderit laudantium.',
   } ,
 ]

}
