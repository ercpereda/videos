import {
  it,
  describe,
  expect,
  beforeEach
} from '@angular/core/testing';

import { SummaryPipe } from './summary.pipe';

describe('Summary Pipe', () => {
  let pipe: SummaryPipe;

  beforeEach(() => {
    pipe = new SummaryPipe();
  });

  it('reduce the size of large string and adds ...', () => {
    expect(pipe.transform('very large string of text', '17')).toEqual('very large string...');
  });

  it('leaves short texts unchanged', () => {
    expect(pipe.transform('short string', '17')).toEqual('short string');
  });
});
