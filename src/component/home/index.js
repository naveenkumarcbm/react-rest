import { Card } from "antd";
import InputPanel from "../input";
import Upload from "../upload";

const Home = () => {
  return (
    <Card title="REST API" className="app-card">
      <Card type="inner">
        <InputPanel />
      </Card>
      <Card title="Upload" style={{ marginTop: 16 }} type="inner" >
        <Upload />
      </Card>
    </Card>
  );
};

export default Home;
