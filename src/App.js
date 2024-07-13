import './App.css';

function App() {
  return (
    <div className="App">
      <section className="toolbox">
        <h1>工具箱</h1>
        <h2>
          <a href="https://app.chongjin.icu/Adnroid/ClashMeta_For_Android.apk" className="link">
            安卓VPN
          </a>
        </h2>
        <h2 className="text">IOS V2Box</h2>
        <h2>
          <a href="https://xiaohuojian.link/" className="link">
            小火箭(密码6090)
          </a>
        </h2>
      </section>

      <section className="subscription">
        <h1>订阅</h1>
        <div className="subscription-link">
          https://feiniaoyun11.life/api/v1/client/subscribe?token=825f3a953d399afe7fb094ca7e1b6320
        </div>
        <img src="/img.png" alt="二维码" className="qr-code"/>
      </section>

      <section className="wallet">
        <h1>钱包 VeWorld</h1>
        <a
          href="https://fj5ca9aulbqwslfr.public.blob.vercel-storage.com/veworld-release-1.8.1-167-tlH97EEqfSlcqWFRcYnJqAVAjVpksh.apk"
          data-test="https://fj5ca9aulbqwslfr.public.blob.vercel-storage.com/veworld-release-1.8.1-167-tlH97EEqfSlcqWFRcYnJqAVAjVpksh.apk"
          className="link">
          安卓版 APK
        </a>
      </section>
    </div>
  );
}

export default App;
