FROM node:14-alpine as node

FROM node as builder

WORKDIR /api

COPY package*.json ./

RUN npm ci --only=production

# second stage
FROM node as final

ARG GIT_COMMIT=
ARG BUILD_DATE=
ARG VERSION=
ARG SOURCE=https://github.com/maheswarisubburaj/mern

LABEL com.Maheswari.mern.revision=$GIT_COMMIT
LABEL com.Maheswari.mern.created=$BUILD_DATE
LABEL com.Maheswari.mern.source=$SOURCE
LABEL com.Maheswari.mern.version=$VERSION
LABEL com.Maheswari.mern.vendor="Maheswari"
LABEL com.Maheswari.mern.authors="Maheswari <maheswari.ksubburaj@gmail.com"

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Update the system
RUN apk --no-cache -U upgrade

WORKDIR /home/node/api/

USER node

COPY --chown=node:node --from=builder /api/node_modules ./node_modules

COPY --chown=node:node . .

EXPOSE 4000

CMD [ "node", "server" ]

# docker image build -t name:version .

# docker run -itd \
#   -p 4000:4000 \
#   --name mern \
#   --network backend \
#   mern:v1