declare namespace Express {
    interface Request {
        sessionID: string;
        session: {
            sid: string;
            sess: string;
            expire: Date;
            viewCount: number | undefined;
        }
        isAuthenticated: () => boolean;
        logout: () => void;
    }
}