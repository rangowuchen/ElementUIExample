<!--
 * @Author: wuchen
 * @Date: 2020-09-27 15:27:19
 * @LastEditors: wuchen
 * @LastEditTime: 2020-09-27 19:51:03
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div style="width:100%;height:100%">
        <div style="width:100%;height:100%" id="container" />
    </div>
</template>
<script>
    import G6 from "@antv/g6";
    export default {
        data() {
            return {};
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                const GRAPH_CONTAINER = "container";
                // 注册自定义节点
                G6.registerNode(
                    "customNode", {
                        // 绘制节点
                        drawShape: function drawShape(cfg, group) {
                            console.log('.....', cfg, group)
                            const mainGroup = group.addGroup({
                                id: 'main-group'
                            })
                            const keyShape = mainGroup.addShape('image', {
                                attrs: {
                                    img: cfg.src,
                                    x: cfg.x,
                                    y: 10,
                                    fontSize: 10,
                                    width: 80,
                                    height: 80
                                }
                            });
                            mainGroup.addShape('rect', {
                                attrs: {
                                    x: cfg.x,
                                    y: 95,
                                    width: 12,
                                    height: 12,
                                    fill: 'red',
                                    borderRadius:'50'
                                },
                            });
                            mainGroup.addShape('text', {
                                attrs: {
                                    text:cfg.label,
                                    fontSize:12,
                                    x: 30,
                                    y: 110,
                                    fill: 'red',
                                },
                            });
                            return keyShape
                        }
                    },
                    "circle"
                );
                const data = {
                    nodes: [{
                            id: "node1",
                            label: "node1",
                            size: 100,
                            shape: "customNode",
                            src:require('../../assets/img/avatar.png'),
                        },
                        {
                            id: "node2",
                            label: "node2",
                            size: 100,
                            shape: "customNode",
                            src:require('../../assets/img/normal.png'),
                        }
                    ],
                    edges: [{
                        source: "node1",
                        target: "node2",
                        labelCfg: {
                            style: {
                                position:'bottom'
                            }
                        }
                    }]
                };
                const width = document.getElementById("container").scrollWidth;
                const height = document.getElementById("container").scrollHeight || 500;
                const graph = new G6.Graph({
                    container: GRAPH_CONTAINER,
                    width,
                    height,
                    modes: {
                        default: [{
                            type: "drag-node",
                            delegate: false
                        }]
                    },
                    defaultNode: {
                        style: {
                            fill: "#DEE9FF",
                            stroke: "#5B8FF9"
                        },
                        labelCfg: {
                            style: {
                                fontSize: 12
                            }
                        }
                    },
                    defaultEdge: {
                        style: {
                            stroke: "#e2e2e2"
                        }
                    },
                    nodeStateStyles: {
                        selected: {
                            stroke: "red"
                        }
                    }
                });
                graph.data(data);
                graph.render();
            }
        }
    };
</script>