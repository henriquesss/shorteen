import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { eq, sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/mysql2';
import { urlTable } from '../db/schema';
import { Url } from '../types/url';
import { v4 as uuidv4 } from 'uuid';
import { generateRandomShortCode } from 'src/libs/utils';

const db = drizzle(process.env.DATABASE_URL!);

@Injectable()
export class UrlService {
    async getAllUrls(): Promise<Url[]> { 
        const urls = await db.select().from(urlTable);
        return urls;
    }

    async getActiveUrls(): Promise<Url[]> {
        const urls = await db.select().from(urlTable)
            .where(sql`expire_at > NOW()`);
        return urls;
    }

    async createUrl(payload: { original_url: string }): Promise<Url> {
        const id = uuidv4();
        let shortCode = generateRandomShortCode(payload.original_url, 6);
        let shortUrl = process.env.DOMAIN + "/" + shortCode;
        let isUnique = false;

        while (!isUnique) {
            const existingUrl = await db.select()
                .from(urlTable)
                .where(eq(urlTable.short_url, shortUrl))
                .limit(1);

            if (existingUrl.length === 0) {
                isUnique = true;
            } else {
                shortCode = generateRandomShortCode(payload.original_url, 6);
                shortUrl = process.env.DOMAIN + "/" + shortCode;
            }
        }

        const expireAt = new Date();
        expireAt.setMinutes(expireAt.getMinutes() + Number(process.env.URL_EXPIRATION_MINUTES || 60));

        const newUrl = {
            id,
            original_url: payload.original_url,
            short_url: shortUrl,
            created_at: new Date(),
            expire_at: expireAt,
            access_count: 0
        };

        await db.insert(urlTable).values(newUrl);
        return newUrl;
    }
}
