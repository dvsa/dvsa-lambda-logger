import { BaseLogger } from '../src';
import { LogLevel } from '../src/logLevels';

console.trace = jest.fn();
console.debug = jest.fn();
console.info = jest.fn();
console.warn = jest.fn();
console.error = jest.fn();

describe('Test logger', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('logger.trace() calls console.trace() with expected parameters', () => {
    process.env.LOG_LEVEL = 'TRACE';
    const testMessage = 'test logger trace message';

    const logger: BaseLogger = new BaseLogger();
    logger.trace(testMessage);

    expect(console.trace).toHaveBeenCalledWith(logger.logFormat, 'TRACE', testMessage);
  });

  test('logger.debug() calls console.debug() with expected parameters', () => {
    process.env.LOG_LEVEL = 'DEBUG';
    const testMessage = 'test logger debug message';

    const logger: BaseLogger = new BaseLogger();
    logger.debug(testMessage);

    expect(console.debug).toHaveBeenCalledWith(logger.logFormat, 'DEBUG', testMessage);
  });

  test('logger.info() calls console.info() with expected parameters', () => {
    process.env.LOG_LEVEL = 'INFO';
    const testMessage = 'test logger info message';

    const logger: BaseLogger = new BaseLogger();
    logger.info(testMessage);

    expect(console.info).toHaveBeenCalledWith(logger.logFormat, 'INFO', testMessage);
  });

  test('logger.warn() calls console.warn() with expected parameters', () => {
    process.env.LOG_LEVEL = 'WARN';
    const testMessage = 'test logger warn message';

    const logger: BaseLogger = new BaseLogger();
    logger.warn(testMessage);

    expect(console.warn).toHaveBeenCalledWith(logger.logFormat, 'WARN', testMessage);
  });

  test('logger.error() calls console.error() with expected parameters', () => {
    process.env.LOG_LEVEL = 'ERROR';
    const testMessage = 'test logger error message';

    const logger: BaseLogger = new BaseLogger();
    logger.error(testMessage);

    expect(console.error).toHaveBeenCalledWith(logger.logFormat, 'ERROR', testMessage);
  });

  test.each([
    ['trace', 1, 1, 1, 1, 1],
    ['debug', 0, 1, 1, 1, 1],
    ['info', 0, 0, 1, 1, 1],
    ['warn', 0, 0, 0, 1, 1],
    ['error', 0, 0, 0, 0, 1],
  ])('logger \'%s\' calls trace %s times, debug %s times, info %s times, warn %s times and error %s times', (logLevel, traceCalledTimes, debugCalledTimes, infoCalledTimes, warnCalledTimes, errorCalledTimes) => {
    process.env.LOG_LEVEL = logLevel.toUpperCase();
    const logger: BaseLogger = new BaseLogger();

    logger.trace('trace');
    logger.debug('debug');
    logger.info('info');
    logger.warn('warn');
    logger.error('error');

    expect(console.trace).toHaveBeenCalledTimes(traceCalledTimes);
    expect(console.debug).toHaveBeenCalledTimes(debugCalledTimes);
    expect(console.info).toHaveBeenCalledTimes(infoCalledTimes);
    expect(console.warn).toHaveBeenCalledTimes(warnCalledTimes);
    expect(console.error).toHaveBeenCalledTimes(errorCalledTimes);

  });

  test('logger defaults to ERROR if no log level set in environment', () => {
    process.env.LOG_LEVEL = null;
    const testMessage = 'test logger';

    const logger: BaseLogger = new BaseLogger();
    logger.error(testMessage);

    expect(logger.logLevel).toEqual(LogLevel.ERROR);
  });
});
