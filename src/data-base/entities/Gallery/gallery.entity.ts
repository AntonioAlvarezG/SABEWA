import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
})

export class Gallery {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    photoId: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    image: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    category: string;


}

