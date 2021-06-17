/*
 * @Author: wuchen
 * @Date: 2021-06-17 16:46:34
 * @LastEditors: wuchen
 * @LastEditTime: 2021-06-17 17:50:06
 * @Description: 
 * @Email: rangowu@163.com
 */
~function(){
    // 1,创建场景和摄像机
    const scene = new THREE.Scene();
    // 创建摄像机
    // const camera = new THREE.PerspectiveCamera('视角','指投影窗口的长宽比','表示从
    // 距离摄像机多远的位置开始渲染','表示距离摄像机多远的位置截止渲染 1000')
    const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

    // 创建ThreeJS渲染器
    const renderer = new THREE.WebGLRenderer();
    // 设置渲染器场景的大小
    renderer.setSize(window.innerWidth,window.innerHeight);
    // 把渲染器添加到我们的页面中去
    document.body.appendChild(renderer.domElement);

    // 创建基础几何模型
    // const geometry = new THREE.BoxGeometry('x轴的长','y轴的长','z轴的长')
    const geometry = new THREE.BoxGeometry(2,2,2);
    // 创建材质
    const meterial = new THREE.MeshBasicMaterial({color:0x00ff00});
    // 创建网格对象
    const cube = new THREE.Mesh(geometry,meterial);
    // 把网格对象添加到场景中去
    scene.add(cube);
    // 添加帧渲染
    function animate(){
        requestAnimationFrame(animate);
        // 网格对象自旋转
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        // 渲染器渲染 场景和摄像机
        renderer.render(scene,camera);
    }
    animate();
    // 摄像机空间z轴位置
    camera.position.z = 6;
    
    // 尺寸响应式
    window.addEventListener('resize', () => {
        // 初始化摄像机
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        // 初始化渲染器尺寸
        renderer.setSize(window.innerWidth,window.innerHeight);
    })
}();