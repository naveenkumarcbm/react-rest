import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const AppLayout = ({children}) => {
  return (
    <Layout className="layout">
      <Header>
      </Header>
      <Content className="app-content">
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AppLayout;
