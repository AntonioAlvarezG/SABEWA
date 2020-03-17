import { Module } from '@nestjs/common';
import { identityDataBaseProvider, identityRepositoriesProviders } from './providers/user.provider';
import { galleryRepositoriesProviders, galleryDataBaseProvider } from './providers/gallery.provider';
import { newsDataBaseProvider, newsRepositoriesProviders } from './providers/news.provider';
import { legalsDataBaseProvider, legalsRepositoriesProviders } from './providers/legals.provider';
import { dateDataBaseProvider } from './providers/dates.provider';
import { datesRepositoriesProviders } from './providers/dates.provider';
import { awardsDataBaseProvider, awardsRepositoriesProviders } from './providers/awards.provider';

@Module({
    providers: [...identityDataBaseProvider, ...identityRepositoriesProviders, ...galleryRepositoriesProviders, ...galleryDataBaseProvider,
        ...newsRepositoriesProviders, ...newsDataBaseProvider, ...legalsDataBaseProvider, ...legalsRepositoriesProviders, ...dateDataBaseProvider, ...datesRepositoriesProviders,
        ...awardsDataBaseProvider, ...awardsRepositoriesProviders  ],
    exports: [...identityDataBaseProvider, ...identityRepositoriesProviders, ...galleryRepositoriesProviders, ...galleryDataBaseProvider,
        ...newsRepositoriesProviders, ...newsDataBaseProvider, ...legalsDataBaseProvider, ...legalsRepositoriesProviders, ...dateDataBaseProvider, ...datesRepositoriesProviders,
        ...awardsDataBaseProvider, ...awardsRepositoriesProviders ],
})
export class DataBaseModule {}
