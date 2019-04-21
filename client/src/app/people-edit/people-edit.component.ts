import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../shared/people/people.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css']
})
export class PeopleEditComponent implements OnInit, OnDestroy {
  people: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private peopleService: PeopleService,
              private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.peopleService.get(id).subscribe((c: any) => {
          if (c) {
            this.people = c;
            this.people.href = c._links.self.href;
            this.giphyService.get(c.name).subscribe(url => c.giphyUrl = url);
          } else {
            console.log(`Person with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/people-list']);
  }

  save(form: NgForm) {
    this.peopleService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.peopleService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
