import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
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
    
    @Column({ type: 'timestamp', name: 'created_at' })
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

