import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { fileFilter } from './helpers/fileFilter.helper';

@Controller('files')
export class FilesController {

  @Post('product')
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: fileFilter
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {

    if(!file){
      throw new BadRequestException('Make sure that the file is an image');
    }

    return {
      fileName: file.originalname,
    };
  }

}
