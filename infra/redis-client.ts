import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

class RedisClient {
  private static instance: RedisClientType;

  private constructor() {}

  private static async build() {
    RedisClient.instance = createClient();
    await RedisClient.instance.connect();
  }

  public static getInstance(): RedisClientType {
    if (!RedisClient.instance) {
      this.build();
    }

    return RedisClient.instance;
  }
}

export default RedisClient;
