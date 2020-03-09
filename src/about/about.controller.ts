import { Controller, Post, Body, Get, Put, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AboutService } from './about.service';
import { aboutpage } from '../data-base/entities/About/about.entity';
import { Values } from '../data-base/entities/About/values.entity';
import { FileInterceptor } from '@nestjs/platform-express';



@ApiTags('About Page End-Points')
@Controller('api/about')
export class AboutController {
    constructor(private readonly about: AboutService){
        // constructor
    }



    @Post()
    @ApiResponse({ status: 200, description: 'Succes saving', type: aboutpage, isArray: true })
    @ApiOperation({ summary: 'Add about info', description: 'Add about info the the about page ' })
    @UseInterceptors(FileInterceptor('file'), FileInterceptor('secondfile'))
    addNewAbout(
        @UploadedFile() file,
        @UploadedFile() secondfile,
        @Body() body: {  aboutMiTxt: string, aboutViTxt: string, aboutUsTxt:string }
    ) {
        return this.about.addNewAbout(file, secondfile, body.aboutMiTxt, body.aboutViTxt, body.aboutUsTxt);
    }

    @Get()
    @ApiResponse({ status: 200, type: aboutpage, isArray: true })
    @ApiOperation({ summary: 'Get the about page', description: 'Get the abput page data' })
    getAbout() {
        return this.about.getAbout();
    }

    @Put('/:pageId')
    @ApiResponse({ status: 200, type: aboutpage, isArray: true })
    @ApiOperation({ summary: 'Get the about page', description: 'Get the abput page data' })
    updateAbout(
        @Param('pageId') pageId:string,
        @Body() body: { aboutHeImg: string, aboutUsImg: string, aboutMiTxt: string, aboutViTxt: string, aboutUsTxt: string }
    ){
        return this.about.updateAbout(pageId, body.aboutHeImg, body.aboutUsImg, body.aboutMiTxt, body.aboutViTxt, body.aboutUsTxt);
    }


    // values

    @Post('values')
    @ApiResponse({ status: 200, description: 'Succes saving', type: Values, isArray: true })
    @ApiOperation({ summary: 'Add about info', description: 'Add about info the the about page ' })
    addNewValue(
        @Body() body: { value: string }
    ) {
        return this.about.addNewValue(body.value);
    }

    @Get('values')
    @ApiResponse({ status: 200, type: Values, isArray: true })
    @ApiOperation({ summary: 'Get the about page', description: 'Get the abput page data' })
    getValues() {
        return this.about.getValues();
    }

    @Put('values/:valueID')
    @ApiResponse({ status: 200, type: Values, isArray: true })
    @ApiOperation({ summary: 'Get the about page', description: 'Get the abput page data' })
    updateValues(
        @Param('valueID') valueID: string,
        @Body() body: { value: string}
    ) {
        return this.about.updateValues(valueID, body.value);
    }


}
