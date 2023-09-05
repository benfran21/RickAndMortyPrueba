import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  data: any[] = [];
  info: any;
  length: any;
  pageSize: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getCharacter().subscribe((data) => {
      this.data = data.results;
      this.info = data.info;
      this.length = data.info.count;
      this.pageSize = data.info.pages;
      console.log(this.data);
      console.log(this.info);
    });
  }
}