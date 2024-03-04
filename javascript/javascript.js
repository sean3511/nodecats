    //自動加載區域相關功能
    // 1自動加載PC背景
    $(document).ready(function() {
        $('.block_ana').addClass('animate');
    });

    // 複製功能
    $(document).ready(function() {
        $('.copybtn').click(function() {
          // 使用原生 JavaScript 或 jQuery 來選擇並複製文字
          var textToCopy = document.getElementById('textToCopy').innerText;
          navigator.clipboard.writeText(textToCopy).then(function() {
            // 複製成功後，使用 jQuery 來顯示 popup_text
            $('.popup_text').fadeIn().delay(500).fadeOut();
          }).catch(function(error) {
            console.error('複製失敗', error);
          });
        });
      });