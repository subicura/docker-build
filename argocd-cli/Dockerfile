FROM curlimages/curl AS builder

WORKDIR /tmp
RUN  curl -L "https://github.com/argoproj/argo-cd/releases/download/v2.11.3/argocd-linux-amd64" -o /tmp/argocd-linux-amd64

FROM alpine

COPY --from=builder /tmp/argocd-linux-amd64 /bin/argocd
RUN  chmod +x /bin/argocd
