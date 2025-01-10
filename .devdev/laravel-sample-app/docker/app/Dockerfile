FROM php:8.2.27-fpm

RUN apt-get update && apt-get install -y \
    libzip-dev \
    libonig-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install zip mbstring pdo_mysql

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# TODO: remove
ENV COMPOSER_ALLOW_SUPERUSER=1

WORKDIR /app
COPY . .
RUN composer install --optimize-autoloader --no-interaction

CMD ["php-fpm"]
