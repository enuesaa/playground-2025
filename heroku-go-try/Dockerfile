FROM heroku/heroku:24-build AS build

USER root

COPY . /app
WORKDIR /app

# Buildpack
RUN mkdir -p /tmp/buildpack/heroku/go /tmp/build_cache /tmp/env
RUN curl https://buildpack-registry.s3.amazonaws.com/buildpacks/heroku/go.tgz | tar xz -C /tmp/buildpack/heroku/go
RUN STACK=heroku-24 /tmp/buildpack/heroku/go/bin/compile /app /tmp/build_cache /tmp/env

# Prepare final, minimal image
FROM heroku/heroku:24

COPY --from=build /app /app
ENV HOME=/app

WORKDIR /app

USER heroku

CMD ["/app/bin/heroku-go-try"]
