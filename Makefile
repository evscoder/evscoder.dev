.PHONY: help up down logs dev-build front-dev front-build prod-up prod-down prod-logs test test-e2e shell

help:
	@echo "Development:"
	@echo "  make up           Start development on http://localhost:$${DEV_PORT:-3001}"
	@echo "  make dev-build    Rebuild the development image"
	@echo "  make front-dev    Start development with attached logs"
	@echo "  make down         Stop development containers"
	@echo "  make logs         Follow development logs"
	@echo "  make shell        Open a shell in the development container"
	@echo "  make test         Run unit and component tests in Docker"
	@echo "  make test-e2e     Run Playwright tests on the host"
	@echo ""
	@echo "Production:"
	@echo "  make front-build  Build the production image"
	@echo "  make prod-up      Build and start the production container"
	@echo "  make prod-down    Stop production containers"
	@echo "  make prod-logs    Follow production logs"

up:
	docker compose up -d frontend

dev-build:
	docker compose build frontend

down:
	docker compose down

logs:
	docker compose logs -f frontend

front-dev:
	docker compose up --build frontend

front-build:
	docker compose -f docker-compose.prod.yml build frontend

prod-up:
	docker compose -f docker-compose.prod.yml up --build -d frontend

prod-down:
	docker compose -f docker-compose.prod.yml down

prod-logs:
	docker compose -f docker-compose.prod.yml logs -f frontend

test:
	docker compose run --rm --no-deps frontend npm test

test-e2e:
	npm run test:e2e

shell:
	docker compose run --rm --no-deps frontend sh
