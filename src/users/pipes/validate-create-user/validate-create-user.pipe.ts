import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    // console.log('Inside ValidateCreateUserPipe');
    // console.log(value);
    // console.log(metadata);

    // const parseAgeToInt = parseInt(value.age.toString());
    // if (isNaN(parseAgeToInt)) {
    //   console.log('is not a number');
    //   throw new HttpException('Invalid Data type for a property age. Expected number', HttpStatus.BAD_REQUEST);
    // } 

    // console.log("is a number")
    return { ...value }

  }
};
