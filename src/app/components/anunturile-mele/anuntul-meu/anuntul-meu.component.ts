import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Anunt } from 'src/app/model/Anunt';
import { AnunturiService } from 'src/app/services/anunturi/anunturi.service';

@Component({
  selector: 'app-anuntul-meu',
  templateUrl: './anuntul-meu.component.html',
  styleUrls: ['./anuntul-meu.component.css']
})
export class AnuntulMeuComponent implements OnInit {

  anunt: Anunt
  constructor(private activatedRoute: ActivatedRoute, private anuntService: AnunturiService,
    private notifier:NotifierService,private router:Router) { }

  ngOnInit(): void {
    this.getAnunt();
  }

  getAnunt(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.anuntService.getAnunt(id).subscribe(
      (anunt: Anunt) => {
        this.anunt = anunt;
        console.log(anunt);

      },
      (error: HttpErrorResponse) => {
        console.log(error.error.message);

      }
    )
  }

  onDeleteAnunt(): void {
    this.anuntService.deleteAnunt(this.anunt.id).subscribe(
      (httpResponse) => {
        console.log(httpResponse);
        this.notifier.notify("success","Anuntul a fost sters");
        this.router.navigate(['/anunturi']);
      },
      (error:HttpErrorResponse) => {
        this.notifier.notify('error',error.error.message);
      }
    )
  }
}
