import { createConnection, Connection } from 'typeorm';
import { Awards } from '../entities/Home/awards.entity';
import { News } from '../entities/News/news.entity';


export const newsDataBaseProvider = [
    {
        provide: 'DATABASE_NEWS_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'sorteosql.mysql.database.azure.com',
            port: 3306,
            username: 'SA_User_admin@sorteosql',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'newsPage',
            name: 'news',
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