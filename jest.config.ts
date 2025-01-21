/** @type {import('ts-jest').JestConfigWithTsJest} **/
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
