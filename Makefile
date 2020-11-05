.PHONY: install test build release start debug deploy

install:
	yarn

test:
	yarn run lint
	yarn run test

build:
	make install
	yarn run build

start:
	yarn start
