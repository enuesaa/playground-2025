FROM dunglas/frankenphp

RUN apt-get update \
    && apt-get install -y unzip curl

# php
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN install-php-extensions pcntl pdo_mysql gd intl zip opcache

COPY . /app

CMD ["php", "artisan", "octane:frankenphp", "--caddyfile", "Caddyfile"]
