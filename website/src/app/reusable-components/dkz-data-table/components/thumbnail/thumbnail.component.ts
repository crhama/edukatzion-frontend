import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html'
})
export class ThumbnailComponent implements OnInit {
  show = false;
  imageUrl = ''

  @Input() val(url: string){
    if(url){
      this.imageUrl = url;
      this.show = true;
    }
    else {
      this.show = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
