define( ["jquery"], function ($) {

	var instruments,
		offset,
		MAX_VELOCITY=127;



    function init(){
        console.log('init ony-ear');
        initMidi();
        
        initInstrument();
        initPlayButton();
        
    }

    function initMidi(){
    	MIDI.setVolume(0, MAX_VELOCITY);
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
    	var $button;
		$button = $('.js-click-play');
		$button.click(function(){
			var note;
			note = $button.find('.js-note').text();
			play(note);
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

    

    return {
        init:init,
    };

});
