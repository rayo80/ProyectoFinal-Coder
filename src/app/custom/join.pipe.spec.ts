import { JoinPipe } from '../custom/join.pipe';

describe('JoinPipe', () => {
  it('create an instance', () => {
    const pipe = new JoinPipe();
    expect(pipe).toBeTruthy();
  });
});
