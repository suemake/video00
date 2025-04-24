$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/2ol9odrzeoc',
        containment: '.main_visual',
        showControls: false,
        //하단 유튜브 바 없앤거

    });

    $('#banner').YTPlayer({
        videoURL: 'https://youtu.be/2ol9odrzeoc',
        containment: '.main_banner',
        showControls: false,
        // autoPlay: false,
        playOnlyIfVisible: true
        //스크롤해서 화면에 가까워질때 영상이 시작되게 함

    });

    let sw = true;

    $('.main_visual .con button').on('click', function () {
        if (sw) {
            $('#bgndVideo').YTPPause();
            $(this).addClass('on');
        } else {
            $('#bgndVideo').YTPPlay();
            $(this).removeClass('on');
        }

        sw = !sw;
    })

})