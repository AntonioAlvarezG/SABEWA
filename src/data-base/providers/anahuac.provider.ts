import { createConnection, Connection } from 'typeorm';
import { HomeBanners } from '../entities/Home/home-banners.entity';
import { Anahuac } from '../entities/Home/anahuac.entity';


export const homeAnahuacDataBaseProvider = [
    {
        provide: 'DATABASE_HOME_ANAHUAC_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'sorteosql.mysql.database.azure.com',
            port: 3306,
            username: 'SA_User_admin@sorteosql',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'HomePage',
            name: 'homeAnahuac',
            entities: [
                __dirname + '/../entities/Home/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];


export const homeAnahuacRepositoriesProviders = [
    {
        provide: 'HOME_ANAHUAC_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Anahuac),
        inject: ['DATABASE_HOME_ANAHUAC_CONNECTION'],
    }
];