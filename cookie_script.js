$(document).ready(function() {
      var checkedBox = $.cookie('checkedBox');
      console.log(checkedBox);
      if(checkedBox !== undefined) {
        // to check only
        //$(checkedBox).attr('checked', true);
        // emulate click to check and change the class
        $(checkedBox).each(function() {
          this.click();
        })
      }

    })

    function changeSoma(data, color) {
      if(data.checked && color == 'red') {
        $(data).parent().parent().addClass("highlight-red");
      }
      else {
        $(data).parent().parent().removeClass("highlight-red");
      }
      if(data.checked && color == 'green') {
        $(data).parent().parent().addClass("highlight-green");
      }
      else {
        $(data).parent().parent().removeClass("highlight-green");
      }
      if(data.checked && color == 'yellow') {
        $(data).parent().parent().addClass("highlight-yellow");
      }
      else {
        $(data).parent().parent().removeClass("highlight-yellow");
      }
      // set cookie
      var checked = "";
      $('input[type="checkbox"]').each(function() {
        if($(this).prop('checked')) {
          checked += "#" + this.id + ","; // #cb, jQuery id selector
        }
      })

      checked = checked.replace(/,$/, '')
      console.log(checked);
      $.cookie('checkedBox', checked);
    }
