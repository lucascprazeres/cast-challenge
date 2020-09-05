import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Category from './Category';

@Entity('courses')
export default class Course {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column('timestamp with time zone')
  from: Date;

  @Column('timestamp with time zone')
  to: Date;

  @Column('integer')
  category_code: number;

  @ManyToOne(() => Category, category => category.code)
  @JoinColumn({ name: 'category_code' })
  category: Category;

  @Column('integer')
  students_per_class: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
