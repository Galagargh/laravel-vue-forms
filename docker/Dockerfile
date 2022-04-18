FROM motocom/nginx-php-fpm:8.1

# load in composer
RUN wget https://getcomposer.org/download/latest-stable/composer.phar \
    && mv composer.phar /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

# install PCOV (code coverage)
RUN install-php-extensions pcov


# ensure we have the latest packages.
RUN apk upgrade --no-cache --update

WORKDIR /var/www
