import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";

@ObjectType()
@Entity("country")
export default class Country {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  emoji: string;
}

@InputType({ description: "New country data" })
export class CreateCountryInput implements Partial<Country> {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;
}
