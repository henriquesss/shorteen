import { Controller, Get } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
    constructor(private readonly appService: UrlService) {}
    
    @Get()
    getHelloo(): String {
        return this.appService.getHelloo();
    }
}
