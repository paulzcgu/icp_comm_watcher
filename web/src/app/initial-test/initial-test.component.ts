import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { HdrSubscriberService } from 'src/app/_services/hdr-subscriber.service';
import { RecordingView, RecordingListView } from 'src/app/_models/recording-view.model';

@Component({
  selector: 'app-initial-test',
  templateUrl: './initial-test.component.html',
  styleUrls: ['./initial-test.component.css']
})
export class InitialTestComponent implements OnInit {
  recordingViewList = new Array<RecordingView>();

  constructor(private hdrSubscriberService: HdrSubscriberService) { }

  ngOnInit() {
    this.GetRecordingViewData();
    // for (let i = 0; i < 100; i++) {
    //   const test = new RecordingView();
    //   test.id = i;
    //   test.freq = i;
    //   test.timestamp = (new Date()).toLocaleDateString();
    //   test.filePath = '../assets/test-audio/test-audio.mp3';
    //   test.msg = 'test msg id = ' + i;
    //   this.recordingViewList.push(test);
    // }
  }

  GetRecordingViewData() {
    let lastId = 0;
    if (this.recordingViewList.length > 0) {
      lastId = this.recordingViewList[this.recordingViewList.length - 1].id;
    }
    interval(1000).pipe(
      switchMap(() => this.hdrSubscriberService.GetRecordingViewData(lastId))
    ).subscribe(result => {
      if (result != null) {
        // this.recordingViewList.concat(result);
        this.recordingViewList = result.recording_list;
        console.log(result.recording_list)
      }
    })
  }

  playAudio(filePath: string) {
    alert(filePath);
    const audio = new Audio(filePath);
    audio.load();
    audio.play();
  }
}
