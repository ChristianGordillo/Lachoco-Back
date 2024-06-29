import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'giftCards' })
export class GiftCard {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ type: 'int', nullable: true })
  discount: number;

  @Column({ type: 'varchar', nullable: true })
  img: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  code: string;

  @ManyToOne(() => User, (user) => user)
  user: User;

  @ManyToOne(() => Product, (product) => product.giftCards)
  product: Product;

  @Column({ type: 'int', nullable: true })
  cantidad: number;
}
