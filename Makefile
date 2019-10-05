install:
	npm install


start: 
	npx babel-node src/bin/brain-games.js


publish-dry: 
	npm publish --dry-run


publish:
	npm publish
