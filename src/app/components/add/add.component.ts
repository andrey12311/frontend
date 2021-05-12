import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  countyList: Array<any> = [
    { name: 'Alegeti judetul', cities: ['Alegeti orasul'] },
    { name: 'Alba', cities: ['Alba Iulia', 'Abrud', 'Baia de Aries', 'Campeni', 'Cugir', 'Ocna Mures', 'Teius', 'Zlatna'] },
    { name: 'Arad', cities: ['Arad', 'Pecica', 'Santana', 'Lipova', 'Ineu', 'Chisineu', 'Cris', 'Nadlac', 'Curtici', 'Pancota', 'Sebis'] },
    { name: 'Arges', cities: ['Pitesti', 'Mioveni', 'Campulung', 'Curtea de Arges', 'Stefanesti', 'Costesti', 'Topoloveni'] },
    { name: 'Bacau', cities: ['Bacau', 'Onesti', 'Moinesti', 'Comanesti', 'Buhusi', 'Darmanesti', 'Targu Ocna', 'Slanic-Moldova'] },
    { name: 'Bihor', cities: ['Oradea', 'Salonta', 'Marghita', 'Sacueni', 'Beius', 'Valea lui Mihai', 'Alesd', 'Stei', 'Vascau', 'Nucet'] },
    { name: 'Bistrita-Nasaud', cities: ['Bistrita', 'Beclean', 'Sangeorz Bai', 'Nasaud'] },
    { name: 'Botosani', cities: ['Botosani', 'Dorohoi', 'Darabani', 'Flamanzi', 'Saveni', 'Stefanesti', 'Bucecea'] },
    { name: 'Brasov', cities: ['Brasov', 'Fagaras', 'Sacele', 'Zarnesti', 'Codlea', 'Rasnov', 'Victoria', 'Rupea', 'Ghimbav', 'Predeal'] },
    { name: 'Braila', cities: ['Braila', 'Ianca', 'Insuratei', 'Faurei'] },
    { name: 'Bucuresti-Ilfov', cities: ['Bucuresti', 'Voluntari', 'Pantelimon', 'Buftea', 'Popesti Leordeni', 'Bragadiru', 'Chitila', 'Otopeni', 'Magurele'] },
    { name: 'Buzau', cities: ['Buzau', 'Ramnicu Sarat', 'Nehoiu', 'Patarlagele', 'Pogoanele'] },
    { name: 'Caras Severin', cities: ['Resita', 'Caransebes', 'Bocsa', 'Moldova Noua', 'Oravita', 'Otelu Rosu', 'Anina', 'Baile Herculane'] },
    { name: 'Calarasi', cities: ['Calarasi', 'Oltenita', 'Budesti', 'Fundulea', 'Lehliu-Gara'] },
    { name: 'Cluj', cities: ['Clu Napoca', 'Turda', 'Dej', 'Campia Turzii', 'Gherla', 'Huedin'] },
    { name: 'Constanta', cities: ['Constanta', 'Medgidia', 'Mangalia', 'Navodari', 'Cernavoda', 'Ovidiu', 'Murfatlar', 'Harsova', 'Eforie', 'Techirghiol', 'Baneasa', 'Negr Voda'] },
    { name: 'Covasna', cities: ['Sfantu Gheorghe', 'Targu Secuiesc', 'Covasna', 'Baraolt', 'Intorsura Buzaului'] },
    { name: 'Dambovita', cities: ['Targoviste', 'Moreni', 'Pucioasa', 'Gaesti', 'Titu', 'Fieni', 'Racari'] },
    { name: 'Dolj', cities: ['Craiova', 'Bailesti', 'Calafat', 'Filiasi', 'Dabuleni', 'Segarcea', 'Bechet'] },
    { name: 'Galati', cities: ['Galati', 'Tecuci', 'Targu', 'Bujor', 'Beresti'] },
    { name: 'Giurgiu', cities: ['Giurgiu', 'Bolintin Vale', 'Mihailesti'] },
    { name: 'Gorj', cities: ['Targu Jiu', 'Motru', 'Rovinari', 'Bumbesti Jiu', 'Targ Carbunesti', 'Turceni', 'Tismana', 'Novaci', 'Ticleni'] },
    { name: 'Harghita', cities: ['Miercurea Ciuc', 'Odorheiu Secuiesc', 'Gheorgheni', 'Toplita', 'Cristuru Secuiesc', 'Vlahita', 'Balan', 'Borsec', 'Baile Tusnad'] },
    { name: 'Hunedoara', cities: ['Deva', 'Hunedoara', 'Petrosani', 'Vulcan', 'Lupeni', 'Petrila', 'Orastie', 'Brad', 'Simeria', 'Calan', 'Hateg', 'Uricani', 'Geoagiu', 'Aninoasa'] },
    { name: 'Ialomita', cities: ['Slobozia', 'Fetesti', 'Urziceni', 'Tandarei', 'Amara', 'Fierbinti Targ', 'Cazanesti'] },
    { name: 'Iasi', cities: ['Iasi', 'Pascani', 'Harlau', 'Targu Frumos', 'Podu Iloaiei'] },
    { name: 'Maramures', cities: ['Baia Mare', 'Sighetu Marmatiei', 'Borsa', 'Baia-Sprie', 'Viseu de Sus', 'Targu-Lapus', 'Seini', 'Somcuta Mare', 'Ulmeni', 'Tautii Magheraus', 'Cavnic', 'Salistea de Sus', 'Dragomiresti'] },
    { name: 'Mehedinti', cities: ['Drobeta-Turnu Severin', 'Strehaia', 'Orsova', 'Baia de Arama', 'Vanju Mare'] },
    { name: 'Mures', cities: ['Targu Mures', 'Reghin', 'Sighisoara', 'Tarnaveni', 'Ludus', 'Sovata', 'Iernut', 'Sarmasu', 'Ungheni', 'Miercurea Nirajului', 'Sangeorgiu de Padure'] },
    { name: 'Neamt', cities: ['Piatra Neamt', 'Roman', 'Targu Neamt', 'Roznov', 'Bicaz'] },
    { name: 'Olt', cities: ['Slatina', 'Caracal', 'Bals', 'Corabia', 'Scornicesti', 'Draganesti Olt', 'Piatra Olt', 'Potcoava'] },
    { name: 'Prahova', cities: ['Ploiesti', 'Campina', 'Baicoi', 'Breaza', 'Mizil', 'Comarnic', 'Valenii de Munte', 'Boldesti Scaeni', 'Urlati', 'Sinaia', 'Busteni', 'Plopeni', 'Slanic', 'Azuga'] },
    { name: 'Satu Mare', cities: ['Satu Mare', 'Carei', 'Negresti Oas', 'Tasnad', 'Livada', 'Ardud'] },
    { name: 'Salaj', cities: ['Zalau', 'Simleu Silvaniei', 'Jibou', 'Cehu Silvaniei'] },
    { name: 'Sibiu', cities: ['Sibiu', 'Medias', 'Cisnadie', 'Avrig', 'Agnita', 'Dumbraveni', 'Talmaciu', 'Copsa Mica', 'Saliste', 'Miercurea Sibiului', 'Ocna Sibiului'] },
    { name: 'Suceava', cities: ['Suceava', 'Falticeni', 'Radauti', 'Campulung Moldovenesc', 'Vatra Dornei', 'Vicovu de Sus', 'Gura Humorului', 'Dolhasca', 'Liteni', 'Salcea', 'Siret', 'Cajvana', 'Frasin', 'Brosteni', 'Milisauti', 'Solca'] },
    { name: 'Teleorman', cities: ['Alexandria', 'Rosiorii de Vede', 'Turnu Magurele', 'Zimnicea', 'Videle'] },
    { name: 'Timis', cities: ['Timisoara', 'Lugoj', 'Sannicolau Mare', 'Jimbolia', 'Recas', 'Faget', 'Buzias', 'Deta', 'Gataia', 'Ciacova'] },
    { name: 'Tulcea', cities: ['Tulcea', 'Babadag', 'Macin', 'Isaccea', 'Sulina'] },
    { name: 'Vaslui', cities: ['Vaslui', 'Barlad', 'Husi', 'Negresti', 'Murgeni'] },
    { name: 'Valcea', cities: ['Ramnicu Valcea', 'Dragasani', 'Babeni', 'Calimanesti', 'Horezu', 'Brezoi', 'Balcesti', 'Berbesti', 'Baile Olanesti', 'Ocnele Mari', 'Baile Govora'] },
    { name: 'Vrancea', cities: ['Focsani', 'Adjud', 'Marasesti', 'Odobesti', 'Panciu'] },
  ]

  isLoading: boolean = false;
  cities: Array<any> = [];


  constructor() { }

  ngOnInit(): void {
  } 

  uploadForm = new FormGroup({
    'title':new FormControl(null,Validators.required),
    'county': new FormControl(this.countyList[0],Validators.required),
    'city': new FormControl(this.cities,Validators.required),
    'phoneNumber' : new FormControl(null,Validators.required),
    'description':new FormControl(null,Validators.required)
  });

  onChangeCounty(event) {
     const county = event.target.value;
     console.log(county);
     
    this.cities = this.countyList.find(con => con.name == county).cities;
    console.log(this.cities);
    const ceva = this.countyList.find(con => con.name == 'Vrancea').cities;
    console.log(ceva);
    
    console.log(this.countyList);
    
  }

}
