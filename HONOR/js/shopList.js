let n=0;//代表当前第几张图片
let liList = $("#imgBox li")
let dotBox = $("#dotBox")[0]
let ulNode = $("#imgBox")
// 绑定右箭头事件
$("#next").click(function(){
    // alert(1)
    if(n<liList.length-1){
        n++
    }else{
        n=0
    }
    changeImg()
})
// 绑定左箭头事件
 $("#prev").click(function(){
    if(n !== 0){
        n--
    }else{
        n = liList.length-1
    }
    changeImg()
})

// 小圆点跟随
for(let i=0;i<liList.length;i++){
    //捏小圆点
    let dot = document.createElement("li");
    if(!i){
        dot.className  = "focus"
        }
    dotBox.append(dot)
}

let dotList = $("#dotBox li")
dotList.click(function(){
    n = $(this).index()
        changeImg()
})
function changeImg(){
    ulNode.animate({
        marginLeft:-(n*1200)
    })
    dotList.removeClass("focus")
    dotList.eq(n).addClass("focus")
}

document.onkeydown = function(event){
    // 39向左
    if(event.keyCode === 39){
        // 触发next的元素的事件 （Node.去on的事件名）
        next.click()
    }
    // 37向右
    if(event.keyCode === 37){
        prev.click()
    }
}

let autoPlay = setInterval(function(){
    next.click()
},3000)
box.onmouseenter = function(){
    clearInterval(autoPlay)
}
box.onmouseleave = function(){
    autoPlay = setInterval(function(){
        next.click()
    },3000)
}

// 倒计时
window.onload = function(){
    var target = new Date("2021-03-01 00:00:00")
    setInterval(function(){
        var now = new Date();
        // 计算两者相差的小时，分钟，秒
        // 两者相差多少毫秒
        var s = Math.floor((target.getTime() - now.getTime()) / 1000);
        var hours = Math.floor(s / 3600)
        var minutes = Math.floor(s / 60 - hours * 60);
        var seconds = s % 60
        var hours = hours < 10 ? "0" + hours : hours;
        var minutes = minutes < 10 ? "0" + minutes : minutes;
        var seconds = seconds < 10 ? "0" + seconds : seconds;
        // 重新给Node节点赋值 更新页面中的数值
        $("#hour").innerHTML = hours;
        $("#minute").innerHTML = minutes;
        $("#second").innerHTML = seconds;
    },1000)
}