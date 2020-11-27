import { Component, OnInit, Input } from '@angular/core';
import { Book, ServiceService } from '../app/service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  constructor(private libraryService: ServiceService) { }

  ngOnInit(): void {
  }



}
