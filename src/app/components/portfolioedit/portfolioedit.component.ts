import { Component, OnInit } from '@angular/core';
import { faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolioedit',
  templateUrl: './portfolioedit.component.html',
  styleUrls: ['./portfolioedit.component.css']
})
export class PortfolioeditComponent implements OnInit {

  faPlusCircle= faPlusCircle;
  faEdit = faEdit;


  constructor() { }
  ngOnInit(): void {
  }

}
