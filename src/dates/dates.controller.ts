import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DatesService } from './dates.service';
import { Legals } from 'src/data-base/entities/legales/legals.entity';


@ApiTags('Legales  End-Points')
@Controller('api/dates')
export class DatesController {
    constructor(private readonly _dates: DatesService) {

    }

    @Post()
    @ApiResponse({ status: 200, description: 'Succes saving', type: Legals, isArray: true })
    @ApiOperation({ summary: 'Post all important Dates', description: 'Post all important Dates' })
    addNewDate(
        @Body() body: { date: string, description: string}
    ) {
        return this._dates.addNewDate(body.date, body.description);
    }


    @Get()
    @ApiResponse({ status: 200, description: 'Succes saving', type: Legals, isArray: true })
    @ApiOperation({ summary: 'Get all important Dates', description: 'Get all important Dates' })
    getAllDates(){
        return this._dates.getAllDates();
    }

}
