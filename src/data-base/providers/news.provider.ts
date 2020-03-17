import { createConnection, Connection } from 'typeorm';
import { News } from '../entities/News/news.entity';


export const newsDataBaseProvider = [
    {
        provide: 'DATABASE_NEWS_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 8889,
            username: 'SA_User_admin',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'sabedb',
            name: 'newsConnection',
            entities: [
                __dirname + '/../entities/News/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];


export const newsRepositoriesProviders = [
    {
        provide: 'NEWS_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(News),
        inject: ['DATABASE_NEWS_CONNECTION'],
    }
];