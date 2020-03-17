import { createConnection, Connection } from 'typeorm';
import { Legals } from '../entities/legales/legals.entity';


export const legalsDataBaseProvider = [
    {
        provide: 'DATABASE_LEGALS_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 8889,
            username: 'SA_User_admin',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'sabedb',
            name: 'legalesConnection',
            entities: [
                __dirname + '/../entities/legales/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];


export const legalsRepositoriesProviders = [
    {
        provide: 'LEGALS_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Legals),
        inject: ['DATABASE_LEGALS_CONNECTION'],
    }
];