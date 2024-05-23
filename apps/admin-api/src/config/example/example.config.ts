import { ConfigType, registerAs } from '@nestjs/config';
import { ExampleConfigDto } from './example.dto';
import { validate } from '../config.validator';
import { Inject } from '@nestjs/common';

export const exampleConfig = registerAs('db', () => {
  const config = {
    env: process.env.NODE_ENV,
  };

  validate(ExampleConfigDto, config);

  return config;
});

export type ExampleConfig = ConfigType<typeof exampleConfig>

export const InjectExampleConfig = () => Inject(exampleConfig.KEY)
