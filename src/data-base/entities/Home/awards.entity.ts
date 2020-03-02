import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


@Entity({
    database: 'HomePage',
    name: 'homeAwards',
    synchronize: false
})
export class Awards {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    awardId: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeAwAwardTxt: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeAwAwardImg: string;

    

}
