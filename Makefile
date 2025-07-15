get-version:
	@sed -nE "s/const[[:space:]]+version[[:space:]]*=[[:space:]]*['\"]([0-9]+\.[0-9]+\.[0-9]+)['\"][[:space:]]*;/\1/p" src/routes/+layout.svelte | xargs

bump-patch:
	@scripts/bump-version.sh patch

bump-minor:
	@scripts/bump-version.sh minor

bump-major:
	@scripts/bump-version.sh major

toggle-dev:
	@scripts/toggle-dev.sh

.PHONY: get-version bump-patch bump-minor bump-major toggle-dev

