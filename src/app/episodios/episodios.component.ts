import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {
  data: any[] = [];
  info: any;
  length: any;
  pageSize: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getEpisode().subscribe((data) => {
      this.data = data.results;
      this.info = data.info;
      this.length = data.info.count;
      this.pageSize = data.info.pages;
      console.log(this.data);
      console.log(this.info);
    });
  }
}