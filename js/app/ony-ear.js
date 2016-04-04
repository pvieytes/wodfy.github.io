define( ["jquery"], function ($) {

	var instruments,
		offset,
		MAX_VELOCITY=127,
		lowest,
		highest,
		activatedButtonClass = 'btn-success',
		disactivatedButtonClass = 'btn-default';



    function init(){

        console.log('init ony-ear');
        // get medium note
        initMidi();
        initInstrument();
        intiInstrumentRange();
        initPlayButton();
        
    }

    function initMidi(){
    	MIDI.setVolume(0, MAX_VELOCITY);
    	for (key in MIDI.keyToNote){
    		// lowest
    		if (MIDI.keyToNote[key]<lowest || lowest === undefined){
    			lowest = MIDI.keyToNote[key];
    		}
    		// highest
    		if (MIDI.keyToNote[key]>highest || highest === undefined){
    			highest = MIDI.keyToNote[key];
    		}

    	}

    }

    function initInstrument(){
    	// init offset
    	instruments = {
    		'C':0,
    		'Bb': -2,
    		'Eb': 3
    	}

		$instrument = $('.js-instrument-select');
		for (k in instruments){
			$instrument.append('<option>' + k + '</option>');
		}
		offset = 0;
		$('.js-instrument-select').change(function(){
			var sel;
			sel = $(this).find(":selected").text();
			offset = instruments[sel];
		});
    }


    function initPlayButton(){
		$('.js-click-play').each(function(){
			var $button;
			$button = $(this);
			$button.click(function(){
				var note;
				note = $button.find('.js-note').text();
				play(note);
			});
		});

	}

	function play(note){
		var delay = 0, // play one note every quarter second
        	velocity = MAX_VELOCITY; // how hard the note hits

        
        // play the note
        if (typeof note === "string"){
        	note = MIDI.keyToNote[note];
        }
        note = note + offset;
        MIDI.noteOn(0, note, velocity, delay);
        MIDI.noteOff(0, note, delay +0.75);
	}

    function intiInstrumentRange(){
    	var $container,
    		$templateButton,
    		$button;
    	$container = $('.js-instrument-range');
    	$templateButton = $container.find('.js-click-play');//.prop('outerHTML');
    	for (key in MIDI.keyToNote){
    		$button = $templateButton.clone();
    		$button.find('.js-note').html(key);
    		$container.append($button);
    	}
    	$templateButton.remove();
    	 $('.js-click-range').each(function (){
    	 	$(this).click(rangeButtonCliked);
    	 });
    }

    function rangeButtonCliked(){
    	var $button = $(this),
    		key,
    		note;
    	key = $button.find('.js-note').html();
    	note = MIDI.keyToNote[key];
    	toLowest = Math.abs(lowest-note);
    	toHighest = Math.abs(highest-note);
    	enableButton($button);
    	if (toLowest < toHighest){
    		disablePreviousButton($button.prev());
    		enableNextButton($button.next());
    		lowest = note;
    	} else {
			enablePreviousButton($button.prev());
    		disableNextButton($button.next());
    		highest = note;
    	}
    	
    }

    function disableButton($button){
    	$button.removeClass(activatedButtonClass);
    	$button.addClass(disactivatedButtonClass);
    }
    function enableButton($button){
    	$button.addClass(activatedButtonClass);
    	$button.removeClass(disactivatedButtonClass);
    }
	
	function enablePreviousButton($button){
		// if enable -> stop
		if ($button.hasClass(activatedButtonClass) || $button.length == 0){
			return;
		} else {
			enableButton($button);
			$prev = $button.prev();
			if ($prev.length > 0){
				enablePreviousButton($prev);
			}
		}
	}


	function disablePreviousButton($button){
		// if disable -> stop
		if ($button.hasClass(disactivatedButtonClass) || $button.length == 0){
			return;
		} else {
			disableButton($button);
			$prev = $button.prev();
			if ($prev.length > 0){
				disablePreviousButton($prev);
			}
		}
	}
	function disableNextButton($button){
		// if disable -> stop
		if ($button.hasClass(disactivatedButtonClass) || $button.length == 0){
			return;
		} else {
			disableButton($button);
			$next = $button.next();
			if ($next.length > 0){
				disableNextButton($next);
			}
		}
	}
	function enableNextButton($button){
		// if enable -> stop
		if ($button.hasClass(activatedButtonClass) || $button.length == 0){
			return;
		} else {
			enableButton($button);
			$next = $button.next();
			if ($next.length > 0){
				enableNextButton($next);
			}
		}

	}

    return {
        init:init,
    };

});
