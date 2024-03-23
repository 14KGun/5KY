## 5KY - back

1. build

```
docker build -t 5ky-api-app:latest --no-cache .
```

2. run

```
docker run -itd --name 5ky-mongo -p 27018:27017 mongo:latest
```
