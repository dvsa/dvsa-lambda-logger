import { LogLevel } from './logLevels';

export class BaseLogger {
  logFormat: string;

  logLevel: number;

  constructor(id = 'base-log-id') {
    this.logFormat = `{ "messageId":${id} , "level": "%s" "message": "%s" }`;
    this.logLevel = this.getLogLevel();
  }

  public trace(msg: string): void {
    if (this.logLevel <= LogLevel.TRACE) {
      console.trace(this.logFormat, 'TRACE', msg);
    }
  }

  public debug(msg: string): void {
    if (this.logLevel <= LogLevel.DEBUG) {
      console.debug(this.logFormat, 'DEBUG', msg);
    }
  }

  public info(msg: string): void {
    if (this.logLevel <= LogLevel.INFO) {
      console.info(this.logFormat, 'INFO', msg);
    }
  }

  public warn(msg: string): void {
    if (this.logLevel <= LogLevel.WARN) {
      console.warn(this.logFormat, 'WARN', msg);
    }
  }

  public error(msg: string): void {
    if (this.logLevel <= LogLevel.ERROR) {
      console.error(this.logFormat, 'ERROR', msg);
    }
  }

  public getLogLevel() : number {
    const logLevel = process.env.LOG_LEVEL;
    switch (logLevel) {
      case LogLevel[LogLevel.TRACE]:
        return LogLevel.TRACE;
      case LogLevel[LogLevel.DEBUG]:
        return LogLevel.DEBUG;
      case LogLevel[LogLevel.INFO]:
        return LogLevel.INFO;
      case LogLevel[LogLevel.WARN]:
        return LogLevel.WARN;
      case LogLevel[LogLevel.ERROR]:
      default:
        return LogLevel.ERROR;
    }
  }
}
