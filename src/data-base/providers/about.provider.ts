import { createConnection, Connection } from 'typeorm';
import { aboutpage } from '../../data-base/entities/About/about.entity';


export const aboutDataBaseProvider = [
    {
        provide: 'DATABASE_ABOUT_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'sorteosql.mysql.database.azure.com',
            port: 3306,
            username: 'SA_User_admin@sorteosql',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'AboutPage',
            name: 'aboutpage',
            entities: [
                __dirname + '/../entities/About/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];



export const aboutRepositoriesProviders = [
    {
        provide: 'ABOUT_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(aboutpage),
        inject: ['DATABASE_ABOUT_CONNECTION'],
    }
];