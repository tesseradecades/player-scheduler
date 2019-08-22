Dev workflow

1) Make front-end changes
2) From `client` run `npm test` to test front end
3) From `client` run `npm run build` to compile frontend changes and add them to the server's static files

4) Make back-end changes
5) From `server` run `python -m unittest discover test` to test back-end
6) From `server` run `python server.py` to launch server