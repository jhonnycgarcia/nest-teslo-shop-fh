import { ApiProperty } from "@nestjs/swagger";
import { 
  IsArray, 
  IsIn, 
  IsInt, 
  IsNotEmpty, 
  IsNumber, 
  IsOptional, 
  IsPositive, 
  IsString, 
  MinLength 
} from "class-validator";

export class CreateProductDto {

    @ApiProperty({
        description: 'Product Title (unique)',
        nullable: false,
        minLength: 1,
        example: 'T-shirt Teslo',
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    title: string;

    @ApiProperty({
        description: 'Product Price',
        nullable: false,
        minimum: 0,
        example: 10.99,
        required: false,
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @ApiProperty({
        description: 'Product Description',
        nullable: true,
        example: 'This is a description of the product',
        required: false,
    })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        description: 'Product Slug',
        nullable: true,
        example: 't_shirt_teslo',
        required: false
    })
    @IsString()
    @IsOptional()
    slug?: string;

    @ApiProperty({
        description: 'Product Stock',
        nullable: true,
        minimum: 0,
        example: 10,
        required: false,
    })
    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @ApiProperty({
        description: 'Product Sizes',
        nullable: false,
        example: ['M', 'L', 'XL', 'XXL'],
    })
    @IsString({ each: true })
    @IsArray()
    sizes: string[];

    @ApiProperty({
        description: 'Product Gender',
        nullable: false,
        example: 'men',
    })
    @IsIn(['men', 'women', 'kid', 'unisex'])
    gender: string;

    @ApiProperty({
        description: 'Product Tags',
        nullable: true,
        example: ['shirt', 'pants', 'hat'],
        required: false,
    })
    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    tags?: string[];

    @ApiProperty({
        description: 'Product Images',
        nullable: true,
        example: ['product_1.jpg', 'product_2.jpg'],
        required: false,
    })
    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    images?: string[];

}
