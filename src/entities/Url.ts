import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    DeleteDateColumn,
    Generated,
    UpdateDateColumn,
    Index,
} from 'typeorm';


@Entity()
export class Url {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    longUrl: string;

    @Index({ unique: true })
    @Column()
    shortUrl: string;

    @Column()
    expiredAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column()
    lastVisitedAt: Date;

    @Column()
    visitCount: number;

    @Column()
    number: number;

    @Generated('uuid')
    uuid: string;

    @Column()
    isActive: boolean;
}
