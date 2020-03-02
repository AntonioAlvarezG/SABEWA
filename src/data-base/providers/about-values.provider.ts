import { createConnection, Connection } from 'typeorm';
import { Values } from '../../data-base/entities/About/values.entity';


export const aboutValuesDataBaseProvider = [
    {
        provide: 'DATABASE_ABOUT_VALUES_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'sorteosql.mysql.database.azure.com',
            port: 3306,
            username: 'SA_User_admin@sorteosql',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'AboutPage',
            name: 'aboutValues',
            entities: [
                __dirname + '/../entities/About/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];



export const aboutValuesRepositoriesProviders = [
    {
        provide: 'ABOUT_VALUES_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Values),
        inject: ['DATABASE_ABOUT_VALUES_CONNECTION'],
    }
];