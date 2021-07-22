# proxy

```
docker run --name squid -d --restart=always \
  --publish 3128:3128 \
  ghcr.io/subicura/squid:1
```

## Test

```
curl --proxy http://localhost:3128 https://ifconfig.co
```
