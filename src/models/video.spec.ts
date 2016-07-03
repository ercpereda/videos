import {
    it,
    describe,
    expect,
    beforeEach
} from '@angular/core/testing';

import { Video } from './video';

describe('Video Model', () => {
    let video: Video;
    const id = 'videoid';
    const name = 'video name';
    const description = 'video description';
    const url = '/video/1.mp4';
    const ratings = [1, 2, 3, 4];

    beforeEach(() => {
        video = new Video(
            id,
            name,
            description,
            url,
            ratings
        );
    });

    it('has id', () => {
        expect(video.id).toEqual(id);
    });
    it('has name', () => {
        expect(video.name).toEqual(name);
    });
    it('has description', () => {
        expect(video.description).toEqual(description);
    });
    it('has url', () => {
        expect(video.url).toEqual(url);
    });
    it('has ratings', () => {
        expect(video.ratings).toEqual(ratings);
    });
    // it('has rating', () => {
    //   expect(video.rating).toEqual(rating);
    // });
});
