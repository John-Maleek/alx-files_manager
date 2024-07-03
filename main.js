import redisClient from './utils/redis';

(async () => {
  console.log(redisClient.isAlive(), 'isAlive');
  console.log(await redisClient.get('myKey'), 'mykey 1');
  await redisClient.set('myKey', 12, 5);
  console.log(await redisClient.get('myKey'), 'mykey 2');

  setTimeout(async () => {
    console.log(await redisClient.get('myKey'), 'mykey 3');
  }, 1000 * 10);
})();
