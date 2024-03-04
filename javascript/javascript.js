    //自動加載區域相關功能
    // 1自動加載PC背景
    $(document).ready(function() {
        $('.block_ana').addClass('animate');
    });

    // 複製功能

      $('.copybtn').click(function() {
          // 使用原生 JavaScript 或 jQuery 來選擇並複製文字
          var textToCopy = document.getElementById('textToCopy').innerText;
          navigator.clipboard.writeText(textToCopy).then(function() {
              // 複製成功後，使用 jQuery 來顯示 popup_text
              $('.popup_text').fadeIn().delay(1500).fadeOut();
  
              // 顯示一個警告框通知用戶複製成功
              alert('Copy successful!');
          }).catch(function(error) {
              // 如果複製過程中出現錯誤，則在控制台顯示錯誤信息
              console.error('Copy failed', error);
          });
      });
 
  