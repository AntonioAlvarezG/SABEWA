import { Module } from '@nestjs/common';
import { identityDataBaseProvider, identityRepositoriesProviders } from './providers/user.provider';
import { homeAnahuacDataBaseProvider, homeAnahuacRepositoriesProviders } from './providers/anahuac.provider';
import { homeAwardsRepositoriesProviders, homeAwardsDataBaseProvider } from './providers/awards.provider';
import { homeCommunityDataBaseProvider, homeCommunityRepositoriesProviders } from './providers/community.provider';
import { homefooterDataBaseProvider, homefooterRepositoriesProviders } from './providers/footer.provider';
import { homeBannersDataBaseProvider, homeBannersRepositoriesProviders } from './providers/homeBanners.provider';
import { aboutValuesDataBaseProvider, aboutValuesRepositoriesProviders } from './providers/about-values.provider';
import { aboutDataBaseProvider, aboutRepositoriesProviders } from './providers/about.provider';
import { galleryRepositoriesProviders, galleryDataBaseProvider } from './providers/gallery.provider';
import { newsDataBaseProvider, newsRepositoriesProviders } from './providers/news.provider';

@Module({
    providers: [...identityDataBaseProvider, ...identityRepositoriesProviders, ...homeAnahuacDataBaseProvider, ...homeAnahuacRepositoriesProviders,
        ...homeAwardsRepositoriesProviders, ...homeAwardsDataBaseProvider, ...homeCommunityDataBaseProvider, ...homeCommunityRepositoriesProviders,
        ...homefooterDataBaseProvider, ...homefooterRepositoriesProviders, ...homeBannersDataBaseProvider, ...homeBannersRepositoriesProviders, 
        ...aboutValuesDataBaseProvider, ...aboutValuesRepositoriesProviders, ...aboutDataBaseProvider, ...aboutRepositoriesProviders, ...galleryRepositoriesProviders, ...galleryDataBaseProvider,
        ...newsRepositoriesProviders, ...newsDataBaseProvider],
    exports: [...identityDataBaseProvider, ...identityRepositoriesProviders, ...homeAnahuacDataBaseProvider, ...homeAnahuacRepositoriesProviders,
        ...homeAwardsRepositoriesProviders, ...homeAwardsDataBaseProvider, ...homeCommunityDataBaseProvider, ...homeCommunityRepositoriesProviders,
        ...homefooterDataBaseProvider, ...homefooterRepositoriesProviders, ...homeBannersDataBaseProvider, ...homeBannersRepositoriesProviders, 
        ...aboutValuesDataBaseProvider, ...aboutValuesRepositoriesProviders, ...aboutDataBaseProvider, ...aboutRepositoriesProviders,...galleryRepositoriesProviders, ...galleryDataBaseProvider,
        ...newsRepositoriesProviders, ...newsDataBaseProvider],
})
export class DataBaseModule {}
