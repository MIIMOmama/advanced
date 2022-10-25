# advanced

デザインカンプからのコーディング課題上級編


・WordPress化に向けたhtmlサイトの構築
・SCSSディレクトリの構成は、吉本式BEMを採用
・CSSのclassはBEMをもとに命名
・セクションごとにブランチを作成し、レビューを受けて修正したものをマージ





以下
吉本式BEMのmixinルール

mixinルール 1
別Blockで同じスタイルが必要になった場合、mixinを定義する。

吉本式BEM設計（BEM設計ベース）では、見やすいSCSS設計を考慮し、
1つのBlockに対し、必ずそのBlockの対になるSCSSファイルを用意する。

mixinルール 2
1つのmixinに対し、1つの定義ファイルを用意する。

mixinルール 3
mixinの定義ファイル名は、mixin名と同じにする。




$initType: 'normal';
@mixin _btn($type:$initType){

  //共通スタイル

  //サイト共通ボタンのスタイル　1
@if( $type == 'normal' ){
    //スタイル
}

  //サイト共通ボタンのスタイル　2
@else if( $type == 'large' ){
    //スタイル
}

}
