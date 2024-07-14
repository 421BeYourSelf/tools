import './App.css';
import {copyToClipboard} from "./utils";

function App() {
  const feiNiaoYun = "https://feiniaoyun11.life/api/v1/client/subscribe?token=825f3a953d399afe7fb094ca7e1b6320";
  const v2ray = "https://irsssub1.iv2yunch.work/link/zpAvLA6ecOlX6qgP?sub=3"
  const clash = "https://irsssub1.iv2yunch.work/link/zpAvLA6ecOlX6qgP?clash=1";

  function handleCopy(text) {
    copyToClipboard(text);
  }

  return (
    <div className="App">
      <section className="toolbox">
        <h1>工具箱</h1>
        <h2>
          <a href="https://app.chongjin.icu/Adnroid/ClashMeta_For_Android.apk" className="link">
            安卓VPN
          </a>
          <br/>
          <a
            href="https://down-load.lanrar.com/file/?BWNXaQ8+UGECC1RsV2JWOlZpAzsAPFM3UDYDKABuUX5QZVUsWTUAZglyBCIEIgFlADdUOFV/UzxXfQZ1V2UAaAVzV2UPIFB3AjVUblcuViVWaQNqADpTMFAkA2AAclExUCBVaVkiADIJNgQ+BDUBXwAzVDVVN1NpV2kGNFc8ADkFMFc0D2RQIgIyVHFXPlZkVjkDPwBqU2lQbgM8AGhRdlAgVXJZOQBmCW8EYARiAS8Aa1RgVSVTYFdoBi9XMwA0BWRXYQ9mUGcCNVQyV2ZWYVY8AzQAPFNmUDQDMABpUWNQYVUzWTEAYwlmBDMENgEyAD5UYlU9UzRXYwZjVyUAYAV1V2sPdFBxAidUZ1dxVj5WaAM7AG5TZFBlAzUAbVFiUGlVJFlwAD0JMgQ3BDYBPQBrVGZVOFNhV2kGN1c7ADAFNFc4D3xQKgJyVGRXb1YgVjEDNwBoU2NQZwM8AGpRaFBpVTVZPQByCSoEIgQnAT0Aa1RnVTxTaVdnBjhXOwA4BTRXMg90UHECPVRyVz5WZVY+AzUAcVNgUGcDMQByUWdQZ1UsWTUAYQloBHwEdgFkADVUJlVkUw5XMwZrVzYAMQ=="
            target="_blank" rel="noreferrer">安卓 Clash</a>
        </h2>
        <h2>
          <a href="https://xiaohuojian.link/" className="link">
            小火箭(密码6090)
          </a>
        </h2>
      </section>

      <section className="subscription">
        <h1>订阅</h1>

        <div onClick={() => handleCopy(feiNiaoYun)} className="subscription-link">
          <button>飞鸟云</button>
        </div>

        <div onClick={() => handleCopy(v2ray)} className="subscription-link">
          <button>V2Ray 订阅</button>
        </div>

        <div onClick={() => handleCopy(clash)} className="subscription-link">
          <button>Clash 订阅</button>
        </div>

        {/*<img src={`${process.env.PUBLIC_URL}/img.png`} alt="二维码" className="qr-code"/>*/}
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

      <section className="wallet">
        <h1>DAPP</h1>
        <a
          href="https://421beyourself.github.io/greencart/"
          className="link">
          GreenCart
        </a>
      </section>
    </div>
  );
}

export default App;
