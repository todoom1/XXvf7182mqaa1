(function() {
    var secretApps = [
{img: './png/cfgj.jpg', name: '超凡国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnRvcElkPTIyOTg0DQ=='}
    ];

    var container = document.getElementById('xapes');
    if (!container) return;

    secretApps.forEach(function(app) {
        // 1. 创建元素
        var li = document.createElement('li');
        li.className = 'app-item'; // 只保留类名用于样式

        li.innerHTML = `
            <div class="app-icon"><img src="${app.img}"></div>
            <div class="app-name">${app.name}</div>
        `;

        li.onclick = function() {
            try {
                // 解码并跳转
                var targetUrl = atob(app.xurl.trim());
                window.open(targetUrl, '_blank');
            } catch (e) {
                console.error("解码失败:", e);
            }
        };

        // 4. 塞进容器
        container.appendChild(li);
    });
})();

window["document"]['getElementById']("3")['innerHTML'] = ("2026美加墨世界杯<br>-查看赛事赛程-");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "XXP8.MY";


function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问XXP8！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}
//Jl https://tfajn.hcjwj.com/app/register.php?site_id=2081&topId=3217399&selfPlanId=2730716
//Sj https://xjvueb.fnbpsw.com/app/register.php?site_id=1010&topId=2881776422653764
//xy https://aliua.tprsmi.com/app/register.php?site_id=1057&topId=9821776445213956
//xsd https://derear.fnbpsw.com/app/register.php?site_id=1059&topId=2291855&selfPlanId=1786520
//st https://lejva.tprsmi.com/app/register.php?site_id=1058&topId=3204909&selfPlanId=2466073
//hy https://ncgca.tprsmi.com/app/register.php?site_id=1062&topId=1120543&selfPlanId=1224435
//ff https://lncqc.jgqvji.com/app/register.php?site_id=1050&topId=6721763483224422&selfPlanId=132103