FROM curlimages/curl AS builder

WORKDIR /tmp
RUN  curl -L "https://github.com/argoproj/argo-cd/releases/download/v1.8.4/argocd-linux-amd64" -o /tmp/argocd-linux-amd64

FROM alpine

COPY --from=builder /tmp/argocd-linux-amd64 /bin/argocd
RUN  chmod +x /bin/argocd
