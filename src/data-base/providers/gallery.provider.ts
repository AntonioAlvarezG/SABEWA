import { createConnection, Connection } from 'typeorm';
import { Gallery } from '../entities/Gallery/gallery.entity';


export const galleryDataBaseProvider = [
    {
        provide: 'DATABASE_GALLERY_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'sorteosql.mysql.database.azure.com',
            port: 3306,
            username: 'SA_User_admin@sorteosql',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'galleryPage',
            name: 'gallery',
            entities: [
                __dirname + '/../entities/Gallery/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];


export const galleryRepositoriesProviders = [
    {
        provide: 'GALLERY_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Gallery),
        inject: ['DATABASE_GALLERY_CONNECTION'],
    }
];