# http echo

특정 텍스트를 리턴하는 웹서버

## 개발환경 설정

```
asdf plugin add golang
asdf install
```

**플러그인 업데이트**

`go.mod` 수정 후 `go mod tidy`

**실행**

```
go run main.go
```

**테스트**

```
go test
```

**package update**

```
go mod tidy
```

## 도커 빌드

```
docker buildx create --use --name build --node build --driver-opt network=host
docker buildx build --platform linux/amd64,linux/arm64/v8 -t http-echo .
```
