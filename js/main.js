! function () {
    var duration = 50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)   // button
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setTimeout( function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            }else{
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
/*
 *  首先要准备皮卡丘的皮
 */
.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFE600;
}
.wrapper {
    width: 100%;
    height: 165px;
    position: relative;
}
/*
 *  接下来画皮卡丘的鼻子
 */
.nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
}
/*
 *  接下来画皮卡丘的眼睛
 */
.eye {
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
}
/*
 *  眼睛里面的眼珠
 */
.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000000;
}
/*
 *  左眼在左边
 */
.eye.left {
    right: 50%;
    margin-right: 90px;
}
/*
 *  右眼在右边
 */
.eye.right {
    left: 50%;
    margin-left: 90px;
}
/*
 *  然后，画皮卡丘的脸
 */
.face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
/*
 *  把脸放到正确的位置
 */
.face.left {
    right: 50%;
    margin-right: 116px;
}
.face.right {
    left: 50%;
    margin-left: 116px;
}
/*
 *  上嘴唇
 */
.upperLip {
    height: 20px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background: #FFE600;
}
.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
/*
 *  下嘴唇
 */
.lowerLip-wrapper {
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    /* z-index: -1; */
    height: 110px;
    overflow: hidden;
    width: 300px;
}
.lowerLip {
    height: 3500px;
    width: 300px;
    background: #9A020A;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
/*
 *  小舌头
 */
.lowerLip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
}
/*
 *  好了，皮卡丘画完了
 */
`
    writeCode('', code)
    
}.call()