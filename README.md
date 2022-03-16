## 概要

本レポジトリは、Typescript/React/Redux を使用した、都道府県別の総人口推移グラフを表示する SPA である。

以下の機能を実現する。

- 基本機能

1. RESAS(地域経済分析システム) API の「都道府県一覧」から API を取得する
2. API レスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS API から選択された都道府県の「人口構成」を取得する
4. 人口構成 API レスポンスから、X 軸:年、Y 軸:人口数の折れ線グラフを動的に生成して表示する

## スクリーンショット

- PC の幅での表示
  ![pc](https://github.com/iwakitakuma33/spa_redux_chart_populations/blob/main/readmeAssets/pcDisplay.png?raw=true)
- スマートフォンでの表示
  ![sm](https://github.com/iwakitakuma33/spa_redux_chart_populations/blob/main/readmeAssets/smDisplay.png?raw=true)
- git ブランチ構成
  ![git branches](https://github.com/iwakitakuma33/spa_redux_chart_populations/blob/main/readmeAssets/gitbranches.png?raw=true)

## 動作確認について

本レポジトリはテストコードを Jest で記載している。<br/>
以下の点について google chrome を使用した動作確認も実施した。<br/>

1. レスポンジブ対応
2. 当 SPA の基本機能

## 使用技術

- React
- Redux
- axios
- Typescript
- Node.js
- css in js
- Jest
- Eslint
- Prettier
- nodenv
- Highcharts

## 主要モジュール等バージョン

- node v14.8.0
- react v17.0.2
- redux v4.1.2
- typescript v4.6.2

## セットアップ方法

1. 当レポジトリを clone
   ```bash
   $ git clone https://github.com/iwakitakuma33/spa_redux_chart_populations
   ```
2. ```bash
    cd spa_redux_chart_populations
   ```
3. node のバージョンを合わせる
   ```bash
    $ nodenv local 14.8.0
    $ node -v
      v14.8.0
   ```
4. npm モジュールのインストール
   ```bash
    $ npm install
   ```
5. RESAS API の利用登録(無料)を行い、API Key を発行する。
   ```bash
    URL: https://opendata.resas-portal.go.jp/
   ```
6. .env ファイルを作成後に、取得した API を記載し保存する。(<span style="color: red; ">セキュリティの観点より github 上にはアップロードしていない</span>)
7. 実行
   ```bash
    $ npm start
    ブラウザでlcalhost:3000 にアクセスする。
   ```
8. test 実行
   ```bash
    $ npm test
   ```

## 開発期間

日数: 4 日
時間: 18 時間

## 設計仕様

- コンポーネント分割

1. Main: <span style="color: blue; ">青色の □</span>の部分
1. CheckBoxField: <span style="color: green; ">緑の □</span>の部分
1. Graph: <span style="color: red; ">赤色の □</span>の部分
   ![コンポーネント分割](https://github.com/iwakitakuma33/spa_redux_chart_populations/blob/main/readmeAssets/pcDisplay_Siyou.png?raw=true)

- ステイト管理

1. 使用技術: Redux
2. 3 つの Reducer を使用している。
   2.1 prefectures: API を使用して取得した都道府県コード等を補完<br/>
   2.2 populations: API を使用して取得した特定の都道府県の人口構成データ群<br/>
   2.3 graph: populations を使用して作成した graph データ<br/>
