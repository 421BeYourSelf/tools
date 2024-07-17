import React from "react";
import {Button} from "antd";
import {copyToClipboard} from "../../utils";

export default function Subscription() {
  const feiNiaoYun = "https://feiniaoyun11.life/api/v1/client/subscribe?token=825f3a953d399afe7fb094ca7e1b6320";
  const v2ray = "https://irsssub1.iv2yunch.work/link/zpAvLA6ecOlX6qgP?sub=3"
  const clash = "https://irsssub1.iv2yunch.work/link/zpAvLA6ecOlX6qgP?clash=1";

  function handleCopy(text) {
    copyToClipboard(text);
  }


  return <div>
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

    <div className="item">
      <span>飞鸟云</span><br/>
      <span>{feiNiaoYun}</span>
    </div>


    <div className="item">
      <span>V2云Clash</span><br/>
      <p>{clash}</p>
    </div>

    <div className="item">
      <span>V2云V2ray</span><br/>
      <span>{v2ray}</span>
    </div>
  </div>
}