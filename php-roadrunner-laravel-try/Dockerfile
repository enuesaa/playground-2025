FROM ghcr.io/roadrunner-server/roadrunner:latest AS roadrunner


FROM php:8.3-cli

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY --from=roadrunner /usr/bin/rr /usr/bin/rr

RUN apt-get update && apt-get install -y \
    libzip-dev \
    libonig-dev \
    zip \
    unzip \
    git \
    curl
RUN docker-php-ext-install sockets zip mbstring pdo_mysql pcntl

WORKDIR /app
COPY . .

RUN composer install --optimize-autoloader --no-interaction

EXPOSE 80

CMD composer run rr-start
