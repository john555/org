import { Resolver } from "@nestjs/graphql";
import { Product } from "./product.entity";

@Resolver(() => Product)
export class ProductResolver {}