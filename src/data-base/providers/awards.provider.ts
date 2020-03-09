import { createConnection, Connection } from 'typeorm';
import { Awards } from '../entities/Home/awards.entity';


export const homeAwardsDataBaseProvider = [
    {
        provide: 'DATABASE_HOME_AWARDS_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'sorteosql.mysql.database.azure.com',
            port: 3306,
            username: 'SA_User_admin@sorteosql',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'HomePage',
            name: 'homeAwards',
            entities: [
                __dirname + '/../entities/Home/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];


export const homeAwardsRepositoriesProviders = [
    {
        provide: 'HOME_AWARDS_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Awards),
        inject: ['DATABASE_HOME_AWARDS_CONNECTION'],
    }
];