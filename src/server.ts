import { app } from './app';
import { logger } from './config/winston';
import config from './config';

const port = config.get('app.port');

app.listen(port, () => {
  logger.info(`Auth app listening at http://localhost:${port}`);
});
