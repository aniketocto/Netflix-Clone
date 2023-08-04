import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MovieApiServiceService } from 'src/app/Service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: MovieApiServiceService) { }

  ngOnInit(): void {
  }

  searchResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm(){
    console.log(this.searchForm.value,'searchForm#');
    this.service.getsearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result,'searchmovies#')
      this.searchResult = result.results;
    });
  }
}
