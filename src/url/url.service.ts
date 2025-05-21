import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { gte } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/mysql2';
import { urlTable } from '../db/schema';
import { Url } from '../types/url';

const db = drizzle(process.env.DATABASE_URL!);

@Injectable()
export class UrlService {
    async getAllUrls(): Promise<Url[]> { 
        const urls = await db.select().from(urlTable);

        return urls;
    }

    async getActiveUrls(): Promise<Url[]> {
        const now = new Date();
        const urls = await db.select().from(urlTable).where(gte(urlTable.expire_at, now));
        
        return urls;
    }
}
