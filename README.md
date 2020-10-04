# Docker Build

공개용 도커 빌드 소스

## 빌드

- Build Directory: 빌드할 서브 디렉토리명 (ex: echo, ...)
- Image Tag: 생성할 이미지 태그 (ex: latest, 1, 2, ...)

## 목록

- [echo](./echo): 접속한 서버 정보를 json으로 리턴 (3000포트)
- [net-tools](./net-tools): net-tools 설치된 ubuntu
- [jenkins](./jenkins): docker + docker-compose 포함된 jenkins

```
docker run --rm -p 3000:3000 ghcr.io/subicura/echo
curl localhost:3000
```
