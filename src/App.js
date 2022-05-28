import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';
import { Typography, Divider } from 'antd';
import { Avatar } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card, Col, Row } from 'antd';

import Pic1 from './assets/doctor_1.png';
import Pic2 from './assets/doctor_2.png';
import Pic3 from './assets/doctor_3.png';
import Pic4 from './assets/doctor_4.png';


const { Header, Content, Footer } = Layout;

const { Title, Paragraph, Text, Link } = Typography;

const { Meta } = Card;

const content1 = '  浙大七院肝胆胰脾外科组建于2004年12月，其前身为普通外科肝胆病区。科室经过几代人的不懈努力，在医疗、教学、科研等学科综合发展上已达到了国内较先进水平，现为院重点学科，目前在我国肝胆外科、肝脏移植、胰腺外科领域处于国内较先进水平。\n'
const content2 = '  浙大七院肝胆胰脾外科现有医生20人，其中教授2人、副教授6人，主任医师5人，副主任医师7人，其中博士研究生导师2人、硕士研究生导师4人。科室所有医生均为研究生以上学历，70%为博士。全科现有护士17人，主管护师1人，70%为本科学历。科室专家承担国家二级学术分会主委和副主委各一项，常委五项，委员11项，国家三级专业协会常委一项，委员15项。其中，中华医学会各学会委员三项。专家们在国内外20多个杂志担任编委和通讯编委工作，科室获得各级课题30多项，总课题经费达千万左右。\n'
const content3 = '  我们科室为杭州市重点学科、国家教委博士点学科，也是杭州市肝脏移植中心，每年完成肝脏移植100-150例次，累计完成1500多例次，目前仍存活。在我们中心成功完成杭州市年龄最大的移植受体手术达到80岁。危重症肝病肝移植围手术期存活率达到国际较先进水平，我们在移植术后根据基因表达和细胞状态精准调节免疫药物管理，实时监测免疫状态评分和其它指标，使我们中心术后个体化的免疫药物调节达到国际较领先水平，长期存活的移植患者生活质量极高。\n'

function App() {
  return (
      <Layout className="layout">
          <div className="site-page-header-ghost-wrapper">
              <PageHeader
                  className="site-page-header"
                  onBack={() => null}
                  title="科室总览"
                  subTitle="肝胆外科"
                  ghost={true}
                  // backIcon={{color: '#007bff'}}
              />
          </div>
          <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>科室</Breadcrumb.Item>
                  <Breadcrumb.Item>肝胆外科</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">
                  <Typography>
                      <Title level={2}>肝胆外科</Title>
                      <Paragraph>
                          {content1}
                      </Paragraph>
                      <Paragraph>
                          {content2}
                      </Paragraph>
                      <Paragraph>
                          {content3}
                      </Paragraph>
                      <Divider />
                      <Title level={2}>医生介绍</Title>
                      <Paragraph>
                          <div className="site-card-wrapper">
                              <Row gutter={56}>
                                  <Col span={6}>
                                      <Card
                                          hoverable
                                          // style={{ width: 240 }}
                                          cover={<img alt="doctor_1" src={Pic1} height={'280px'}/>}
                                          //cover={<Avatar size={180} icon={Pic1} />}
                                      >
                                          <Meta title="李明 主任医师 教授" description="以肝脏移植和肝胆胰脾肿瘤为专业特长" />

                                      </Card>
                                  </Col>
                                  <Col span={6}>
                                      <Card
                                          hoverable
                                          // style={{ width: 240 }}
                                          cover={<img alt="doctor_2" src={Pic2} height={'280px'}/>}
                                      >
                                          <Meta title="樊华 主任医师 副教授" description="擅长肝脏/胆囊和胆管/胰腺/脾脏系统" />
                                      </Card>
                                  </Col>
                                  <Col span={6}>
                                      <Card
                                          hoverable

                                          cover={<img alt="doctor_3" src={Pic3} height={'280px'}/>}
                                      >
                                          <Meta title="郎韧 副主任医师 副教授" description="肝胆胰恶性肿瘤手术综合治疗,肝胆胰脾疾病腹腔镜微创手术" />
                                      </Card>
                                  </Col>
                                  <Col span={6}>
                                      <Card
                                          hoverable
                                          cover={<img alt="doctor_4" src={Pic4} height={'280px'}/>}
                                      >
                                          <Meta title="赵昕 副主任医师 讲师" description="肝移植;胰腺癌手术治疗;肝脏良恶性肿瘤的微创治疗" />
                                      </Card>
                                  </Col>
                              </Row>
                          </div>
                      </Paragraph>


                  </Typography>
              </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>浙大第七医院</Footer>
      </Layout>
  );
}
export default () => <App />;
