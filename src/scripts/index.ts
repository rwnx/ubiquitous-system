$(document).ready(function() {
  $('#story').wrap('<div class="terminal-container"></div>');
  $('.terminal-container').prepend('<div class="terminal-header">remote uterm@comsat.25922[??](orbital)</div>');
  $('.terminal-container').append('<div class="terminal-footer">CAS query.IR:: signal &lt;CARRIER&gt; for intercept</div>');
});
