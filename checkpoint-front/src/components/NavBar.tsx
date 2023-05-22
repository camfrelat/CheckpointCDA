import { Menu, MenuProps } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: <Link to="/continents">Continents</Link>,
    key: "continents",
    icon: <MailOutlined />,
  },
  // {
  //   label: <Link to="/countries">Countries</Link>,
  //   key: "countries",
  //   icon: <AppstoreOutlined />,
  // },
  //   {
  //     label: "test",
  //     key: "SubMenu",
  //     icon: <SettingOutlined />,
  //     children: [
  //       {
  //         type: "group",
  //         label: "Item 1",
  //         children: [
  //           {
  //             label: "Option 1",
  //             key: "setting:1",
  //           },
  //           {
  //             label: "Option 2",
  //             key: "setting:2",
  //           },
  //         ],
  //       },
  //       {
  //         type: "group",
  //         label: "Item 2",
  //         children: [
  //           {
  //             label: "Option 3",
  //             key: "setting:3",
  //           },
  //           {
  //             label: "Option 4",
  //             key: "setting:4",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     label: (
  //       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //         Navigation Four - Link
  //       </a>
  //     ),
  //     key: "alipay",
  //   },
];

function NavBar() {
  return (
    <Menu
      //   onClick={onClick}
      //   selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}

export default NavBar;
