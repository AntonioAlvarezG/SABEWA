import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
})

export class aboutpage {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    pageId: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    aboutHeImg: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    aboutUsImg: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    aboutUsTxt: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    aboutMiTxt: string;


    @Column()
    @IsNotEmpty()
    @ApiProperty()
    aboutViTxt: string;

}
