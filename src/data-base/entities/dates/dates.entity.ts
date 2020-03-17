import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
})

export class Dates {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @ApiProperty()
    dateID: number;

    @Column()
    @IsNotEmpty()
    @ApiProperty()
    date: string;

    @Column({ type: 'text' })
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



