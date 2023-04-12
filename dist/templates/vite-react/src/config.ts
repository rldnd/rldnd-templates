const PREFIX = 'VITE_';

const getConfig = (name: string) => {
  const configName = `${PREFIX}${name}`;
  if (configName in import.meta.env) {
    return process.env[configName];
  } else {
    throw Error('잘못된 CONFIG 입니다', { cause: `NOT FOUND ${name} CONFIG` });
  }
};

export default {
  ENV: getConfig('ENV'),
  API_URL: getConfig('API_URL'),
};
