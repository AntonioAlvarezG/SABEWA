import { createConnection, Connection } from 'typeorm';
import { Footer } from '../entities/Home/footer.entity';


export const homefooterDataBaseProvider = [
    {
        provide: 'DATABASE_HOME_FOOTER_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'sorteosql.mysql.database.azure.com',
            port: 3306,
            username: 'SA_User_admin@sorteosql',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'HomePage',
            name: 'homefooter',
            entities: [
                __dirname + '/../entities/Home/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];


export const homefooterRepositoriesProviders = [
    {
        provide: 'HOME_FOOTER_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Footer),
        inject: ['DATABASE_HOME_FOOTER_CONNECTION'],
    }
];