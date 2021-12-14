FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --only-production

COPY . .

RUN npm run build

# second stage
FROM nginx:stable-alpine

ARG GIT_COMMIT=
ARG BUILD_DATE=
ARG VERSION=
ARG SOURCE=https://github.com/maheswarisubburaj/mern-web

LABEL com.connectusglobal.mern-web.revision=$GIT_COMMIT
LABEL com.connectusglobal.mern-web.created=$BUILD_DATE
LABEL com.connectusglobal.mern-web.source=$SOURCE
LABEL com.connectusglobal.mern-web.version=$VERSION
LABEL com.connectusglobal.mern-web.vendor="Maheswari"
LABEL com.connectusglobal.mern-web.authors="Maheswari <maheswari.ksubburaj@gmail.com"

# Update the system
RUN apk --no-cache -U upgrade

COPY --from=builder /app/build /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker run -itd \
#   -p 3000:3000 \
#   --name mern-web \
#   --network frontend \
#   mern-web:v1