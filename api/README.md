## 5KY - back

1. build

```
docker build -t 5ky-api-app:latest --no-cache .
```

2. run

```
docker run -itd --name 5ky-api-app -p 8081:8080 5ky-api-app:latest
```
