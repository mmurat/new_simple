// The entry file of your WebAssembly module.

import  { Context } from "near-sdk-as";


export function helloWorld(): string {
  const predecessor = Context.predecessor
  return 'hello ' + predecessor
}

