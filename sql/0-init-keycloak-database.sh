#!/bin/bash

psql -U keycloak -tc "SELECT 1 FROM pg_database WHERE datname = 'keycloak'" \
| grep -q 1 || psql -U keycloak -c "CREATE DATABASE keycloak"

psql -U keycloak -c "CREATE USER keycloak WITH PASSWORD 'password'"