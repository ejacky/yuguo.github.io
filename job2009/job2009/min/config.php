$min_enableBuilder = true;
//本地使用时可以通过http://dwn/min/builder/来进行配置，外部使用时请设置为false

//$min_cachePath = 'c:\\WINDOWS\\Temp';
$min_cachePath = '/tmp';
//$min_cachePath = preg_replace('/^\\d+;/', '', session_save_path());
//选择其一，去掉注释设置临时缓存目录，这样可以减少程序运算提高性能

$min_serveOptions['maxAge'] = 315360000;
//设置浏览器缓存的时间，为了提升性能建议这个时间设置尽可能的长，比如315360000
//如果需要在不改变URL的情况下更新静态文件，可以采用类似时间戳的方式，
//如http://localhost/min/f=example/example.css&20100601.css
//建议静态文件采用版本号管理，每次修改都需要升级版本号，这样就无需时间戳了，
//如http://localhost/min/f=example/example_1_0_1.css

$min_serveOptions['minApp']['maxFiles'] = 10;
//参数f获取参数的个数，即合并的文件个数，这个数量完全可以增大，比如50，
//当然可能会遇到URL最大值问题，后会有解释