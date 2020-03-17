import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
})

export class Legals {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    legalID: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    type: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    legal: string;

    @Column({ type: 'text'})
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



