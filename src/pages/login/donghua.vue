<!--
 * @Author: wuchen
 * @Date: 2020-07-22 14:04:01
 * @LastEditors: wuchen
 * @LastEditTime: 2020-07-23 14:32:55
 * @Description: 
 * @Email: rangowu@163.com
--> 
<template>
    <div class="main">
        <div class="login">
            <div class="log-con">
                <span>登录</span>
                <input type="text" class="name" placeholder="请输入用户名" />
                <input type="text" class="password" placeholder="请输入密码" />
                <a>立即登录</a>
            </div>
        </div>
    </div>
</template>
<script>
// import * as THREE from 'three'
    export default {
        data() {
            return {
                SEPARATION: 100, 
                AMOUNTX: 60, 
                AMOUNTY: 40,
                camera:null, 
                scene:null, 
                renderer:null,
                particles:null, 
                particle:null, 
                count: 0,
			    // mouseX: 0, mouseY: 0,
			    windowHalfX: window.innerWidth / 2,
			    windowHalfY: window.innerHeight / 2,
            }
        },
        methods: {
            init() {
                var container = document.createElement('div'); //创建容器
                document.body.appendChild(container); //将容器添加到页面上
                this.camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 1500); //创建透视相机设置相机角度大小等
                this.camera.position.set(0, 450, 2000); //设置相机位置
                this.scene = new THREE.Scene(); //创建场景
                this.particles = new Array();
                var PI2 = Math.PI * 2;
                //设置粒子的大小，颜色位置等
                var material = new THREE.ParticleCanvasMaterial({
                    color: 0x0f96ff,
                    vertexColors: true,
                    size: 4,
                    program: function(context) {
                        context.beginPath();
                        context.arc(0, 0, 0.01, 0, PI2, true); //画一个圆形。此处可修改大小。
                        context.fill();
                    }
                });
                //设置长条粒子的大小颜色长度等
                var materialY = new THREE.ParticleCanvasMaterial({
                    color: 0xffffff,
                    vertexColors: true,
                    size: 1,
                    program: function(context) {
                        context.beginPath();
                        //绘制渐变色的矩形
                        var lGrd = context.createLinearGradient(-0.008, 0.25, 0.016, -0.25);
                        lGrd.addColorStop(0, '#16eff7');
                        lGrd.addColorStop(1, '#0090ff');
                        context.fillStyle = lGrd;
                        context.fillRect(-0.008, 0.25, 0.016, -0.25); //注意此处的坐标大小
                        //绘制底部和顶部圆圈
                        context.fillStyle = "#0090ff";
                        context.arc(0, 0, 0.008, 0, PI2, true); //绘制底部圆圈
                        context.fillStyle = "#16eff7";
                        context.arc(0, 0.25, 0.008, 0, PI2, true); //绘制顶部圆圈
                        context.fill();
                        context.closePath();
                        //绘制顶部渐变色光圈
                        var rGrd = context.createRadialGradient(0, 0.25, 0, 0, 0.25, 0.025);
                        rGrd.addColorStop(0, 'transparent');
                        rGrd.addColorStop(1, '#16eff7');
                        context.fillStyle = rGrd;
                        context.arc(0, 0.25, 0.025, 0, PI2, true); //绘制一个圆圈
                        context.fill();
                    }
                });
                //循环判断创建随机数选择创建粒子或者粒子条
                var i = 0;
                for (var ix = 0; ix < this.AMOUNTX; ix++) {
                    for (var iy = 0; iy < this.AMOUNTY; iy++) {
                        var num = Math.random() - 0.1;
                        if (num > 0) {
                            this.particle = this.particles[i++] = new THREE.Particle(material);
                            console.log("material")
                        } else {
                            this.particle = this.particles[i++] = new THREE.Particle(materialY);
                            console.log("materialY")
                        }
                        //this.particle = this.particles[ i ++ ] = new THREE.Particle( material );
                        this.particle.position.x = ix * this.SEPARATION - ((this.AMOUNTX * this.SEPARATION) / 2);
                        this.particle.position.z = iy * this.SEPARATION - ((this.AMOUNTY * this.SEPARATION) / 2);
                        this.scene.add(this.particle);
                    }
                }
                this.renderer = new THREE.CanvasRenderer();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                container.appendChild(this.renderer.domElement);
                //document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                //document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                //document.addEventListener( 'touchmove', onDocumentTouchMove, false );
                window.addEventListener('resize', this.onWindowResize(), false);
            },
            //浏览器大小改变时重新渲染
            onWindowResize() {
                this.windowHalfX = window.innerWidth / 2;
                this.windowHalfY = window.innerHeight / 2;
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            },
            animate() {
                requestAnimationFrame(this.animate);
                this.render();
            },
            //将相机和场景渲染到页面上
            render() {
                var i = 0;
                //更新粒子的位置和大小
                for (var ix = 0; ix < this.AMOUNTX; ix++) {
                    for (var iy = 0; iy < this.AMOUNTY; iy++) {
                        this.particle = this.particles[i++];
                        //更新粒子位置
                        this.particle.position.y = (Math.sin((ix + this.count) * 0.3) * 50) + (Math.sin((iy + this.count) * 0.5) * 50);
                        //更新粒子大小
                        this.particle.scale.x = this.particle.scale.y = this.particle.scale.z = ((Math.sin((ix + this.count) * 0.3) + 1) * 4 + (Math.sin((iy + this.count) * 0.5) + 1) * 4) * 50; //正常情况下再放大100倍*1200
                    }
                }
                this.renderer.render(this.scene, this.camera);
                this.count += 0.1;
            }
        },
        mounted() {
            this.init();		//初始化
			this.animate();	//动画效果
        }
    }
