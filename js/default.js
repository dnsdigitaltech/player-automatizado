$(function() {
    // Definir playlist
    var playlist = [{
        artist: 'Daft Punk',
        title: 'Beethoven',
        album: 'Human After All',
        mp3: 'songs/beethoven.mp3'
    }, {
        artist: 'Daft Punk',
        title: 'Fur Elise',
        album: 'All',
        mp3: 'songs/fur-elise.mp3'
    }, {
        artist: 'Daft Punk',
        title: 'Moonlight',
        album: 'After',
        mp3: 'songs/moonlight.mp3'
    }];

    var currentTrack = 0;
    var numTracks = 0;
    var player = $(".player").jPlayer({
        ready: function () {
            console.log(playlist)
            // configura a faixa inicial do jPlayer
            player.jPlayer("setMedia", playlist[currentTrack])
    
            // reproduzir a faixa atual. Se não quiser que o player comece a tocar  automaticamente
                // retirar esta linha
            player.playCurrent();
        },
        ended: function() {
            // quando terminar de tocar uma música, ir para a próxima
            player.playNext();
        },
        play: function(){
            // quando começar a tocar, escrever o nome da faixa sendo executada
            $('.player-current-track').text(playlist[currentTrack].artist+' - ' + playlist[currentTrack].title +' - '+ playlist[currentTrack].album); 
        },
        swfPath: 'js/plugin/jPlayer-master/src/javascript/jplayer/',
        supplied: "mp3",
        cssSelectorAncestor: "",
        cssSelector: {
            play: '.player-play',
            pause: ".player-pause",
            stop: ".player-stop",
            seekBar: ".player-timeline",
            playBar: ".player-timeline-control"
        },
        size: {
            width: "1px",
            height: "1px"
        }
    });

    player.playCurrent = function() {
        player.jPlayer("setMedia", playlist[currentTrack]).jPlayer("play");
    }
    
    player.playNext = function() {
        currentTrack = (currentTrack == (numTracks -1)) ? 0 : ++currentTrack;
        player.playCurrent();
    };
    
    player.playPrevious = function() {
        currentTrack = (currentTrack == 0) ? numTracks - 1 : --currentTrack;
        player.playCurrent();
    };

    $('.player-next').click(function() {
        player.playNext();
     });
     
     $('.player-prev').click(function() {
       player.playPrevious();
     });
});