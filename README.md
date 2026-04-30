# AXOM — The Brown Continent Protocol
## القارة السمراء تنهض

**الموقع الرسمي:** https://axom.africa
**التوكن:** $AXOM
**Blockchain:** Base

### الرؤية
منصة تقنية عالمية لإنهاض شمال أفريقيا والقارة السمراء من خلال:
- تعليم Blockchain و AI
- إشارات AI متقدمة
- Impact DAO لتمويل مشاريع حقيقية
- توكن $AXOM مع Revenue Share حقيقي

### تشغيل المشروع
```bash
cd frontend
npm install
npx prisma generate
npx prisma db push
npm run dev

---

#### **`prisma/schema.prisma`**

```bash
cat > prisma/schema.prisma << 'EOF'
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id               String   @id @default(cuid())
  email            String   @unique
  name             String?
  walletAddress    String?
  isPremium        Boolean  @default(false)
  subscriptionTier String   @default("FREE")
  stakedAmount     Float    @default(0)
  totalEarned      Float    @default(0)
  portfolio        Json?
  watchlist        String[]
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}

model Revenue {
  id        String   @id @default(cuid())
  amount    Float
  source    String
  userId    String?
  createdAt DateTime @default(now())
}

model ImpactProject {
  id          String   @id @default(cuid())
  title       String
  description String
  country     String
  goal        Float
  raised      Float    @default(0)
  isApproved  Boolean  @default(false)
  category    String
  createdAt   DateTime @default(now())
}

model Signal {
  id         String   @id @default(cuid())
  pair       String
  signal     String
  confidence Float
  target     String
  reason     String
  isPremium  Boolean  @default(false)
  createdAt  DateTime @default(now())
}
