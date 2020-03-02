import { createConnection, Connection } from 'typeorm';
import { HomeBanners } from '../entities/Home/home-banners.entity';


export const homeBannersDataBaseProvider = [
    {
        provide: 'DATABASE_HOME_BANNERS_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'sorteosql.mysql.database.azure.com',
            port: 3306,
            username: 'SA_User_admin@sorteosql',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'HomePage',
            name: 'homeBanners',
            entities: [
                __dirname + '/../entities/Home/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];


export const homeBannersRepositoriesProviders = [
    {
        provide: 'HOME_BANNERS_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(HomeBanners),
        inject: ['DATABASE_HOME_BANNERS_CONNECTION'],
    }
];