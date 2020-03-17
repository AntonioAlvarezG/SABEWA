import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
})

export class Awards {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    awardId: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    category: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    catName: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    awardName: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    awardSubName: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    awardPlace: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    awardImg: string;

    @Column({type:'text'})
    @IsNotEmpty()
    @ApiProperty()
    description: string;


    @ApiProperty()
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;


}



