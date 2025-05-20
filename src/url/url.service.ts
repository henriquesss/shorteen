import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlService {
    getHelloo(): String {        
        return 'test';
      }
}
