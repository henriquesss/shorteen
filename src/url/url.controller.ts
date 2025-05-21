import { Controller, Get, Param } from '@nestjs/common';
import { UrlService } from './url.service';
import { Url } from 'src/types/url';

@Controller('url')
export class UrlController {
    constructor(private readonly appService: UrlService) {}
    
    @Get()
    getUrls(): Promise<Url[]> {
        return this.appService.getAllUrls();
    }

    @Get('active')
    getActiveUrls(): Promise<Url[]> {
        return this.appService.getActiveUrls();
    }
}
