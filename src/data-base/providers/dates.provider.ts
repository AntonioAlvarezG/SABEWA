import { createConnection, Connection } from 'typeorm';
import { Legals } from '../entities/legales/legals.entity';
import { Dates } from '../entities/dates/dates.entity';


export const dateDataBaseProvider = [
    {
        provide: 'DATABASE_DATE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 8889,
            username: 'SA_User_admin',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'sabedb',
            name: 'datesConnection',
            entities: [
                __dirname + '/../entities/dates/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];


export const datesRepositoriesProviders = [
    {
        provide: 'DATE_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Dates),
        inject: ['DATABASE_DATE_CONNECTION'],
    }
];