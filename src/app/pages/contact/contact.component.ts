
import { Component } from '@angular/core';



@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

contactBox = [
  {id:0,icon:"icons/Vector.png",address:'102 Street 2714 Donovan',description:'Lorem ipsum dolar site amet discont'},
    {id:1,icon:"icons/Vector(1).png",address:'102 Street 2714 Donovan',description:'Lorem ipsum dolar site amet discont'},
      {id:2,icon:"icons/Vector(2).png",address:'102 Street 2714 Donovan',description:'Lorem ipsum dolar site amet discont'}
]

}
