import React from "react";
import {Link} from "react-router-dom";

export default function Tools() {
  return <div>
    <h1>安装包</h1>
    <div className="item">
      <a
        href="https://sabrinathings.lanzouf.com/im3Hi0g8t25g"
        target="_blank" rel="noreferrer">Clash</a>
    </div>

    <div className="item">
      <a
        href="https://fj5ca9aulbqwslfr.public.blob.vercel-storage.com/veworld-release-1.8.1-167-tlH97EEqfSlcqWFRcYnJqAVAjVpksh.apk"
        data-test="https://fj5ca9aulbqwslfr.public.blob.vercel-storage.com/veworld-release-1.8.1-167-tlH97EEqfSlcqWFRcYnJqAVAjVpksh.apk"
        className="link">
        VeWorld
      </a>
    </div>

    <div className="item">
      <a download="veworld.apk" href={`${process.env.PUBLIC_URL}/veworld.apk`}>快速下载 VeWorld</a>
    </div>

    <div className='item'>
      <a href="https://gitee.com/culala/tools/releases/tag/veworld">Gitee 下载VeWorld</a>
    </div>
  </div>
}