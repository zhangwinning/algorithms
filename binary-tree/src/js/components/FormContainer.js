import React, {Component} from "react"
import ReactDOM from "react-dom"
import TreeContainer from "./TreeContainer"
import { Insert, getPath, getNodeCount} from "../logic"
import 'antd/dist/antd.less'


import { Button, Layout, Collapse, Row, Col} from 'antd'

const { Header, Footer, Content } = Layout

const Panel = Collapse.Panel


import InputModel from './Model'

class Main extends Component {
    constructor() {
        super();

        this.state = {
            value: "",
            showTree: false,
            treesD3: null,
            trees: null,
            paths : [],
            nodes : null,
            randoms: null,
            visible: false
        };

    }

    /**
     * https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
     *  When you need to handle multiple controlled input elements, you can add a name attribute to each element and
     *  let the handler function choose what to do based on the value of event.target.name.
     *  // arrow function
     *  https://stackoverflow.com/questions/41398645/unable-to-use-arrow-functions-inside-react-component-class
     */
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    handleLogic = (value) => {
        let { randoms, trees, treesD3 } = Insert(value)

        const paths = getPath(trees)

        const nodes = getNodeCount(trees)

        randoms = randoms.join(',')

        this.setState({showTree: true, treesD3: treesD3, trees: trees, paths: paths, nodes: nodes, randoms})

    }

    showModal = () => {
        this.setState({visible: true})
    }

    onShowModal = (visible) => {
        this.setState({visible})
    }

    onInputChange = (value) => {
        this.setState({value})
        this.handleLogic(value)
    }

    render() {
        const {visible, showTree, treesD3, paths = [], nodes = 0, randoms = 0} = this.state


        const createPath = paths.map((path, key) => <h2 key = {key}> {path} </h2> )


        return (
            <div>

                    <Layout style={{ marginLeft: 0 }}>
                        <Header style={{ background: '#fff', padding: 0 }} >

                            <Row type="flex" justify="start" align="middle">
                                <Col span={2}>
                                    <Button type="primary" onClick={this.showModal}>

                                        input value

                                    </Button>
                                </Col>
                                <Col>
                                        产生的随机数: {randoms}
                                </Col>
                            </Row>



                            <InputModel onShowModal = {this.onShowModal} onInputChange = { this.onInputChange } visible = {visible}></InputModel>

                        </Header>
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

                            <div style={{ background: '#fff', textAlign: 'center' , float:'left', width: '38%'}} id = "chart">

                                <TreeContainer data={treesD3} id = "#chart" visible = {showTree}></TreeContainer>

                            </div>

                            <div style={{ padding: 24, background: '#fff', textAlign: 'left' ,float:'right', width: '60%'}}>

                                <Collapse defaultActiveKey={['1','2','3']}>
                                    <Panel header=" 该二叉树的所有路径 " key="1" >
                                        {
                                            createPath
                                        }
                                    </Panel>
                                    <Panel header=" 该二叉树的上的节点数量" key="2">
                                        <h2>{nodes}</h2>
                                    </Panel>
                                    <Panel header="This is panel header 3" key="3" disabled>
                                        <p>321</p>
                                    </Panel>
                                </Collapse>

                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by zhangwinning
                        </Footer>
                    </Layout>
            </div>
        );
    }
}


const wrapper = document.getElementById("binaryTree")
wrapper ? ReactDOM.render(<Main/>, wrapper) : false

