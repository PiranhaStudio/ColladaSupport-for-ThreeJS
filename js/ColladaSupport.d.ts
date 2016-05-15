declare namespace THREE {
    class ColladaLoaderOption {
        convertUpAxis:boolean;
    }
    export class ColladaLoaderResult {
        animations:any[];
        kinematics:any;
        scene:THREE.Scene;
    }
    /**
     * DAE文件加载支持
     */
    export class ColladaLoader {
        constructor();

        options:ColladaLoaderOption;
        parse(text:string, callBack:Function, url:string);

        load(url:string, callback:(result:ColladaLoaderResult)=>void):void;
    }
    export class EgretColladaLoader extends ColladaLoader{
        constructor();
        load(resKey:string, callback:(result:ColladaLoaderResult)=>void):void;
    }

    /**
     * 动画控制器
     */
    export class ColladaAnimationHandler {
        update(delta:number):void;
    }

    export const AnimationHandler:ColladaAnimationHandler;

    /**
     * DAE文件动画支持
     */
    export class ColladaAnimation {
        constructor(s:SkinnedMesh, a:AnimationClip);

        playByFrame(startFrameIndex:number, frameCount:number, playCount?:number, callback?:Function):void;
    }

}

