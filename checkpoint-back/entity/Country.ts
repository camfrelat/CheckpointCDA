import { Entity, Column, PrimaryColumn } from "typeorm";
import { ObjectType, Field, InputType, ID } from "type-graphql";

@ObjectType()
@Entity("country")
export default class Country {
  @PrimaryColumn({ unique: true })
  @Field(() => ID)
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field({ nullable: true })
  emoji: string;
}

@InputType({ description: "New country data" })
export class CreateCountryInput {
  // @Field()
  // code: string;

  @Field(() => String)
  name: string;

  // @Field({ nullable: true })
  // emoji: string;
}
