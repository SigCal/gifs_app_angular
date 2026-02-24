import { Component, computed, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending',
  imports: [GifList],
  templateUrl: './trending.html'
})
export default class Trending {
  gifService = inject(GifService);
}
