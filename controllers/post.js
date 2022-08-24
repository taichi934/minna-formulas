const Post = require('../models/post');

// この形で関数をエクスポートする
// exports.関数名 = (req, res, next) => {
//      処理

//      M2がHTMLを書き上げるまではとりあえずindex.ejsにデータを渡して表示
//      res.render('index', { 渡すデータ });
// };

exports.getAllPosts = (req, res, next) => {
  res.render('index', {});
};
