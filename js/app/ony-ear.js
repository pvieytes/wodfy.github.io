define( ["jquery"], function ($) {

	var instruments,
		offset;



    function init(){
        console.log('init ony-ear');
        initInstrument();
        /*var delay = 0; // play one note every quarter second
        var note = 50; // the MIDI note
        var velocity = 127; // how hard the note hits
        
        // play the note
        MIDI.setVolume(0, 127);
        MIDI.noteOn(0, note, velocity, delay);
        MIDI.noteOff(0, note, delay +0.75);
		*/
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

    return {
        init:init,
    };

});
