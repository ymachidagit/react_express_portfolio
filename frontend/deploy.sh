#!/usr/bin/env sh

# エラー時は停止
set -e

# ビルド
npm run build

# 追加 githubpagesでルーティングを実装するため
cp dist/index.html dist/404.html

# ビルド出力ディレクトリに移動
cd dist

git init
git add -A
git commit -m 'deploy'

# https://<USERNAME>.github.io にデプロイする場合
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

git push -f git@github.com:ymachidagit/react_express_portfolio.git main:gh-pages

cd -