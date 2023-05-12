
// {
//     "last_id": 2,
//     "recordings_list": [
//         {
//             "confidence": null,
//             "freq": 462.56,
//             "id": 5,
//             "msg_body": "b'\\n[00:00:00.000 --> 00:00:01.540]   ( click )\\n\\n'",
//             "path_to_recording": "/Users/zcgu/sdr_transcriber/data/recordings/F_462.560_20230507-191026.cf32.wav",
//             "team_id": null,
//             "timestamp": "2023-05-07T19:10:26"
//         }
//     ]
// }

export class RecordingView {
    public id: number;
    public timestamp: string;
    public freq: number;
    public msg_body: string;
    public path_to_recording: string;
    public team_id: number;
    public confidence: number;
}

export class RecordingListView {
    public lastid: number;
    public recording_list: Array<RecordingView>;
}