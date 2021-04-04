import { OK } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import { logger } from '../config/winston';

export class PingPongController {
  public ping(req: Request, res: Response): Response {
    return res.status(OK).json({
      message: 'pong',
    });
  }

  public pong(req: Request, res: Response): Response {
    return res.status(OK).json({
      message: 'ping',
    });
  }

  public async pingAsync(req: Request, res: Response, next: NextFunction) {
    function asyncFunction() {
      logger.info('in await');
      return new Promise<string>((resolve) => {
        logger.info('new promise');
        setTimeout(() => {
          logger.info('resolve json after delay');
          resolve('hello world');
        }, 1000);
      });
    }

    try {
      const response = await asyncFunction();
      return res.json(response);
    } catch (e) {
      // must catch error and pass it onto next, otherwise will get UnhandledPromiseRejectionWarning
      return next(e);
    }
  }
}
