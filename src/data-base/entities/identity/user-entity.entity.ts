import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { IsNotEmpty } from 'class-validator';


@Entity({
    database: 'Identity',
    name: 'identityConnection',
    synchronize: false
})
export class UserEntity {
    @PrimaryColumn({ type: 'varchar', length: 100, unique: true })
    @IsNotEmpty()
    userId: string;

    @Column()
    @IsNotEmpty()
    firstName: string;

    @Column()
    @IsNotEmpty()
    email: string;

    
    @Column()
    @IsNotEmpty()
    lasName: string;

    @Column()
    @IsNotEmpty()
    pasword: string;
    
}
