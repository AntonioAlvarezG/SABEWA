import { createConnection, Connection } from 'typeorm';
import { Awards } from '../entities/awards/awards.entity';


export const awardsDataBaseProvider = [
    {
        provide: 'DATABASE_AWARDS_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 8889,
            username: 'SA_User_admin',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'sabedb',
            name: 'awardsConnection',
            entities: [
                __dirname + '/../entities/awards/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];


export const awardsRepositoriesProviders = [
    {
        provide: 'AWARD_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Awards),
        inject: ['DATABASE_AWARDS_CONNECTION'],
    }
];