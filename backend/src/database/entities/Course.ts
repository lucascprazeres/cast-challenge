import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @Column('integer')
  students_per_class: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
