# charcoalの動作確認につかってるやつ

事前にローカルのcharcoalをビルドしておく

```
cd ./path-to-your-local-charcoal-directory/charcoal
yarn build
```

`yarn link` で soft-link する

```
yarn link ../path-to-your-local-charcoal-directory/charcoal
yarn
yarn dev
```
