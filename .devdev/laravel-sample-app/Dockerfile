FROM php:8.2.27-fpm

RUN apt-get update && apt-get install -y \
    libzip-dev \
    libonig-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install zip mbstring

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

# COPY composer.json composer.lock .
# RUN composer install --optimize-autoloader --no-interaction
