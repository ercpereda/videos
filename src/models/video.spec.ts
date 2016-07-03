import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';

import { Video } from './video';

describe('Video Model', () => {
  it('has id', () => {
    let video: Video = {
        id: 'videoid',
        name: 'video name',
        description: 'video description',
        url: '/video/1.mp4',
        ratings: [1, 2, 3, 3],
        rating: 3
      };
    expect(video.id).toEqual('videoid');
  });
});
