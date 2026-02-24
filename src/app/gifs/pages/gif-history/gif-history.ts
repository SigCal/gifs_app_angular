import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifService } from '../../services/gifs.service';
import { GifList } from "../../components/gif-list/gif-list";

@Component({
  selector: 'gif-history',
  templateUrl: './gif-history.html',
  imports: [GifList]
})
export default class GifHistory {
    gifService = inject(GifService)

    query = toSignal(
      inject(ActivatedRoute).params.pipe(
        map(params => params['query'])
      )
    );

    gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
