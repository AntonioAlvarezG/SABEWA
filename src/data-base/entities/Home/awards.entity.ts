import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


@Entity({
})
export class homeawards {
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
