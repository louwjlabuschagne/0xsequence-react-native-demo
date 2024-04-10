import { decode, encode } from "base-64";

global.Buffer = require("buffer").Buffer;

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
  protocol: "file:",
};
global.TextEncoder = require("text-encoding").TextEncoder;

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
global.process.version = "v18.0.0";
if (!global.process.version) {
  // eslint-disable-next-line global-require
  global.process = require("process");
}

process.browser = true;
