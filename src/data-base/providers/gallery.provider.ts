import { createConnection, Connection } from 'typeorm';
import { Gallery } from '../entities/Gallery/gallery.entity';


export const galleryDataBaseProvider = [
    {
        provide: 'DATABASE_GALLERY_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 8889,
            username: 'SA_User_admin',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'sabedb',
            name: 'galleryConnection',
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