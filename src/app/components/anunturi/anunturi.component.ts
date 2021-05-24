import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Anunt } from 'src/app/model/Anunt';
import { AnunturiService } from 'src/app/services/anunturi/anunturi.service';

@Component({
  selector: 'app-anunturi',
  templateUrl: './anunturi.component.html',
  styleUrls: ['./anunturi.component.css']
})
export class AnunturiComponent implements OnInit {

  anunturi: Anunt[] = []
  constructor(private anunturiService: AnunturiService) { }

  ngOnInit(): void {
    this.getAnunturi();
  }

  getAnunturi() {
    this.anunturiService.getAnunturi().subscribe(
      (anunturi: Anunt[]) => {
        this.anunturi = anunturi;
        console.log(anunturi);
        
      },
      (error: HttpErrorResponse) => {
        console.log(error.error.message);
        
      }
    );

  }
}
