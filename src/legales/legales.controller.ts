import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LegalesService } from './legales.service';
import { Legals } from '../data-base/entities/legales/legals.entity';

@ApiTags('Legales  End-Points')
    @Controller('api/legales')
export class LegalesController {
    constructor(private readonly _legales: LegalesService){

    }

    @Post()
    @ApiResponse({ status: 200, description: 'Succes saving', type: Legals, isArray: true })
    @ApiOperation({ summary: 'Add new Legal document', description: 'Add new Legal document' })
    addNewLegal(
        @Body() body: { type:string, legal:string, description: string  }
    ) {
        return this._legales.addNewLegal(body.type, body.legal,body.description);
    }


    @Get()
    @ApiResponse({ status: 200, description: 'Succes', type: Legals, isArray: true })
    @ApiOperation({ summary: 'get all Legal document', description: 'get all legal document' })
    getAlllegals(){
        return this._legales.getAlllegals();
    }

    @Get('/:type')
    @ApiResponse({ status: 200, description: 'Succes', type: Legals, isArray: true })
    @ApiOperation({ summary: 'get all Legal document', description: 'get all legal document' })
    getByType(@Param('type') type: string) {
        return this._legales.getByType(type);
    }

}
