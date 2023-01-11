const UserExpress = require("../../models/User.model");
type USEREXP = UserExpress;

declare namespace Express {
    interface Request {
        sessionID: string;
        session: {
            passport: {
                user: USEREXP
            };
            sid: string;
            sess: string;
            expire: Date;
            viewCount: number | undefined;
        }
        isAuthenticated: () => boolean;
        logout: () => void;
    }
}