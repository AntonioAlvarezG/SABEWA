import { Controller, Post, Body, UseInterceptors, UploadedFile, Get, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AwardsService } from './awards.service';
import { Awards } from '../data-base/entities/awards/awards.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Awards for app')
@Controller('api/premios')
export class AwardsController {
    constructor(private readonly _awards: AwardsService) {

    }

    @Post()
    @ApiResponse({ status: 200, description: 'Succes saving', type: Awards, isArray: true })
    @ApiOperation({ summary: 'Add new awards', description: 'Add new awards' })
    @UseInterceptors(FileInterceptor('file'))
    addNewAward(
        @UploadedFile() file,
        @Body() body: { category: string, catName: string, awardName: string, awardSubName: string, awardPlace: string, description:string   }
    ) {
        return this._awards.addNewAward(body.category, body.catName, body.awardName, body.awardSubName, body.awardPlace, body.description, file);
    }


    @Get()
    @ApiResponse({ status: 200, description: 'Succes saving', type: Awards, isArray: true })
    @ApiOperation({ summary: 'Get all awards', description: 'Get all awards' })
    getAllAwards(){
        return this._awards.getAllAwards();
    }


    @Get('/:category')
    @ApiResponse({ status: 200, description: 'Succes', type: Awards, isArray: true })
    @ApiOperation({ summary: 'get award by category', description: 'get award by category' })
    getByCategory(@Param('category') category: string) {
        return this._awards.getByCategory(category);
    }
}
