import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';



@Entity({
})
export class Anahuac {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    anahuacId: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeAnTxt: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeAnIconImg: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeAnNumTxt: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeAnDesTxt: string;

}
