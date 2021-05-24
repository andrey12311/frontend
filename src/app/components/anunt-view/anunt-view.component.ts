import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anunt } from 'src/app/model/Anunt';
import { AnunturiService } from 'src/app/services/anunturi/anunturi.service';


@Component({
  selector: 'app-anunt-view',
  templateUrl: './anunt-view.component.html',
  styleUrls: ['./anunt-view.component.css']
})
export class AnuntViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private anuntService: AnunturiService) { }

  anunt: Anunt
  ngOnInit(): void {
    this.getAnunt();
  }

  getAnunt() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.anuntService.getAnunt(id).subscribe(
      (anunt:Anunt)=>{
         this.anunt = anunt;
      },
      (error:HttpErrorResponse) => {
        console.log(error.error.message);
        
      }
    )
  }
}
