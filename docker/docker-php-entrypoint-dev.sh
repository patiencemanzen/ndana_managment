#!/bin/sh
set -e

# run last minute build tools just for local dev
# this file should just be used to override on local dev in a compose file

# run default entrypoint first
/usr/local/bin/docker-php-entrypoint

# ensure bind mount permissions are what we need
chown -R :www-data /var/www

chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# run last minute build tools just for local dev
cd /var/www
composer dump-autoload
cd /var/www/public


exec "$@"
