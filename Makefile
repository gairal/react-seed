.PHONY: install test build release start debug deploy

install:
	pnpm i

test:
	pnpm lint
	pnpm test

build:
	make install
	pnpm build

start:
	pnpm start
