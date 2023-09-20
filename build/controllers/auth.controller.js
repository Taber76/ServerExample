import { prisma } from '../config/prisma.client.js';
import AuthHelper from '../helpers/auth.helper.js';
const AuthController = {
    getInfo: async (req, res) => {
        try {
            if (AuthHelper.checkInfo(req, res)) {
                const example = await prisma.users.findMany();
                if (example !== null && example.length > 0) {
                    res
                        .status(200)
                        .json(example);
                }
                else {
                    res
                        .status(404)
                        .json({ message: 'Example not found' });
                }
            }
            else {
                res
                    .status(401)
                    .json({ message: 'Unauthorized' });
            }
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: 'Internal server error' });
        }
    },
    anotherController: async (req, res) => {
        res
            .status(200)
            .json({ message: 'Another info' });
    }
};
export default AuthController;
//# sourceMappingURL=auth.controller.js.map