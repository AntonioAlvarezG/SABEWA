import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
    database: 'HomePage',
    name: 'homeBanners',
    synchronize: false
})

export class HomeBanners {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    bannerId: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeHeSliderImg:string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeHePlaceTxt: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeHeAwardTxt: string;


    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeHeLocateTxt: string;
    
}
