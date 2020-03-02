import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
    database: 'HomePage',
    name: 'homefooter',
    synchronize: false
})
export class Footer {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    footerdId: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeKnTxt: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeBuyImg: string;

}
