import React, { useState } from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { FaComputer } from "react-icons/fa6";
import { LuSmartphone } from "react-icons/lu";
import { FaTabletAlt } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { TbDeviceAirpods } from "react-icons/tb";
import { CgDetailsMore } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const items = [
  {
    key: "1",
    icon: <AppstoreOutlined />,
    label: "Barcha mahsulotlar",
    children: [
      {
        key: "11",
        label: "Kompyuterlar",
        icon: <FaComputer />,
        children: [
          { key: "111", label: "Ish stoli kompyuterlari" },
          { key: "112", label: "Monitorlar" },
          { key: "113", label: "Monobloklar" },
        ],
      },
      {
        key: "12",
        label: "Smartfonlar",
        icon: <LuSmartphone />,
        children: [
          { key: "121", label: "Barcha smartfonlar", link: "smartphone" },
        ],
      },
      {
        key: "13",
        label: "Planshetlar",
        icon: <FaTabletAlt />,
        children: [{ key: "131", label: "Barcha planshetlar", link: "tablet" }],
      },
      {
        key: "14",
        icon: <IoWatchOutline />,
        label: "Aqlli soatlar",
        children: [{ key: "141", label: "Barcha soatlar", link: "iwatch" }],
      },
      {
        key: "15",
        icon: <TbDeviceAirpods />,
        label: "Quloqchinlar",
        children: [
          { key: "151", label: "Simli quloqchinlar", link: "wired" },
          { key: "152", label: "Simsiz quloqchinlar", link: "wirelles" },
        ],
      },
      {
        key: "16",
        icon: <CgDetailsMore />,
        label: "Boshqalar",
        link: "allitems",
      },
    ],
  },
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items);

const App = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const navigate = useNavigate();

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const onClick = (item) => {
    if (item?.item?.props?.link) {
      navigate(`/${item.item.props.link}`);
    }
  };

  return (
    <Menu
      mode="inline"
      onOpenChange={onOpenChange}
      onClick={onClick}
      items={items}
      className="w-[96vw] md:w-[328px] "
    />
  );
};

export default App;
