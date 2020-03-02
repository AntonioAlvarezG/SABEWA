import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
    database: 'AboutPage',
    name: 'aboutValues',
    synchronize: false
})

export class Values {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    valueID: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    value: string;


}
