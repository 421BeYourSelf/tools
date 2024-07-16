import './App.css';
import {copyToClipboard} from "./utils";
import Receipt from "./page/Receipt";
import {Button, Card, InputNumber} from "antd";
import {useState} from "react";

function App() {
  const [amount, setAmount] = useState(40)
  const feiNiaoYun = "https://feiniaoyun11.life/api/v1/client/subscribe?token=825f3a953d399afe7fb094ca7e1b6320";
  const v2ray = "https://irsssub1.iv2yunch.work/link/zpAvLA6ecOlX6qgP?sub=3"
  const clash = "https://irsssub1.iv2yunch.work/link/zpAvLA6ecOlX6qgP?clash=1";

  function handleCopy(text) {
    copyToClipboard(text);
  }

  function handleChangeAmount(num) {
    setAmount(num)
  }

  return (
    <div className="App">
      <Card className="toolbox">
        <h1>工具箱</h1>
        <h2>
          {/*<a href="https://app.chongjin.icu/Adnroid/ClashMeta_For_Android.apk" className="link">*/}
          {/*  安卓VPN*/}
          {/*</a>*/}

        </h2>
        <h2>
          <a
            href="https://sabrinathings.lanzouf.com/im3Hi0g8t25g"
            target="_blank" rel="noreferrer">安卓 Clash</a>
        </h2>
        <h2>
          <a href="https://xiaohuojian.link/" className="link">
            小火箭(密码6090)
          </a>
        </h2>


        <h2>
          <a href="https://github.com/2dust/v2rayNG/releases/tag/1.8.29" className="link">
            安卓 V2Ray
          </a>
        </h2>
      </Card>

      <br/>

      <Card className="subscription">
        <h1>订阅</h1>

        <div onClick={() => handleCopy(feiNiaoYun)} className="subscription-link">
          <Button>飞鸟云</Button>
        </div>

        <div onClick={() => handleCopy(v2ray)} className="subscription-link">
          <Button>V2Ray 订阅</Button>
        </div>

        <div onClick={() => handleCopy(clash)} className="subscription-link">
          <Button>Clash 订阅</Button>
        </div>

        <div className="item">
          <a download="clash.yaml" href={`${process.env.PUBLIC_URL}/clash.yaml`}>Clash 文件下载</a>
        </div>

        <div className="item">
          <a download="v2ray.txt" href={`${process.env.PUBLIC_URL}/v2ray.txt`}>V2txt 文件下载</a>
        </div>
      </Card>
      <br/>

      <Card className="subscription">
        <h1>订阅</h1>
        <div className="item">
          <span>飞鸟云</span><br/>
          <span>{feiNiaoYun}</span>
        </div>


        <div className="item">
          <span>V2云Clash</span><br/>
          <span>{clash}</span>
        </div>

        <div className="item">
          <span>V2云V2ray</span><br/>
          <span>{v2ray}</span>
        </div>
      </Card>
      <br/>

      <Card className="wallet">
        <h1>钱包 VeWorld</h1>
        <a
          href="https://fj5ca9aulbqwslfr.public.blob.vercel-storage.com/veworld-release-1.8.1-167-tlH97EEqfSlcqWFRcYnJqAVAjVpksh.apk"
          data-test="https://fj5ca9aulbqwslfr.public.blob.vercel-storage.com/veworld-release-1.8.1-167-tlH97EEqfSlcqWFRcYnJqAVAjVpksh.apk"
          className="link">
          安卓版 APK
        </a>
      </Card>
      <br/>

      <Card className="wallet">
        <h1>DAPP</h1>
        <a
          href="https://421beyourself.github.io/greencart/"
          className="link">
          GreenCart
        </a>
      </Card>
      <br/>

      <InputNumber min={1} max={100} defaultValue={amount} onChange={handleChangeAmount}/>
      <br/>

      <Receipt amount={amount}/>
    </div>
  );
}

export default App;
