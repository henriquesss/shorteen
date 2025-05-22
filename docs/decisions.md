# Project decisions documentation

## 1. URL short code algorithm
I decided to use this simple algorithm because each url expire after some period, so, when a new url will be shortered, just check if this code is already on the database.

```bash
export function generateRandomShortCode(url:string, length:number = 6):string {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    
    return result;
}
```

