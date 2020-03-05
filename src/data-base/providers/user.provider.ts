import { createConnection, Connection } from 'typeorm';
import { UserEntity } from '../entities/identity/user-entity.entity';


export const identityDataBaseProvider = [
    {
        provide: 'DATABASE_IDENTITY_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'sorteosql.mysql.database.azure.com',
            port: 3306,
            username: 'SA_User_admin@sorteosql',
            password: 'C5&Y8JL<yw+).)PV',
            database: 'Identidad',
            name: 'identityConnection',
            entities: [
                __dirname + '/../entities/identity/*.entity{.ts,.js}',
            ],

            synchronize: false,
        }),
    },
];



export const identityRepositoriesProviders = [
    {
        provide: 'USER_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(UserEntity),
        inject: ['DATABASE_IDENTITY_CONNECTION'],
    }
];