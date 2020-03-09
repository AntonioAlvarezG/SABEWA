import { createConnection, Connection } from 'typeorm';
import { homecommunity } from '../entities/Home/community.entity';


export const homeCommunityDataBaseProvider = [
    {
        provide: 'DATABASE_HOME_COMMUNITY_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'sorteosql.mysql.database.azure.com',
            port: 3306,
            username: 'SA_User_admin@sorteosql',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'HomePage',
            name: 'homecommunity',
            entities: [
                __dirname + '/../entities/Home/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];


export const homeCommunityRepositoriesProviders = [
    {
        provide: 'HOME_COMMUNITY_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(homecommunity),
        inject: ['DATABASE_HOME_COMMUNITY_CONNECTION'],
    }
];