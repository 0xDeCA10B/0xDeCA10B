# For deployment to an Azure Web Service
# First get permission to push ghcr.io/0xdeca10b, then:
# docker login ghcr.io/0xdeca10b
# docker build --file service.Dockerfile -t ghcr.io/0xdeca10b/public/samples/blockchain-ai/0xdeca10b-demo-prod .
# docker push ghcr.io/0xdeca10b/public/samples/blockchain-ai/0xdeca10b-demo-prod:latest
# The deployment is set up to happen automatically in Azure.

# When NODE_ENV='production'
# Set BACK_END_URL in your environment to the address for the back end service.

FROM appsvc/node:10-lts

LABEL maintainer="Justin D. Harris (https://github.com/juharris)"
LABEL org.label-schema.vendor="0xDeCA10B"
LABEL org.label-schema.url="https://github.com/0xDeCA10B/0xDeCA10B/tree/main/demo"
LABEL org.label-schema.vcs-url="https://github.com/0xDeCA10B/0xDeCA10B/tree/main/demo"

# Already set:
# WORKDIR /home/site/wwwroot

RUN apt-get update && apt-get install --fix-missing --yes build-essential git locales locales-all

COPY client ./client
COPY package.json server.js setup.sh setup_libs.sh yarn.lock ./

# Avoid issues with pulling Git repos during the build.
RUN git config --global url."https://".insteadOf git://
RUN NODE_ENV='production' bash setup.sh

RUN cd client && npx --no-install truffle compile

RUN cd client && GENERATE_SOURCEMAP=false yarn build

ENV ORYX_AI_INSTRUMENTATION_KEY=
