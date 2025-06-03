import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from "./product-image.entity";
import { User } from "src/auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({
    name: 'products'
})
export class Product {

    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Product ID',
        uniqueItems: true,
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'T-shirt Teslo',
        description: 'Product Title',
        uniqueItems: true,
    })
    @Column('text', {
        unique: true,
    })
    title: string;

    @ApiProperty({
        example: 10.99,
        description: 'Product Price',
        default: 0,
    })
    @Column('float', {
        default: 0,
    })
    price: number;

    @ApiProperty({
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        description: 'Product Description',
        default: null,
    })
    @Column({
        type: 'text',
        nullable: true,
    })
    description: string;

    @ApiProperty({
        example: 't_shirt_teslo',
        description: 'Product Slug',
        uniqueItems: true,
    })
    @Column('text', {
        unique: true,
    })
    slug: string;

    @ApiProperty({
        example: 10,
        description: 'Product Stock',
        default: 0,
    })
    @Column('int', {
        default: 0,
    })
    stock: number;

    @ApiProperty({
        example: ['M', 'L', 'XL', 'XXL'],
        description: 'Product Sizes',
    })
    @Column('text', {
        array: true,
    })
    sizes: string[];

    @ApiProperty({
        example: 'men',
        description: 'Product Gender',
        enum: ['men', 'women', 'kid', 'unisex'],
    })
    @Column('text')
    gender: string;

    @ApiProperty({
        example: ['shirt', 'pants', 'hat'],
        description: 'Product Tags',
    })
    @Column('text', {
        array: true,
        default: [],
    })
    tags: string[];

    @ApiProperty({
        example: ['product_1.jpg', 'product_2.jpg'],
        description: 'Product Images',
    })
    @OneToMany(
        () => ProductImage,
        (productImage) => productImage.product,
        { cascade: true, eager: true },
    )
    images?: ProductImage[];

    @ManyToOne(
        () => User,
        (user) => user.product,
        { eager: true },
    )
    user: User;

    @BeforeInsert()
    checkSlugInsert() {
        if(!this.slug) {
            this.slug = this.title
        }
        
        this.slug = this.slug
            .toLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '');
    }

    @BeforeUpdate()
    checkSlugUpdate() {
        this.slug = this.slug
            .toLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '');
    }

}
