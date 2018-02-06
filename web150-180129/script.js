//var elements1 = document.getElementsByClassName('hot');
          
          //if (elements1.length > 2) {
              
              //var el1 = elements1[0];
              //el1.className = 'cool';
              
          //}
          
          
        //var elements2 = document.getElementsByTagName('li');
          
          //if (elements2.length > 0) {
              
              //var el2 = elements2[1];
              //el2.className = 'cool';
              
          //}
          
          //var el3 = document.querySelectorAll('li.hot');
          //el3[1].className = 'cool';
          
          var el4 = document.querySelectorAll('li.hot');
          
          if (el4.length > 0) {
              
              for (var i = 0; i < el4.length; i++){
                  el4[i].className = 'cool';
              }
              
          }