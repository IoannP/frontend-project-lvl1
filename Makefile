install:
	npm install


start: 
	npx babel-node src/bin/games/brain-games.js

start-even:
	npx babel-node src/bin/games/brain-even.js

start-calc:
	npx babel-node src/bin/games/brain-calc.js

publish-dry: 
	npm publish --dry-run


publish:
	npm publish


lint:
	npx eslint .

