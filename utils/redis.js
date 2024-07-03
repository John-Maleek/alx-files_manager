import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.isConnected = false;
    this.client.on('error', (err) => {
      console.log(err);
      this.isConnected = false;
    });
    this.client.on('connect', () => {
      this.isConnected = true;
    });
  }

  isAlive() {
    return this.isConnected;
  }

  async get(key) {
    let data;
    try {
      data = this.client.get(key);
    } catch (error) {
      console.log(error);
    }
    return data;
  }

  async set(key, value, duration) {
    try {
      this.client.setex(key, duration, value);
    } catch (error) {
      console.log(error);
    }
  }

  async del(key) {
    try {
      this.client.del(key);
    } catch (err) {
      console.log(err);
    }
  }
}

const redisClient = new RedisClient();

export default redisClient;
