import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularClass';
  subject='Angular Pipes'
  color1='white';
  color2='gray';
  color3='red'
  show=true;
  title2='Iphone se 2020';
  price=4500;
  arr1=['Rakesh','Rajkumar','Virat','Sunny','Mohit']
  item='bike'
 
  updateColour(){
    this.color1='yellow';
    this.color2='teal';
    this.color3='brown';

  }
  data=[{
    
    name: "Adeel Solangi",
    language: "Sindhi",
    id: "V59OF92YF627HFY0",
    bio: "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
   
  },
  {
    name: "Afzal Ghaffar",
    language: "Sindhi",
    id: "ENTOCR13RSCLZ6KU",
    bio: "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
    
  },
  {
  name: "Adil Eli",
  language: "Uyghur",
  id: "6VTI8X6LL0MMPJCC",
  bio: "Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti.",
  
},
{
  name: "Adile Qadir",
  language: "Uyghur",
  id: "F2KEU5L7EHYSYFTT",
  bio: "Duis commodo orci ut dolor iaculis facilisis. Morbi ultricies consequat ligula posuere eleifend. Aenean finibus in tortor vel aliquet. Fusce eu ultrices elit, vel posuere neque.",
 
},
{
  name: "Abdukerim Ibrahim",
  language: "Uyghur",
  id: "LO6DVTZLRK68528I",
  bio: "Vivamus id faucibus velit, id posuere leo. Nunc aliquet sodales nunc a pulvinar. Nunc aliquet sodales nunc a pulvinar. Ut viverra quis eros eu tincidunt.",
  
}
  ];
}
