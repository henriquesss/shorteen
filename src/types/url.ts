export interface Url {
  id?: string;
  original_url: string;
  short_url: string;
  created_at: Date;
  expire_at: Date;
  access_count: Number;
}
