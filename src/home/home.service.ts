import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { homebanners } from '../data-base/entities/Home/home-banners.entity';
import { Awards } from '../data-base/entities/Home/awards.entity';
import { Community } from '../data-base/entities/Home/community.entity';
import { Anahuac } from '../data-base/entities/Home/anahuac.entity';
// import { LastBuy } from '../data-base/entities/Home/last-buy.entity';
import { writeFileSync, existsSync, mkdirSync } from 'fs';

@Injectable()
export class HomeService {

    constructor(
        @Inject('HOME_BANNERS_ENTITY_REPOSITORY') private readonly homeBanners: Repository<homebanners>,
        @Inject('HOME_AWARDS_ENTITY_REPOSITORY') private readonly awards: Repository<Awards>,
        @Inject('HOME_COMMUNITY_ENTITY_REPOSITORY') private readonly community: Repository<Community>,
        @Inject('HOME_ANAHUAC_ENTITY_REPOSITORY') private readonly anahuac: Repository<Anahuac>,
        // @Inject('HOME_FOOTER_ENTITY_REPOSITORY') private readonly Footer: Repository<LastBuy>
        
    ){}



    // Add new Banner 

    async addNewBanner(homeHePlaceTxt: string, homeHeAwardTxt: string, homeHeLocateTxt:string,
        file: { buffer: Buffer, size: number, encoding: string, mimetype: string, originalname: string }){
        const fileName = file.originalname;
        const dir = '../uploads/' ;
        this.ensureDirectoryExistance(dir);
        writeFileSync(dir + fileName, file.buffer);
        const banner = this.homeBanners.create();
        banner.homeHeSliderImg = fileName;
        banner.homeHePlaceTxt = homeHePlaceTxt;
        banner.homeHeLocateTxt = homeHeLocateTxt;
        banner.homeHeAwardTxt = homeHeAwardTxt;
        return this.homeBanners.save(banner);
    }

    private ensureDirectoryExistance(dir: string) {
        if (existsSync(dir)) {
            return;
        }
        // mkdirSync(dir, { recursive: true });
    }

    // Get all the banners

    async getBanners(){
        return this.homeBanners.find();
    }


    async updateBanners(bannerId: string, homeHePlaceTxt: string, homeHeLocateTxt: string, homeHeAwardTxt: string,
        file: { buffer: Buffer, size: number, encoding: string, mimetype: string, originalname: string }) {
        const fileName = file.originalname;
        

        const dir = './uploads/';
        this.ensureDirectoryExistance(dir);
        writeFileSync(dir + fileName, file.buffer);
        const banner = await this.homeBanners.findOne(bannerId);
        banner.homeHeSliderImg = fileName;
        banner.homeHePlaceTxt = homeHePlaceTxt;
        banner.homeHeLocateTxt = homeHeLocateTxt;
        banner.homeHeAwardTxt = homeHeAwardTxt;

        return this.homeBanners.save(banner);
    }



    // Add new award ratinf

    async addNewAward(file: { buffer: Buffer, size: number, encoding: string, mimetype: string, originalname: string }, homeAwAwardTxt:string){
        const fileName = file.originalname;
        const dir = './uploads/';
        this.ensureDirectoryExistance(dir);
        writeFileSync(dir + fileName, file.buffer);
        const award = this.awards.create();
        award.homeAwAwardImg = fileName;
        award.homeAwAwardTxt = homeAwAwardTxt;

        return this.awards.save(award);

    }

    // get All awards
    async getAwards(){
        return this.awards.find();
    }


    // update

    async updateNewAward(awardId:string, homeAwAwardImg: string, homeAwAwardTxt: string) {
        const award = await this.awards.findOne(awardId);
        award.homeAwAwardImg = homeAwAwardImg;
        award.homeAwAwardTxt = homeAwAwardTxt;

        return this.awards.save(award);

    }


    // Add the community banner
    async addNewCoBanner(homeCoImg: string){
        const community = this.community.create();
        community.homeCoImg = homeCoImg;
        return this.community.save(community);
    }

    async getCoBanner(){
        return this.community.find();
    }


    async updateCommunity(communitydId:string, homeCoImg: string) {
        const community = await this.community.findOne(communitydId);
        community.homeCoImg = homeCoImg;
        return this.community.save(community);
    }


    async addNewanahuac(homeAnTxt: string, homeAnIconImg: string, homeAnNumTxt: string, homeAnDesTxt:string  ){

        const anahuac = this.anahuac.create();
        anahuac.homeAnTxt = homeAnTxt;
        anahuac.homeAnIconImg = homeAnIconImg;
        anahuac.homeAnNumTxt = homeAnNumTxt;
        anahuac.homeAnDesTxt = homeAnDesTxt;


        return this.anahuac.save(anahuac);
    }


    async getAnahuac() {
        return this.anahuac.find();
    }

    async updateAnahuac( anahuacId:string, homeAnTxt: string, homeAnIconImg: string, homeAnNumTxt: string, homeAnDesTxt: string) {

        const anahuac = await this.anahuac.findOne(anahuacId);
        anahuac.homeAnTxt = homeAnTxt;
        anahuac.homeAnIconImg = homeAnIconImg;
        anahuac.homeAnNumTxt = homeAnNumTxt;
        anahuac.homeAnDesTxt = homeAnDesTxt;


        return this.anahuac.save(anahuac);
    }




    // async addNewFooter(homeBuyImg: string, homeKnTxt: string ){
    //     const footer = this.Footer.create();
    //     footer.homeBuyImg = homeBuyImg;
    //     footer.homeKnTxt = homeKnTxt;

    //     return this.Footer.save(footer);

    // }


    // async getFoter() {
    //     return this.Footer.find();
    // }


    // async updateFooter(footerdId: string, homeBuyImg: string, homeKnTxt: string) {
    //     const footer = await this.Footer.findOne(footerdId);
    //     footer.homeBuyImg = homeBuyImg;
    //     footer.homeKnTxt = homeKnTxt;

    //     return this.Footer.save(footer);

    // }


    












}
