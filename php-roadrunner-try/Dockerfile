FROM ghcr.io/roadrunner-server/roadrunner:latest AS roadrunner


FROM php:8.3-cli

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY --from=roadrunner /usr/bin/rr /usr/bin/rr

# see https://github.com/exaco/laravel-octane-dockerfile/blob/main/RoadRunner.Dockerfile
RUN apt-get update
RUN apt-get install -y curl \
        vim \
        unzip
RUN docker-php-ext-install sockets

WORKDIR /app
COPY . .

RUN composer install
RUN ./vendor/bin/rr get-binary

EXPOSE 80

CMD rr serve -c .rr.yaml
