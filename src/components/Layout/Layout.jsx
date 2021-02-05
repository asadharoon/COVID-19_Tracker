import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import React from "react";

const Layouts = ({ children }) => {
  return (
    <Layout>
      <Content style={{ margin: "24px 16px 0" }} key="content">
        <div className="site-layout-background" style={{ padding: 24 }}>
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        Developed by Asad Haroon in AntDesign UI
        <a
          href="https://github.com/asadharoon"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>
      </Footer>
    </Layout>
  );
};
export default Layouts;
