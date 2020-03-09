import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param, UseGuards, UseInterceptors, Query, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HomeService } from './home.service';
import { homebanners } from '../data-base/entities/Home/home-banners.entity';
import { homeawards } from '../data-base/entities/Home/awards.entity';
import { homecommunity } from '../data-base/entities/Home/community.entity';
import { homeanahuac } from '../data-base/entities/Home/anahuac.entity';
import { AuthGuard } from '@nestjs/passport';
// import { LastBuy } from '../data-base/entities/Home/last-buy.entity';

@ApiTags('Home Page End-Points')
@Controller('api/home')
export class HomeController {

    constructor(private readonly home: HomeService)
    {}



    @Post()
    @ApiResponse({ status: 200, description: 'Succes saving', type: homebanners, isArray:true })
    @ApiOperation({ summary: 'Add new Banner', description: 'Add a new Banner to the home page' })
    @UseInterceptors(FileInterceptor('file'))
    addNewBanner(
        @UploadedFile() file,
        @Body() body: { homeHePlaceTxt: string, homeHeAwardTxt: string, homeHeLocateTxt:string}
    ){
        return this.home.addNewBanner(body.homeHeAwardTxt, body.homeHeLocateTxt, body.homeHePlaceTxt, file);
    }

    @Get()
    @ApiResponse({ status: 200, type: homebanners, isArray: true })
    @ApiOperation({ summary: 'Get all the banners', description: 'Get all the Banners for the home page slider' })
    getAllBanners(){
        return this.home.getBanners();
    }

    @Put('banner/:bannerId')
    @ApiResponse({ status: 200, description: 'Succes updating', type: homebanners, isArray: true })
    @ApiOperation({ summary: 'update Banners', description: 'update the home page banners' })
    @UseInterceptors(FileInterceptor('file'))
    updateBanners(@Param('bannerId') bannerId: string,
        @UploadedFile() file,
                  @Body() body: { homeHeSliderImg: string, homeHePlaceTxt: string, homeHeAwardTxt: string, homeHeLocateTxt: string } ){
        return this.home.updateBanners(bannerId, body.homeHePlaceTxt, body.homeHeLocateTxt, body.homeHeAwardTxt, file);

    }



    


    // add new award

    @Post('award')
    @ApiResponse({ status: 200, type: homeawards, isArray: true })
    @ApiOperation({ summary: 'Add new clasification award', description: 'add new award ratings ' })
    @UseInterceptors(FileInterceptor('file'))
    addNewAward(@UploadedFile() file,
                @Body() body: { homeAwAwardTxt: string}
    ){
        return this.home.addNewAward(file, body.homeAwAwardTxt);
    }


    // get awards

    @Get('award')
    @ApiResponse({ status: 200, type: homeawards, isArray: true })
    @ApiOperation({summary: 'Get all awards', description: 'Get all awards ratings' })
    getAllAwards(){
        return this.home.getAwards();
    }


    // update award

    @Put('awards/:awardId')
    @ApiResponse({ status: 200, description: 'Succes updating', type: homeawards, isArray: true })
    @ApiOperation({ summary: 'update awards', description: 'update the awards' })
    updateawards(@Param('awardId') awardId: string,
        @Body() body: { homeAwAwardImg: string, homeAwAwardTxt: string}) {
        return this.home.updateNewAward(awardId, body.homeAwAwardImg, body.homeAwAwardTxt);

    }

    // post a community banner
    @Post('community')
    @ApiResponse({ status: 200, type: homecommunity, isArray: true })
    @UseInterceptors(FileInterceptor('file'))
    @ApiOperation({ summary: 'Add Community banner', description: 'Add the community Banner ' })
    addNewCoBanner(
    @UploadedFile() file,
    ) {
        return this.home.addNewCoBanner(file);
    }

    // get a community banner
    @Get('community')
    @ApiResponse({ status: 200, type: homecommunity, isArray: true })
    @ApiOperation({ summary: 'Get the community Banner', description: 'Get the banner of the community section' })
    getCoBanner() {
        return this.home.getCoBanner();
    }

    //update community

    @Put('community/:communitydId')
    @ApiResponse({ status: 200, type: homecommunity, isArray: true })
    @ApiOperation({ summary: 'update the community section', description: 'update the banner of the community section' })
    updateCommunity(@Param('communitydId') communitydId: string,
        @Body() body: { homeCoImg: string}){
        return this.home.updateCommunity(communitydId, body.homeCoImg);
    }

    // post a anahuac section 
    @Post('anahuac')
    @ApiResponse({ status: 200, type: homeanahuac, isArray: true })
    @ApiOperation({ summary: 'Add icons to the anahuac section' })
    @UseInterceptors(FileInterceptor('file'))
    addNewanahuac(
    @UploadedFile() file, 
    @Body() body: { homeAnTxt: string, homeAnIconImg: string, homeAnNumTxt:string,homeAnDesTxt: string}
    ) {
        return this.home.addNewanahuac(file, body.homeAnTxt, body.homeAnNumTxt, body.homeAnDesTxt);
    }

    


    // get the anahuac section
    @Get('anahuac')
    @ApiResponse({ status: 200, type: homeanahuac, isArray: true })
    @UseInterceptors(FileInterceptor('file'))
    @ApiOperation({ summary: 'Get icons to the anahuac section', description: 'Get the icon section of anahuac' })
    getAnahuac() {
        return this.home.getAnahuac();
    }


    @Put('anahuac/:anahuacId')
    @ApiResponse({ status: 200, type: homeanahuac, isArray: true })
    @ApiOperation({ summary: 'update icons to the anahuac section', description: 'update the icon section of anahuac' })
    updateAnahuac(@Param('anahuacId') anahuacId: string,
                  @Body() body: { homeAnTxt: string, homeAnIconImg: string, homeAnNumTxt: string, homeAnDesTxt: string}){
        return this.home.updateAnahuac(anahuacId, body.homeAnTxt, body.homeAnIconImg, body.homeAnNumTxt, body.homeAnDesTxt );
    }


    // post the footer
    // @Post('footer')
    // @ApiResponse({ status: 200, type: Anahuac, isArray: true })
    // @ApiOperation({ summary: 'Post the section before the footer' })
    // addNewFooter(@Body() body: { homeKnTxt: string, homeBuyImg: string}
    // ) {
    //     return this.home.addNewFooter(body.homeKnTxt, body.homeBuyImg);
    // }


   

    // get a footer
    // @Get('footer')
    // @ApiResponse({ status: 200, type: LastBuy, isArray: true })
    // @ApiOperation({ summary: 'Get the section before the footer'})
    // getFoter() {
    //     return this.home.getFoter();
    // }

    // @Put('footer/:footerdId')
    // @ApiResponse({ status: 200, type: Anahuac, isArray: true })
    // @ApiOperation({ summary: 'Post the section before the footer' })
    // updateFooter(@Param('footerdId') footerdId:string, @Body() body: { homeKnTxt: string, homeBuyImg: string }
    // ) {
    //     return this.home.updateFooter(footerdId, body.homeKnTxt, body.homeBuyImg);
    // }



}
