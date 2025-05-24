FROM dunglas/frankenphp AS dev

RUN apt-get update && apt-get install -y unzip curl

# php
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN install-php-extensions pcntl pdo_mysql gd intl zip opcache

# nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs

# app
COPY . /app
RUN composer install
RUN composer buildui

CMD ["php", "artisan", "octane:frankenphp"]



FROM dunglas/frankenphp:static-builder AS builder

WORKDIR /go/src/app/dist/app
COPY --from=dev /app .

RUN sed -i'' -e 's/^APP_ENV=.*/APP_ENV=production/' -e 's/^APP_DEBUG=.*/APP_DEBUG=false/' .env

WORKDIR /go/src/app
RUN EMBED=dist/app/ ./build-static.sh

CMD ["sleep", "1000"]
