$(document).ready( function(){
    function formatState (state) {
        if (!state.id) {
            return state.text;
          }
        
        var $state = $(
            '<span class="option-line"><span class="date-arrival"></span> <i class="select-dot" /> <span class="date-departure"></span></span>'
        );        

        let arr = state.text.split(" ");
        let arrival = arr[0] + " " + arr[1];
        let departure = arr[2] + " " + arr[3];

        $state.find(".date-arrival").text(arrival);
        $state.find(".date-departure").text(departure);
        
        return $state;
      };

      function formatState2 (state) {
        if (!state.id) {
          return state.text;
        }

        var $state = $(
            '<span class="option-line"><span class="date-arrival"></span> <i class="select-dot" /> <span class="date-departure"></span> </span>'
        );

        let arr = state.text.split(" ");
        let arrival = arr[0] + " " + arr[1];
        let departure = arr[2] + " " + arr[3];        
        
        $state.find(".date-arrival").text(arrival);
        $state.find(".date-departure").text(departure);

        return $state;
      };

    $("#input-date").select2({
        templateSelection: formatState,
        templateResult: formatState2
    });

    $(".form__item-plus").on("click", function(e){
        e.preventDefault()
        alert("Добавить поле")
    });

    $(".form__item-find").on("click", function(e){
        e.preventDefault()
        alert("Найти что-то")
    });

    $(".form__item-input__number").each(  function(){
        let value = $(this).data("min")
        $(this).val(value)
    })

    $(".form__item-btn__more").on("click", function(e){
        e.preventDefault()
        let inputValue = + ( $(this).parent().prev().val() );
        let max = $(this).parent().prev().data('max')

        if( inputValue < max ){            
            $(this).parent().prev().val(  inputValue + 1)

            if( ( + $(this).parent().prev().val() + 1 ) >= max){               
                $(this).removeClass('active')
            }

            if($(this).next().hasClass('active')){
                return
            } else{
                $(this).next().addClass('active')
            }

        } else {
             return false
        }        
    });

    $(".form__item-input__number").on("keypress", function(e){
        validate(e)
    })

    function validate(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    $(".form__item-btn__less").on("click", function(e){
        e.preventDefault()
        let inputValue = + ( $(this).parent().prev().val() );
        let min = $(this).parent().prev().data('min')

        if( inputValue > min ){
            

            $(this).parent().prev().val(  inputValue - 1)

            if( ( + $(this).parent().prev().val() - 1 ) <= min){               
                $(this).removeClass('active')
            }

            if($(this).prev().hasClass('active')){
                return
            } else{
                $(this).prev().addClass('active')
            }

        } else {
             return false
        }
    })

    $('.select2').attr("tabindex","2");
});

