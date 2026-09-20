document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('.tab-btn');
  var items = document.querySelectorAll('.research-item');
  if (!tabs.length) return;
  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var kind = btn.dataset.tab;
      items.forEach(function (item) {
        var show = kind === 'All' || item.dataset.kind === kind;
        item.style.display = show ? '' : 'none';
      });
    });
  });
});
