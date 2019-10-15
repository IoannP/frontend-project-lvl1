install:
	npm install


start: 
	npx babel-node src/bin/brain-games.js

start-even:
	npx babel-node src/bin/brain-even.js

publish-dry: 
	npm publish --dry-run


publish:
	npm publish


lint:
	npx eslint .

