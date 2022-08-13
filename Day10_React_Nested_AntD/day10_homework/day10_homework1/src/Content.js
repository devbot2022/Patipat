import { Col, Row } from 'antd';
import TableComp from './Table';

const ContentComp = ()=>{
    return (
        <Row>
            <Col span={24}>
                <TableComp/>
            </Col>
        </Row>
    )
}

export default ContentComp;