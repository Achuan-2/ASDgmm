git checkout main
git add .
git commit -m "update"
git push -u origin master
npm run build
git checkout -b gh-pages
git add -f dist
git commit -m 'first commit'
git subtree push --prefix dist origin gh-pages