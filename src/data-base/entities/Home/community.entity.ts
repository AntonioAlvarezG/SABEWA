import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


@Entity({
})
export class homecommunity {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    communitydId: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    homeCoImg: string;

}
