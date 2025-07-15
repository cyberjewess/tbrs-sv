get-version:
	@sed -nE "s/const[[:space:]]+version[[:space:]]*=[[:space:]]*['\"]([0-9]+\.[0-9]+\.[0-9]+)['\"][[:space:]]*;/\1/p" src/routes/+layout.svelte | xargs

bump-patch:
	@scripts/bump-version.sh patch

bump-minor:
	@scripts/bump-version.sh minor

bump-major:
	@scripts/bump-version.sh major

toggle-dev:
	@current=$$(grep -E 'const developerMode = (true|false);' src/routes/+layout.svelte | grep -oE '(true|false)'); \
	new=$$(if [ "$$current" = "true" ]; then echo "false"; else echo "true"; fi); \
	echo "🔁 Toggling developerMode: $$current → $$new"; \
	sed -i '' "s/const developerMode = $$current;/const developerMode = $$new;/" src/routes/+layout.svelte

.PHONY: get-version bump-patch bump-minor bump-major toggle-dev

