import * as React from 'react';
import eyeInputKeyboard from '../../../public/images/eyeInputKeyboard.png'
import nozokimi_man from '../../../public/images/nozokimi_man.png'
import remodameshi from '../../../public/images/remodameshi.png'
import quizVS from '../../../public/images/quizVS.png'
import contactBook from '../../../public/images/contactBook.png'
import librarian from '../../../public/images/librarian.png'
import mimamori from '../../../public/images/mimamori.png'

const workList = [
  {
    title: "ARグラス向け視線入力キーボード",
    abstract: "シームレスな二段階視線入力キーボード",
    motive: "卒業研究",
    purpose: "作業中の文字入力",
    myRole: "全て",
    award: "-",
    path: "sotsuken",
    imgPath: eyeInputKeyboard
  },
  {
    title: "うかがう君",
    abstract: "LINEチャットボットを利用したタスク状況管理システム",
    motive: "BIPROGY DX HACK",
    purpose: "リモートワークにより質問していいタイミングかどうかがわかりづらい",
    myRole: "kintone APIを利用したタスク状況のデータベースへの登録・更新及びデータベースからの取得",
    award: "LINE賞",
    path: "BIPROGYDXHACK",
    imgPath: nozokimi_man
  },
  {
    title: "リモ試し",
    abstract: "AzureCommunicationServiceのビデオチャットを利用した，リモート肝試し",
    motive: "KDGHACKS",
    purpose: "夏休みをワクワク",
    myRole: "React，AzureCommunicationServiceを利用したフロントエンド開発",
    award: "優秀賞（Microsoft賞）",
    path: "KDGHACKS",
    imgPath: remodameshi
  },
  {
    title: "クイズ！VS全視聴者",
    abstract: "LINEチャットボットを利用したタスク状況管理システム",
    motive: "ytvHackathon",
    purpose: "クイズ番組を視聴者参加型にする",
    myRole: "kintone APIを利用したタスク状況のデータベースへの登録・更新及びデータベースからの取得",
    award: "優秀賞，kintone賞，LINE賞",
    path: "ytvHackathon",
    imgPath: quizVS
  },
  {
    title: "連絡帳アプリ",
    abstract: "保育園の連絡帳のWebアプリ",
    motive: "BIPROGY Summer Internship",
    purpose: "保育士と保護者の負担軽減",
    myRole: "保育士用のWebページの開発",
    award: "-",
    path: "BIPROGYSummerIntern",
    imgPath: contactBook
  },
  {
    title: "蔵書アプリ",
    abstract: "蔵書状況の管理アプリ",
    motive: "インゲージ Internship",
    purpose: "サークル内の蔵書の貸し出しを管理",
    myRole: "ありがとうボタンの実装，ランキングページの作成",
    award: "-",
    path: "IngageIntern",
    imgPath: librarian
  },
  {
    title: "安心・見守りアプリ",
    abstract: "子ども・被介護者の迷子を防ぐWebアプリ",
    motive: "SCSK株式会社 テクのこAutumn",
    purpose: "子ども・被介護者の迷子を防ぐため",
    myRole: "フロントエンド開発",
    award: "最優秀賞",
    path: "SCSKHackathon",
    imgPath: mimamori
  }
]

export default workList