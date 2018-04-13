#!/bin/bash
# travis-encrypt -r username/repository GH_TOKEN=[the token you created before]
# travis-encrypt -r openks/learn-vue GH_TOKEN=99***********e
# https://github.com/steveklabnik/automatically_update_github_pages_with_travis_example
# 加密生成 .travis.yml 文件需要配置的 global/secure
set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

rm -rf www
mkdir www
mv dist www
mv styleguide www/dist

cd www/dist

git init
git config user.name "openks"
git config user.email "zhuyangxing@foxmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/openks/learn-vue.git"
git fetch upstream
git reset upstream/gh-pages

# echo "rustbyexample.com" > CNAME

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
