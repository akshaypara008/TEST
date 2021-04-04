import convict from 'convict';
import { url } from 'convict-format-with-validator';

const schema = {
  app: {
    port: {
      doc: 'The port to bind.',
      format: 'port',
      default: 3000,
      env: 'PORT',
    },
  },
  node_env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
};

convict.addFormat(url);

const config = convict(schema).validate({ allowed: 'strict' });

export default config;