</script>

<style lang="scss" scoped>
body {
				margin: 0;
				overflow: hidden;
				background: linear-gradient(to bottom, #19778c, #095f88);
				background-size:1400% 300%;
				animation: dynamics 6s ease infinite;
				-webkit-animation: dynamics 6s ease infinite;
				-moz-animation: dynamics 6s ease infinite;
				font-size: 14px;
				color: #ffffff;
				min-height: 700px;
			}
			/*登录样式*/
			.main {
				position: fixed;
				text-align: center;
				top: 182px;
				width: 100%;
				height: auto;
				display: flex;
				justify-content: center;
			}
			.login {
				width: 470px;
				height:470px;
				background: linear-gradient(to bottom, #19778c, #095f88);
				animation: dynamics 6s ease infinite;
				-webkit-animation: dynamics 6s ease infinite;
				-moz-animation: dynamics 6s ease infinite;
				opacity: 0.9;
				border: solid 1px #13a1fc;
				background-size:1400% 300%;
			}
			@keyframes dynamics {
				0% {
					background-position: 0% 0%;
				}
				50% {
					background-position: 50% 100%;
				}
				100% {
					background-position: 100% 0%;
				}
			}
			.log-con {
				background: linear-gradient(#13a1fc, #13a1fc) left top, linear-gradient(#13a1fc, #13a1fc) left top,
				linear-gradient(#13a1fc, #13a1fc) right top, linear-gradient(#13a1fc, #13a1fc) right top,
				linear-gradient(#13a1fc, #13a1fc) left bottom, linear-gradient(#13a1fc, #13a1fc) left bottom,
				linear-gradient(#13a1fc, #13a1fc) right bottom, linear-gradient(#13a1fc, #13a1fc) right bottom;
				background-repeat: no-repeat;
				background-size: 3px 20px, 20px 3px;
				height: 100%;
				margin: -2px;
				padding: 3px 1px 1px 0;
				border-radius: 3px;
			}
			.log-con >span {
				font-size: 30px;
				font-weight: bold;
				line-height: 24px;
				letter-spacing: 2px;
				display: block;
				margin: 20px 0 44px 0;
			}
			.log-con >span::after {
				display: block;
				content: '';
				width: 57px;
				height: 3px;
				background: #ffffff;
				margin-top: 16px;
				justify-content: center;
				position: relative;
				left: 206px;
			}
			.log-con>input {
				display: block;
				margin: 10px 0 32px 70px;
				width: 330px;
				height: 42px;
				background-color: #ffffff;
				border-radius: 4px;
				opacity: 0.9;
				border: 0;
				font-size: 16px;
				outline: none;
				padding-left: 10px;
				color: #000000;
			}
			.log-con>a {
				width: 340px;
				height: 44px;
				background-color: #0090ff;
				border-radius: 4px;
				display: block;
				margin: 10px 0 0 70px;
				text-align: center;
				line-height: 44px;
				cursor: pointer;
				opacity: 1;
			}

			input::-webkit-input-placeholder {
				color: #000000;
				font-size: 16px;
			}
			.log-con>.code {
				width: 216px;
				display: inline-block;
				margin-left: 6px;
			}
			.log-con>#code {
				width: 94px;
				display: inline-block;
				margin-left: 14px;
				cursor: pointer;
			}
			/*logo*/
			.logo {
				width: 168px;
				height: 75px;
				position: fixed;
				left: 150px;
				top: 26px;
			}
			.logo>img {
				max-width: 100%;
				max-height: 100%;
			}
			/*版权样式*/
			.copyright {
				position: fixed;
				bottom: 10px;
				font-size: 16px;
				display: block;
				width: 100%;
				text-align: center;
			}
</style>
