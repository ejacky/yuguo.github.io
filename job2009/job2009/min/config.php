$min_enableBuilder = true;
//����ʹ��ʱ����ͨ��http://dwn/min/builder/���������ã��ⲿʹ��ʱ������Ϊfalse

//$min_cachePath = 'c:\\WINDOWS\\Temp';
$min_cachePath = '/tmp';
//$min_cachePath = preg_replace('/^\\d+;/', '', session_save_path());
//ѡ����һ��ȥ��ע��������ʱ����Ŀ¼���������Լ��ٳ��������������

$min_serveOptions['maxAge'] = 315360000;
//��������������ʱ�䣬Ϊ���������ܽ������ʱ�����þ����ܵĳ�������315360000
//�����Ҫ�ڲ��ı�URL������¸��¾�̬�ļ������Բ�������ʱ����ķ�ʽ��
//��http://localhost/min/f=example/example.css&20100601.css
//���龲̬�ļ����ð汾�Ź���ÿ���޸Ķ���Ҫ�����汾�ţ�����������ʱ����ˣ�
//��http://localhost/min/f=example/example_1_0_1.css

$min_serveOptions['minApp']['maxFiles'] = 10;
//����f��ȡ�����ĸ��������ϲ����ļ����������������ȫ�������󣬱���50��
//��Ȼ���ܻ�����URL���ֵ���⣬����н���