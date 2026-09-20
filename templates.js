// Shared article templates. Each story page loads this file and calls the
// matching render function with its own content object.

function renderPoemArticle(root, data) {
  root.innerHTML =
    '<div class="article-meta">' +
      '<span class="article-date">' + data.date + '</span>' +
      '<span class="tag tag-accent-2">' + data.kind + '</span>' +
    '</div>' +
    '<h1 class="article-title">' + data.title + '</h1>' +
    '<div class="poem-body">' +
      data.stanzas.map(function (stanza) {
        return '<div class="stanza">' + stanza.map(function (line) {
          return '<div>' + line + '</div>';
        }).join('') + '</div>';
      }).join('') +
    '</div>';
}

function renderEssayArticle(root, data) {
  root.innerHTML =
    '<div class="article-meta">' +
      '<span class="article-date">' + data.date + '</span>' +
      '<span class="tag tag-accent-2">' + data.kind + '</span>' +
    '</div>' +
    '<h1 class="article-title">' + data.title + '</h1>' +
    '<div class="essay-body">' +
      data.paragraphs.map(function (p) { return '<p>' + p + '</p>'; }).join('') +
    '</div>' +
    '<div class="essay-closing">' +
      data.closing.map(function (line) { return '<div>' + line + '</div>'; }).join('') +
    '</div>';
}
