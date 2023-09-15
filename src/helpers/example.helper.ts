import { Request, Response } from 'express-serve-static-core';

export namespace ExampleHelper {

  export function checkInfo(req: Request, res: Response): boolean {
    return true;
  }

}