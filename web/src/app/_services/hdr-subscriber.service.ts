import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { RecordingView, RecordingListView } from 'src/app/_models/recording-view.model';

@Injectable()
export class HdrSubscriberService {

  constructor(private http: HttpClient) { }

  GetRecordingViewData(lastId: number) {
    return this.http.get<RecordingListView>(environment.hdrSubscriberApiUrl + 'recordings?lastId=' + lastId);
  }
}
