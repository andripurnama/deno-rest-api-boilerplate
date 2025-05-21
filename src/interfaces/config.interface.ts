export default interface IConfig{
    env: string;
    appName: string;
    jwtAccessExpiration: number;
    jwtRefreshExpiration: number;
    ip: string;
    host: string;
    port: number;
    protocol: string;
    mongoUrl: string;
    dbName: string;
    seed: boolean;
    clientHost: string;
    clientPort: number;
    clientProtocol: string;
    url: string;
    clientUrl: string;
}