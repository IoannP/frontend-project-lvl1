install:
	npm install


start: 
	npx babel-node src/bin/games/brain-games.js

start-even:
	npx babel-node src/bin/games/brain-even.js

start-calc:
	npx babel-node src/bin/games/brain-calc.js

start-gcd:
	npx babel-node src/bin/games/brain-gcd.js

start-prog:
	 npx babel-node src/bin/games/brain-progression.js

publish-dry: 
	npm publish --dry-run


publish:
	npm publish


lint:
	npx eslint .

