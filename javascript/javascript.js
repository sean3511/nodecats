    //自動加載區域相關功能
    // 1自動加載PC背景
    $(document).ready(function() {
        $('.block_ana').addClass('animate');
    });

    // 複製功能
    // $(document).ready(function() {
    //     $('.copybtn').click(function() {
    //       // 使用原生 JavaScript 或 jQuery 來選擇並複製文字
    //       var textToCopy = document.getElementById('textToCopy').innerText;
    //       navigator.clipboard.writeText(textToCopy).then(function() {
    //         // 複製成功後，使用 jQuery 來顯示 popup_text
    //         $('.popup_text').fadeIn().delay(1500).fadeOut();
    //       }).catch(function(error) {
    //         console.error('複製失敗', error);
    //       });
    //     });
    //   });

    
    document.addEventListener('DOMContentLoaded', function() {
      // 為所有具有 'copybtn' 類的元素添加點擊事件監聽器
      document.querySelectorAll('.copybtn').forEach(function(button) {
          button.addEventListener('click', function() {
              // 獲取要複製的文字
              var textToCopy = document.getElementById('textToCopy').innerText;
  
              // 嘗試複製到剪貼簿
              navigator.clipboard.writeText(textToCopy).then(function() {
                  // 複製成功
                  var popupText = document.querySelector('.popup_text');
                  if (popupText) {
                      // 顯示 popup_text
                      popupText.style.display = 'block';
                      popupText.style.opacity = '1';
  
                      // 淡出效果
                      setTimeout(function() {
                          var fadeEffect = setInterval(function() {
                              if (!popupText.style.opacity) {
                                  popupText.style.opacity = '1';
                              }
                              if (popupText.style.opacity > '0') {
                                  popupText.style.opacity -= '0.1';
                              } else {
                                  clearInterval(fadeEffect);
                                  popupText.style.display = 'none';
                              }
                          }, 100);
                      }, 1500); // 在1.5秒後開始淡出
                  }
              }).catch(function(error) {
                  // 複製失敗的處理
                  console.error('複製失敗', error);
              });
          });
      });
  });
  