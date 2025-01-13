jest.setTimeout(30000); // Set default timeout for tests

import '@testing-library/jest-dom/extend-expect';
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
