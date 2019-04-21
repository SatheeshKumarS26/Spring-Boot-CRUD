import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/people/people.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Array<any>;

  constructor(private peopleService: PeopleService,  private giphyService: GiphyService) { }

  ngOnInit() {
    this.peopleService.getAll().subscribe(data => {
      this.people = data;
      for (const p of this.people) {
        this.giphyService.get(p.name).subscribe(res => p.giphyUrl = res);
      }
    });
  }

}
