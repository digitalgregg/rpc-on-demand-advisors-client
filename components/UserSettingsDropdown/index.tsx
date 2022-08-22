import React from 'react';
import AccountSetting from '../CustomIcons/AccountSetting';
import RecycleBin from '../CustomIcons/RecycleBin';
import Support from '../CustomIcons/Support';
import WishlistIcon from '../CustomIcons/WishlistIcon';
import UserSetting from './../CustomIcons/UserSetting';
import Logout from './../CustomIcons/Logout';
import BillingIcon from '../CustomIcons/BillingIcon';

const menuItems = [
 
    
    {
      id: 0,
      title: "User Settings",
      img: <UserSetting/>,
      url: "",
    },
    {
      id: 1,
      title: "Account setting",
      img: <AccountSetting />,
      url: "",
    },
    {
      id: 2,
      title: "Wishlist",
      img: <WishlistIcon />,
      url: "",
    },
    {
      id: 3,
      title: "Billing",
      img: <BillingIcon />,
      url: "",
    },
    {
      id: 4,
      title: "Support",
      img: <Support />,
      url: "",
    },
    {
      id: 5,
      title: "Recycle Bin",
      img: <RecycleBin />,
      url: "",
    },
    {
      id: 6,
      title: "Logout",
      img: <Logout/>,
      url: "",
    },
  ];

const UserSettingsDropdown = () => {
    return (
        <div style={{boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.15)"}} className="w-[190px] rounded-[4px] h-[375px] bg-[#FFFFFF]">
            <div className="px-[10px] ">
            {menuItems.map((item: any) => (
              <div key={item.id} className="py-[2px] ">
                <ul className="px-[10px] py-[10px] hover:bg-primary mt-[5px] rounded-[4px] hover:text-[#FFFFFF] cursor-pointer">
                  <li className="flex gap-[10px]">{item.img} <span className="text-[14px] font-semibold	">{item.title}</span> </li>
                </ul>
              </div>
            ))}
            </div>
        </div>
    );
};

export default UserSettingsDropdown;