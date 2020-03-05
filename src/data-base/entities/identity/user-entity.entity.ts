import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';
import { IsNotEmpty } from 'class-validator';


@Entity(
)
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    @IsNotEmpty()
    userId: number;

    @Column({ type: 'varchar', unique: true })
    @IsNotEmpty()
    username: string;

    @Column({ type: 'varchar', nullable: false })
    @IsNotEmpty()
    email: string;

    
    @Column({ type: 'varchar', nullable: false })
    @IsNotEmpty()
    password: string;

    @Column({ type: 'boolean', default: 1 })
    @IsNotEmpty()
    status: boolean;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    @IsNotEmpty()
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    @IsNotEmpty()
    updateAt: Date;
    
}
