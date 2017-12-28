import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  // Declaring an array of interface objects
  myArray: Array<{place: string, continent: string}> = [
    {place:`Stockholm`,continent:`Europe`},
    {place:`Delhi`,continent:`Asia`},
    {place:`New York`,continent:`North America`},
    {place:`Santiago`,continent:`South America`},
    {place:`Sydney`,continent:`Australia`},
    {place:`Johannesburg`,continent:`Africa`},
    {place:`Esperanza Base`,continent:`Antarctica`}
  ];

}
