import { BaseLogger } from '../src';

describe('Test logger', () => {
  test('todo implementation', () => {
    const logger = new BaseLogger();
    expect(logger).toBeInstanceOf(BaseLogger);
  });
});
