import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/Service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService) { }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any =[];
  animationMovieResult: any =[];
  comedyMovieResult: any =[];
  documentaryMovieResult: any =[];
  sciencefictionMovieResult: any =[];
  thrillerMovieResult: any =[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scifiMovie();
    this.thrillerMovie();
    
  }

  //bannerData
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#')
      this.bannerResult = result.results;
    });
  }

  //trendingdata
  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#')
      this.trendingMovieResult = result.results;
    });
  }

  //action
  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'actionMovies#')
      this.actionMovieResult = result.results
    });
  }

  //adventure
  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      console.log(result,'adventureMovies#')
      this.adventureMovieResult = result.results
    });
  }

  //animation
  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'animationMovies#')
      this.animationMovieResult = result.results
    });
  }

  //comedy
  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      console.log(result,'comedyMovies#')
      this.comedyMovieResult = result.results
    });
  }

  //documentary
  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      console.log(result,'actionMovies#')
      this.documentaryMovieResult = result.results
    });
  }

  //scifi
  scifiMovie(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
      console.log(result,'scifiMovies#')
      this.sciencefictionMovieResult = result.results
    });
  }
  //thriller
  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      console.log(result,'thrillerMovies#')
      this.thrillerMovieResult = result.results
    });
  }

  
}
