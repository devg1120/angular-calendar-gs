
##AngularでLibraryを作る方法

AngularCLIのver6以降からLibraryを作るためのコマンドが追加されました。公式ドキュメントで詳細が書かれていないようですが、Angular CLIを使うことで今まで比較的困難であったAngularのLibraryを簡単に作れるようになりました。

##手順

###1.プロジェクトを作成
まず、普通にAngularアプリを作るのと同じ要領で `ng new` コマンドを使用します。

```terminal
ng new your-app
```

###2.Libraryを作成
`cd your-app`でプロジェクトのルートに移動し、ライブラリを作成します。

```terminal
ng generate library your-library-name
```


ここで `your-app`配下に `projects/your-library`ディレクトリが作られます。このディレクトリがあなたのプロジェクトになります。

<small>※Angular6以降では、`ng new`コマンドで複数のプロジェクトを束ねる単位を作成し、`ng generate library your-lib`コマンドや`ng generate application your-project`コマンドで配下に複数のプロジェクトを作成することができます。
Libraryだけを作りたい場合は`your-app`配下にアプリケーションが無駄に作られてしまうのですが、この辺の適切な運用方法を解説したドキュメントはまだ無いようです。</small>

###3.コンポーネントやディレクティヴを作成(任意)
以下のようなコマンドでライブラリ配下にコンポーネントやディレクティヴ等を作成できます。

```terminal
ng generate component --project=your-library
ng generate directive --project=your-library
```

ディレクティヴやコンポーネントを公開したい場合にはディレクティヴのdeclarationとexport, public_api.tsからexportを忘れずに。

```ts:your-library.module.ts
@NgModule({
  imports: [],
  declarations: [
    YourDirective,   
  ],
  exports: [
    YourDirective,
  ]
})
export class YourLibraryModule {
}

```


```ts:public_api.ts
/*
 * Public API Surface of x-angular-bootstrap
 */
export * from './lib/your-library.module';
export * from './lib/your-directive.directive';

```


###4.ビルド
`your-app`の直下で以下のコマンドでビルドできます。

```terminal
ng build --project=your-library
```

###5.公開
npmを利用する場合

```terminal
cd dist/your-project
npm publish --access=public
```

※npmの利用方法→ [3分でできるnpmモジュール](https://qiita.com/fnobi/items/f6b1574fb9f4518ed520)


###6.注意点
1. 一度公開したプロジェクトを更新した場合、`package.json`のversionを繰り上げる必要があります。npmでは同じバージョンのプロジェクトを二度公開できません。
2. npmのフリーアカウントではプライベートlibraryが作成できないので、`npm publish --access=public` を実行する必要があります。2度目以降の公開では --accessオプションは不要です。
3. 公開したlibraryは `npm install your-library@latest`で最新のバージョンをインストールできます。
4. ライブラリ配下にnpmでパッケージをインストールした場合、あなたのライブラリを利用するプロジェクトの依存関係に影響を与える可能性があります。なのでライブラリ配下でパッケージをインストールする場合、ライブラリ内でパッケージの利用を明示的に許可する必要があります。そのための記述が`ng-package.json`の`whitelistedNonPeerDependencies`オプションです。以下のような記述になります。

