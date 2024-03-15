import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from "@/app/mocks/node";
import '@testing-library/jest-dom';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())