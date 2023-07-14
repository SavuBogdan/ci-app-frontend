export UID=1000
export GID=1000

install: down build up

nl: node-logs

node-logs:
	@docker-compose logs node

build:
	@docker-compose build --pull
	@docker-compose run --rm --no-deps node bash -ci 'yarn install'

up:
	@docker-compose up -d --remove-orphans

down:
	@docker-compose down --remove-orphans

clean: down
	docker system prune -f
	docker volume prune -f
	docker network prune -f

sh-node:
	@docker-compose exec node /bin/sh