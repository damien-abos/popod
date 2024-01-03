FROM alpine:3.19.0

ARG POCKETBASE_VERSION=0.20.3
ARG TARGETOS=linux
ARG TARGETARCH=amd64

RUN mkdir -p /pocketbase/{pb_data,pb_hooks,pb_migrations,pb_public} \
    && apk add wget unzip \
    && wget -q https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/pocketbase_${POCKETBASE_VERSION}_${TARGETOS}_${TARGETARCH}.zip \
    && unzip pocketbase_${POCKETBASE_VERSION}_${TARGETOS}_${TARGETARCH}.zip -d /usr/local/bin/

WORKDIR /pocketbase

EXPOSE 8090

ENTRYPOINT [ "pocketbase" ]
CMD [ "serve", "--http", "0.0.0.0:80" ]