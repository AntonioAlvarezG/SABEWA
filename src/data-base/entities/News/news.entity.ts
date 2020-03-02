import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
    database: 'newsPage',
    name: 'news',
    synchronize: false
})

export class News {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    newID: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    newsCatTxt: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    newsImg: string;
    
    @Column()
    @IsNotEmpty()
    @ApiProperty()
    newsDate: Date;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    newsTitle: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    newsDescription: string;

}

