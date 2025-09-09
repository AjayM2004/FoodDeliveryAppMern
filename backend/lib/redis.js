// import Redis from "ioredis";
// import dotenv from "dotenv";

// dotenv.config();

// export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  tls: {},                   // required for Upstash
  maxRetriesPerRequest: null // disables retry limit error
});
