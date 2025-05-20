import 'dotenv/config';
import { Injectable, Inject } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/mysql2';
import { urlTable } from './db/schema';
import { Url } from './types/url';
import Redis from 'ioredis';

const db = drizzle(process.env.DATABASE_URL!);

@Injectable()
export class AppService {
  constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) {}

  async getHello(): Promise<Url[]> {
    const REDIS_EXPIRE_TIME = 3600; // 1 hour

    const cachedUrls = await this.redis.get('all_urls');
    
    if (cachedUrls) {
      console.log('Getting urls from Redis cache');
      return JSON.parse(cachedUrls);
    }

    const urls = await db.select().from(urlTable);
    
    
    await this.redis.set('all_urls', JSON.stringify(urls), 'EX', REDIS_EXPIRE_TIME);
    
    return urls;
  }
}
