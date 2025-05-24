FROM dunglas/frankenphp AS dev

RUN apt-get update && apt-get install -y unzip curl

# php
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN install-php-extensions pcntl pdo_mysql gd intl zip opcache

COPY . /app

CMD ["php", "artisan", "octane:frankenphp"]


FROM dev AS real

# nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs

RUN composer install
RUN composer buildui

RUN sed -i'' -e 's/^APP_ENV=.*/APP_ENV=production/' -e 's/^APP_DEBUG=.*/APP_DEBUG=false/' .env

CMD ["php", "artisan", "octane:frankenphp"]
