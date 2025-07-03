import {IsString, IsEmail, IsNotEmpty, MinLength, Min} from 'class-validator'

export class CreateUserDto {


    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @MinLength(4)
    username: string

    @IsString()
    @IsNotEmpty()
    role:string;

    @IsString()
    @IsNotEmpty()
    status:string;

}