# builder
FROM heroku/heroku:24-build AS builder

USER root

WORKDIR /app
COPY . /app

RUN mkdir -p /tmp/buildpackgo \
    && curl https://buildpack-registry.s3.amazonaws.com/buildpacks/heroku/go.tgz | tar xz -C /tmp/buildpackgo
RUN /tmp/buildpackgo/bin/compile /app /tmp/buildcache /tmp/env


# release
FROM heroku/heroku:24

WORKDIR /app
COPY --from=builder /app /app

CMD ["/app/bin/heroku-go-try"]
