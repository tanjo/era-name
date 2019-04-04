const characters = ["令","平","成","昭","和","大","正","明","治","慶","応","元","文","久","万","延","安","政","嘉","永","弘","化","天","保","享","寛","宝","暦","徳","禄","貞","承","長","亀","仁","康","吉","至","観","中","授","建","興","国","武","亨","乾","禎","福","喜","寿","養","祚","昌","泰","斉","衡","祥","同","神","護","景","雲","字","勝","感","老","霊","銅","朱","鳥","白","雉"];

window.onload = () => {
  document.getElementById('generate').addEventListener('click', (e) => {

    document.getElementById('result').innerText = null;

    e.target.setAttribute('disabled', "");

    document.getElementById('kurukuru').classList.remove('d-none');

    const length = document.getElementById('length').value;
    let result = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * characters.length);
      result = `${result}${characters[index]}`;
    }

    twttr.widgets.createShareButton(
      '/',
      document.getElementById('result-twitter'),
      {
        text: `次の元号は${result}です.`
      }
    );

    setTimeout(() => {
      document.getElementById('result').innerText = result;
      document.getElementById('generate').removeAttribute('disabled');
      document.getElementById('kurukuru').classList.add('d-none');
    }, 1500);
  });
}