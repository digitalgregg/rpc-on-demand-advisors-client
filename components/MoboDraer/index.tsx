import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const menuItems = [
  {
    id: 0,
    title: "My Content",
    img: "/img/contentIcon.svg",
    url: "",
  },
  {
    id: 1,
    title: "My Collections",
    img: "/img/collectionIcon.svg",
    url: "",
  },
  {
    id: 2,
    title: "Shared Collections",
    img: "/img/shareIcon.svg",
    url: "",
  },
  {
    id: 3,
    title: "My Analytics",
    img: "/img/analyticIcon.svg",
    url: "",
  },
  {
    id: 4,
    title: "User Settings",
    img: "/img/settingsIcon.svg",
    url: "",
  },
  {
    id: 5,
    title: "Wishlist",
    img: "/img/wishlistIcon.svg",
    url: "",
  },
  {
    id: 6,
    title: "Billing",
    img: "/img/billingIcon.svg",
    url: "",
  },
  {
    id: 7,
    title: "Support",
    img: "/img/support1.svg",
    url: "",
  },
  {
    id: 8,
    title: "Recycle Bin",
    img: "/img/recycle.svg",
    url: "",
  },
  {
    id: 0,
    title: "Logout",
    img: "/img/logout.svg",
    url: "",
  },
];

const MoboDraer = ({ toggleDrawer, isOpen }: any) => {
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla"
        size="100%"
        style={{ backgroundColor: "#202020" }}
      >
        <div className="w-[90%] pb-[30px] drawer container1 mx-auto text-[#FFFFFF] text-[16px] font-semibold pt-[40px] relative ">
          <div className="px-4 container2">
            <img
              onClick={toggleDrawer}
              src="/img/crossIcon.svg"
              alt="close icon"
              className="w-[24px] h-[24px] absolute top-[20px] right-[20px] cursor-pointer"
            />
            <div className="flex items-center gap-[15px] mb-[20px]">
              <img
                src="/img/avater.svg"
                alt="avater"
                className="w-[50px] h-[50px] rounded-full"
              />
              <p className="text-[16px] font-semibold">Gregg</p>
            </div>
            {menuItems.map((item: any) => (
              <div key={item.id}>
                <ul className="py-[10px]">
                  <li className="py-[13px] px-4 flex gap-[10px] cursor-pointer rounded-[4px] hover:bg-primary"><span><img src={item.img} alt="icon" className="w-[24px] h-[24px]" /></span> {item.title} </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MoboDraer;
