var spidol = new Audio('spidol.mp3');
$(document).ready(function () {
    // process bar
    setTimeout(function () {
        firstQuestion();

        // spidol.play();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function init() {
    $('#title').text(CONFIG.title)
    $('#desc').text(CONFIG.desc)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
}

function firstQuestion() {
    var audioDoaMa = new Audio('makeu.mp3');
    var audioNo = new Audio('no.mp3');

    $('.content').hide();
    Swal.fire({
        title: 'Mít Yêu ơi!! 👋👋👋',
        text: 'Chuẩn bị nhận quà chưa nè!! 🥰🥰<3',
        imageUrl: 'cuteCat.jpg',
        background: '#fff url("iput-bg.jpg")',
        imageAlt: 'Custom image',
        confirmButtonText: 'Nếu chưa thì hông được bấm nha😍!'
    }).then((result) => {
        if (result.value) {
            spidol.play();
            var audio = new Audio('tick.mp3');
            audio.play();
            Swal.fire({
                title: 'Gửi tới em, cục vàng của anh😘 ',
                text: 'Chúc người yêu có 1 ngày lễ 20/10 thật vui vẻ, hạnh phúc và ý nghĩa🥰🥰🥰',
                imageUrl: '2.jfif',
                background: '#fff url("iput-bg.jpg")',
                imageAlt: 'Custom image',
                confirmButtonText: 'Chưa hết đâu ạ!😘'
            })
                .then((result) => {
                    if (result.value) {
                        var audio = new Audio('tick.mp3');
                        audio.play();
                        Swal.fire({
                            title: 'Có món quà nhỏ cho Mít iu nè!!🤩🤩🤩',
                            text: `Ấn vào nút dưới đây để mở quà nhé🤩`,
                            imageUrl: 'quane.jpg',
                            background: '#fff url("iput-bg.jpg")',
                            imageAlt: 'Custom image',
                            confirmButtonText: 'Mở🤩🤩🤩',
                        }).then((result) => {
                            if (result.value) {
                                spidol.pause();
                                audioNo.play();
                                Swal.fire({
                                    text: `Bùm😲😲😲`,
                                    html: `
    <video width="100%" controls autoplay loop>
      <source src="em.mp4" type="video/mp4">
      Trình duyệt của bạn không hỗ trợ video.
    </video>
  `,
                                    background: '#fff url("iput-bg.jpg")',
                                    imageAlt: 'Custom image',
                                    confirmButtonText: 'Dễ thương hông ạ🥳',
                                }).then((result) => {
                                    audioNo.pause();
                                    if (result.value) {
                                        spidol.pause();
                                        audioDoaMa.play();
                                        Swal.fire({

                                            title: `Hẹn Mít yêu 20/10 lần tới sẽ bên Mít như này nhé`,
                                            imageUrl: '4.jfif',
                                            imageWidth: 550,      // 👈 chỉnh kích thước ảnh
                                            imageHeight: 550,     // 👈 tùy chọn (có thể bỏ)
                                            background: '#fff url("iput-bg.jpg")',
                                            imageAlt: 'Custom image',
                                            confirmButtonText: '🥰🥰🥰',
                                        })

                                            .then((result) => {
                                                if (result.value) {
                                                    var audio = new Audio('tick.mp3');
                                                    audio.play();
                                                    Swal.fire({
                                                        width: 900,
                                                        confirmButtonText: 'Mong em sẽ thích!!!',
                                                        background: '#fff url("iput-bg.jpg")',
                                                        title: 'Món quà đặc biệt cuối cùng dành cho Mít yêu nè🥰😘😘',

                                                        confirmButtonColor: '#83d0c9',
                                                        backdrop: `
                                                    rgba(0,0,123,0.4)
                                                    url("giphy2.gif")
                                                    left top
                                                    no-repeat
                                                    `,
                                                        onClose: () => {
                                                            window.location = CONFIG.messLink;
                                                        }
                                                    })
                                                }
                                            })
                                    }
                                })
                            }
                        })
                    }
                })
        }
    })
}


// switch button position
function switchButton() {
    var audio = new Audio('duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('Swish1.mp3');
    audio.play();
    var x = Math.random() * ($(window).width() - $('#no').width()) * 0.9;
    var y = Math.random() * ($(window).height() - $('#no').height()) * 0.9;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

init()

var n = 0;
$('#no').mousemove(function () {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width >= 900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " " + CONFIG.reply;
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function () {
    var audio = new Audio('tick.mp3');
    audio.play();
    Swal.fire({
        title: CONFIG.question,
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy'>",
        background: '#fff url("iput-bg.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("giphy2.gif")
              left top
              no-repeat
            `,
        confirmButtonColor: '#3085d6',
        confirmButtonColor: '#fe8a71',
        confirmButtonText: CONFIG.btnReply
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: CONFIG.btnAccept,
                background: '#fff url("iput-bg.jpg")',
                title: CONFIG.mess,
                text: CONFIG.messDesc,
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = CONFIG.messLink;
                }
            })
        }
    })
})

