import { BaseLogger } from '../../src';

describe('Test logger', () => {
  test('logger.trace() example', () => {
    const logLevel = 'trace';
    process.env.LOG_LEVEL = logLevel.toUpperCase();
    const testMessage = `test logger ${logLevel} message`;

    const consoleSpy = jest.spyOn(console, logLevel);
    const logger: BaseLogger = new BaseLogger();
    logger.trace(testMessage);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  test('logger.debug() example', () => {
    const logLevel = 'debug';
    process.env.LOG_LEVEL = logLevel.toUpperCase();
    const testMessage = `test logger ${logLevel} message`;

    const consoleSpy = jest.spyOn(console, logLevel);
    const logger: BaseLogger = new BaseLogger();
    logger.debug(testMessage);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  test('logger.info() example', () => {
    const logLevel = 'info';
    process.env.LOG_LEVEL = logLevel.toUpperCase();
    const testMessage = `test logger ${logLevel} message`;

    const consoleSpy = jest.spyOn(console, logLevel);
    const logger: BaseLogger = new BaseLogger();
    logger.info(testMessage);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  test('logger.warn() example', () => {
    const logLevel = 'warn';
    process.env.LOG_LEVEL = logLevel.toUpperCase();
    const testMessage = `test logger ${logLevel} message`;

    const consoleSpy = jest.spyOn(console, logLevel);
    const logger: BaseLogger = new BaseLogger();
    logger.warn(testMessage);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  test('logger.error() example', () => {
    const logLevel = 'error';
    process.env.LOG_LEVEL = logLevel.toUpperCase();
    const testMessage = `test logger ${logLevel} message`;

    const consoleSpy = jest.spyOn(console, logLevel);
    const logger: BaseLogger = new BaseLogger();
    logger.error(testMessage);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
