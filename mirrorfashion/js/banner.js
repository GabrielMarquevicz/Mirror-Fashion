var banners = ["mirrorfashion/img/destaque-home.png", "mirrorfashion/img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner(){
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 4000);
