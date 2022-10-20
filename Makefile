DBPATH ?= ./db
DBNAME ?= db
DBUSER ?= db
SOCKET ?= /tmp/postgres

.PHONY: db start stop create_db

db:
	initdb -D ${DBPATH} -U ${DBUSER}

start:
	mkdir -p /tmp/postgres
	pg_ctl -o "-k ${SOCKET}" -D ${DBPATH} start

stop:
	pg_ctl -o "-k ${SOCKET}" -D ${DBPATH} stop

create_db:
	echo "CREATE DATABASE ${DBNAME};" | psql -h ${SOCKET} postgres
