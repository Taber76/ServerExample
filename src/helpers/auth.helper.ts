import { Request, Response } from 'express-serve-static-core';

const AuthHelper = {

  checkInfo: async (req: Request, res: Response): Promise<boolean> => {
    return true;
  },

  anotherHelper: () => {

  }

}

export default AuthHelper