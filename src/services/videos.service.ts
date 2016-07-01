
import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';

import { Video } from '../models/video';

import { AuthService } from './auth.service';

@Injectable()
export class VideosService {

    constructor(private http: Http, private authService: AuthService) { }

    getVideos(): Observable<Video[]> {
        let params = new URLSearchParams();
        params.set('sessionId', this.authService.sessionId());

        return this.http
            .get(
            '/videos',
            { search: params })
            .map((res: Response) => res.json())
            .map((res: any) => {
                res.data.forEach((video: any) => video.id = video._id);
                return res.data;
            });
    }

    getVideo(id: string): Observable<Video> {
        let params = new URLSearchParams();
        params.set('sessionId', this.authService.sessionId());
        params.set('videoId', id);

        return this.http
            .get(
            '/video',
            { search: params })
            .map((res: Response) => res.json())
            .map(res => {
                let v = new Video();
                v.id = res.data._id;
                v.name = res.data.name;
                v.description = res.data.description;
                v.url = res.data.url;
                v.ratings = res.data.url;
                return v;
            });
    }

    rate(videoId:string, value: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let params = new URLSearchParams();
        params.set('sessionId', this.authService.sessionId());

        return this.http
        .post(
          '/video/ratings',
          JSON.stringify({ videoId: videoId, rating: value }),
          {headers: headers, search: params}
        )
        .map((res: Response) => res.json());
    }
}
