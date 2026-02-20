import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";

@Component({
  selector: 'app-trending',
  imports: [GifList],
  templateUrl: './trending.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Trending { }
