ColladaSupport-for-ThreeJS
===
使ThreeJS支持Collada(dae)文件；增加了按帧数播放动画的playByFrame()方法。

     请使用OpenCollada提供的导出插件导出模型。



playByFrame方法及参数说明
---
    /**
     * 按帧播放动画
     * @param startFrameIndex 开始帧索引
     * @param frameCount 动画总帧数
     * @param playCount 播放次数(-1为重复播放)
     * @param playedCallBack 播放完成后的回调函数
     */
    playByFrame: function (startFrameIndex, frameCount, playCount, playedCallBack)
