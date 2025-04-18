"use client";
import { useState, useEffect } from "react";
import '../Css/DashboardLayout.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashboardOutlined,
  LogoutOutlined,
  WechatOutlined,
  StarOutlined,
  FlagOutlined,
  SettingOutlined,
  RightCircleFilled,
  TeamOutlined,
  ClockCircleOutlined,
  ReadOutlined,
  TrophyOutlined,
  ToolOutlined,
  FolderOutlined,
  ProjectOutlined,
  CalendarOutlined,
  FileOutlined,
  PaperClipOutlined,
  BellOutlined,
  SearchOutlined,
  OpenAIOutlined,
  EnvironmentOutlined,
  UserAddOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/router";

import Route from "@/components/Routes/Routes";
import { deleteCookie, getCookie } from "cookies-next";

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({children}:{children:React.ReactNode}) => {

  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setDrawerVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);
  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleLogout = () => {
    localStorage.removeItem("role");
    toast.success("Logged out successfully");
    window.location.href = "/login"; 
  };
  
  const role = getCookie('role') || 'undefined';

  const hiddenSidebar=["Training","Performance","Tickets","FileManager","Time Sheet","Project Manager","Events & Meeting"]

  // const allMenuItems = [
  //   { label: "Dashboard", key: "dashboard" },
  //   { label: "Organization", key: "Organization" },
  //   { label: "Training", key: "4-1" },
  //   { label: "Performance", key: "performance" },
  //   { label: "Tickets", key: "tickets" },
  //   { label: "FileManager", key: "filemanager" },
  //   { label: "Settings", key: "settings" },
  //   { label: "Time Sheet", key: "Time Sheet" },
  //   { label: "Project Manager", key: "Project Manager" },
  //   { label: "Events & Meeting", key: "Events & Meeting" },
  //   { label: "Logout", key: "Logout" },

  // ];

  // const visibleItems = role === 'vendor'
  // ? allMenuItems.filter(item => !hiddenSidebar.includes(item.label))
  // : allMenuItems;


  const allMenuItems = [
    { key: '1', icon: <UserOutlined />, label: 'Dashboard', href: '/dashboard/vendor' },
    { key: '2', icon: <UserOutlined />, label: 'Organization', href: '/dashboard/vendor' },
    { key: '3', icon: <UserOutlined />, label: 'Training', href: '/dashboard/vendor' },
    { key: '4', icon: <UserOutlined />, label: 'Performance', href: '/dashboard/vendor' },
    { key: '5', icon: <UserOutlined />, label: 'Tickets', href: '/dashboard/vendor' },
    { key: '6', icon: <UserOutlined />, label: 'FileManager', href: '/dashboard/vendor' },
    { key: '7', icon: <UserOutlined />, label: 'Settings', href: '/dashboard/vendor' },
    { key: '8', icon: <UserOutlined />, label: 'Time Sheet', href: '/dashboard/vendor' },
    { key: '9', icon: <UserOutlined />, label: 'Project Manager', href: '/dashboard/vendor' },
    { key: '10', icon: <UserOutlined />, label: 'Events & Meeting', href: '/dashboard/vendor' },
    { key: '11', icon: <UserOutlined onClick={handleLogout} />, label: 'Logout', href: '/dashboard/vendor' },
  ];


  const visibleItems =
  role === 'vendor'
    ? allMenuItems.filter(item => !hiddenSidebar.includes(item.label))
    : allMenuItems;

    const menuItems = [
      ...visibleItems.map(item => ({
        key: item.key,
        icon: item.icon,
        label: <Link href={item.href}>{item.label}</Link>
      })),
      // {
      //   key: '10',
      //   icon: <LogoutOutlined />,
      //   label: <span onClick={handleLogout}>Logout</span>
      // }
    ];


  
  //const router = useRouter();
  // const handleLogout = () => {
  //   localStorage.removeItem("role");
  //   toast.success("Logged out successfully");
  //   router.push("/login"); 
  // };

  return (
    
      <Layout className="h-screen">
        
        {!isMobile && (
          <Sider
            
            collapsed={collapsed}
            style={{
              background: "black",
              height: "100vh",
              position: "fixed",
              left: 0,
              transition: "width 0.3s ease",
              overflowX: "hidden",
            }}
            className="hide-scrollbar" 
          >
            
            <div className="mt-4 mb-4">
        <div className="flex justify-center align-middle text-center">
  <img src="/logo.webp" className="w-15 h-15 rounded mt-2" alt="Logo" />

</div>

        </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-auto ">

            <Menu
  theme="dark"
  mode="inline"
  defaultSelectedKeys={["1"]}
  style={{ background: "transparent", color: "white", overflowX: "auto" }}
  items={menuItems}
  
  // items={[
  //   {
  //     key: "1",
  //     icon: <UserOutlined />,
  //     label: <Link href="/">Dashboard</Link>,
  //   },
  //   {
  //     key: "2",
  //     icon: <TeamOutlined />,
  //     label: "Organization",
  //     children: [
  //       {
  //         key: "2-1",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/dashboard/department">Department</Link>,
  //       },
  //       {
  //         key: "2-2",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/dashboard/subdepartment">Sub Department</Link>,
  //       },
  //       {
  //         key: "2-3",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/dashboard/announcement">Announcements</Link>,
  //       },
  //       {
  //         key: "2-4",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/dashboard/companypolicy">Company Policy</Link>,
  //       },
  //     ],
  //   },
  //   {
  //     key: "3",
  //     icon: <ClockCircleOutlined />,
  //     label: "Time Sheet",
  //     children: [
  //       {
  //         key: "3-1",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/dashboard/attendance">Attendance</Link>,
  //       },
  //       {
  //         key: "3-2",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/dashboard/calender">Calender</Link>,
  //       },
  //       {
  //         key: "3-3",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/dashboard/overtime">Overtime</Link>,
  //       },
  //       {
  //         key: "3-4",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/dashboard/officeshift">Office Shift</Link>,
  //       },
  //       {
  //         key: "3-5",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/dashboard/holiday">Holidays</Link>,
  //       },
  //       {
  //         key: "3-6",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/dashboard/leave">Leaves</Link>,
  //       },
  //     ],
  //   },
  //   {
  //     key: "4",
  //     icon: <ReadOutlined />,
  //     label: "Training",
  //     children: [
  //       {
  //         key: "4-1",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/training">Training</Link>,
  //       },
  //       {
  //         key: "4-2",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/trainingtype">Training Type</Link>,
  //       },
  //       {
  //         key: "4-3",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/trainers">Trainers</Link>,
  //       },
  //     ],
  //   },
  //   {
  //     key: "5",
  //     icon: <TrophyOutlined />,
  //     label: "Performance",
  //     children: [
  //       {
  //         key: "5-1",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/indicators">Indicators</Link>,
  //       },
  //       {
  //         key: "5-2",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/appraisal">Appraisal</Link>,
  //       },
  //       {
  //         key: "5-3",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/kpi">KPI</Link>,
  //       },
  //       {
  //         key: "5-4",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/kpireport">KPI Report</Link>,
  //       },
  //     ],
  //   },
  //   {
  //     key: "6",
  //     icon: <ToolOutlined />,
  //     label: <Link href="/tickets">Tickets</Link>,
  //   },
  //   {
  //     key: "7",
  //     icon: <FolderOutlined />,
  //     label: <Link href="/filesmanager">Files Manager</Link>,
  //   },
  //   {
  //     key: "8",
  //     icon: <ProjectOutlined />,
  //     label: "Project Manager",
  //     children: [
  //       {
  //         key: "8-1",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/projects">Projects</Link>,
  //       },
  //       {
  //         key: "8-2",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/tasks">Tasks</Link>,
  //       },
  //     ],
  //   },
  //   {
  //     key: "9",
  //     icon: <CalendarOutlined />,
  //     label: "Events & Meetings",
  //     children: [
  //       {
  //         key: "9-1",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/events">Events</Link>,
  //       },
  //       {
  //         key: "9-2",
  //         icon: <RightCircleFilled />,
  //         label: <Link href="/meetings">Meetings</Link>,
  //       },
  //     ],
  //   },
  //   {
  //     key: "10",
  //     icon: <LogoutOutlined />,
  //     label: (
  //       <span onClick={handleLogout} style={{ color: "white" }}>
  //         Logout
  //       </span>
  //     ),
  //   },
  // ]}
/>



            {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} style={{ background: "transparent" , color:"white" ,  overflowX:"auto", }}>
            <Menu.Item style={{ color: "white" }} key="1" icon={<UserOutlined />}>
            <Link href= '/'>Dashboard</Link>
            </Menu.Item>

            <Menu.SubMenu style={{ color: "white" }} key="2" icon={<TeamOutlined />} title="Organization">
              <Menu.Item key="2-1" icon={<RightCircleFilled />}>
              <Link href='/dashboard/department'>Department</Link>
              </Menu.Item>
              <Menu.Item key="2-2" icon={<RightCircleFilled />}>
              <Link href='/dashboard/subdepartment'>Sub Department</Link>
              </Menu.Item>
              <Menu.Item key="2-3" icon={<RightCircleFilled />}>
              <Link href='/dashboard/announcement'>Announcements</Link>
              </Menu.Item>
              <Menu.Item key="2-4" icon={<RightCircleFilled />}>
              <Link href='/dashboard/companypolicy'>Company Policy</Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu style={{ color: "white" }} key="3" icon={<ClockCircleOutlined />} title="Time Sheet">
              <Menu.Item key="3-1" icon={<RightCircleFilled />}>
              <Link href='/dashboard/attendance'>Attendance</Link>
              </Menu.Item>
              <Menu.Item key="3-2" icon={<RightCircleFilled />}>
              <Link href='/dashboard/calender'>
               Calender</Link>
              </Menu.Item>
              <Menu.Item key="3-3" icon={<RightCircleFilled />}>
              <Link href='/dashboard/overtime'>Overtime</Link>
              </Menu.Item>
              <Menu.Item key="3-4" icon={<RightCircleFilled />}>
              <Link href='/dashboard/officeshift'>Office Shift</Link>
              </Menu.Item>
              <Menu.Item key="3-5" icon={<RightCircleFilled />}>
              <Link href='/dashboard/holiday'>Holidays</Link>
              </Menu.Item>
              <Menu.Item key="3-6" icon={<RightCircleFilled />}>
              <Link href='/dashboard/leave'>Leaves</Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu style={{ color: "white" }} key="4" icon={<ReadOutlined />} title="Training">
              <Menu.Item key="4-1" icon={<RightCircleFilled />}>
              <Link href='/training'>Training</Link>
              </Menu.Item>
              <Menu.Item key="4-2" icon={<RightCircleFilled />}>
              <Link href='/trainingtype'>Training Type</Link>
              </Menu.Item>
              <Menu.Item key="4-3" icon={<RightCircleFilled />}>
              <Link href='/trainers'>Trainers</Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu style={{ color: "white" }} key="5" icon={<TrophyOutlined />} title="Performance">
              <Menu.Item key="5-1" icon={<RightCircleFilled />}>
              <Link href='/indicators'>Indicators</Link>
              </Menu.Item>
              <Menu.Item key="5-2" icon={<RightCircleFilled />}>
              <Link href='/appraisal'>Appraisal</Link>
              </Menu.Item>
              <Menu.Item key="5-3" icon={<RightCircleFilled />}>
              <Link href='/kpi'>KPI</Link>

              </Menu.Item>
              <Menu.Item key="5-4" icon={<RightCircleFilled />}>
              <Link href='/kpireport'>KPI Report</Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item key="6" style={{ color: "white" }} icon={<ToolOutlined />}>
            <Link href='/tickets'>Tickets</Link>
            </Menu.Item>
            <Menu.Item key="7" style={{ color: "white" }} icon={<FolderOutlined />}>
            <Link href='/filesmanager'>Files Manager</Link>
            </Menu.Item>

            <Menu.SubMenu style={{ color: "white" }} key="8" icon={<ProjectOutlined />} title="Project Manager">
              <Menu.Item key="8-1" icon={<RightCircleFilled />}>
              <Link href='/projects'>Projects</Link>
              </Menu.Item>
              <Menu.Item key="8-2" icon={<RightCircleFilled />}>
              <Link href='/tasks'>Tasks</Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu style={{ color: "white" }} key="9" icon={<CalendarOutlined />} title="Events & Meetings">
              <Menu.Item key="9-1" icon={<RightCircleFilled />}>
              <Link href='/events'>Events</Link>
              </Menu.Item>
              <Menu.Item key="9-2" icon={<RightCircleFilled />}>
              <Link href='/meetings'>Meetings</Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item style={{ color: "white" }} key="10" icon={<LogoutOutlined />} 
            onClick={handleLogout}
            >Logout</Menu.Item>
          </Menu> */}
            </div>

            {/* Sidebar Footer */}
            {/* {!collapsed && (
              <div className="absolute bottom-0 w-full bg-gray-200 py-3 text-center text-purple-800 font-bold flex justify-around">
                <DashboardOutlined />
                <UserOutlined />
                <LogoutOutlined />
              </div>
            )} */}
          </Sider>
        )}

        {/* Drawer for Mobile */}
        {isMobile && (
          <Drawer
            title="Dashboard"
            placement="left"
            closable
            onClose={toggleDrawer}
            open={drawerVisible}
            width={250}
            //bodyStyle={{ padding: 0, background: "black" }}
          >
            {/* <div className="flex justify-center items-center py-4">
              <img className="h-10 w-10" src="/Logo.png" alt="Logo" />
              <h3 className="text-white font-bold text-lg ml-2">HRMS - Digitech</h3>
            </div> */}
            <div 
            className="rounded-2xl mt-4"
            style={{margin: 5 }}>
        <div className="flex justify-center p-2 gap-2">
  <img src="/logo.webp" className="w-10 h-10 mt-2" alt="Logo" />
  {/* {!collapsed && (
    <div>
      <h1 className="mt-2 text-md">Muhammad Riyan</h1>
      <div className="flex justify-start gap-1">
       <div className=" mt-1 w-3 h-3 bg-green-600 rounded-full"></div> 
      <h1 className="text-sm">Online</h1>
      </div>
    </div>
  )}  */}
</div>

        </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} style={{ backgroundColor: "transparent", color: "white" }}>

<Menu.Item key="1" style={{ color: "white" }} icon={<DashboardOutlined />} className="menu-item">
  <Link href="/">Dashboard</Link>
</Menu.Item>

<Menu.SubMenu
  key="sub1"
  icon={<TeamOutlined />}
  title="Organization"
  className="text-white"
  style={{ color: "white" }}
>
<Menu.Item key="2-1" icon={<RightCircleFilled />}>
              <Link href='/dashboard/department'>Department</Link>
              </Menu.Item>
              <Menu.Item key="2-2" icon={<RightCircleFilled />}>
              <Link href='/dashboard/subdepartment'>Sub Department</Link>
              </Menu.Item>
              <Menu.Item key="2-3" icon={<RightCircleFilled />}>
              <Link href='/dashboard/announcement'>Announcements</Link>
              </Menu.Item>
              <Menu.Item key="2-4" icon={<RightCircleFilled />}>
              <Link href='/dashboard/companypolicy'>Company Policy</Link>
              </Menu.Item>
</Menu.SubMenu>

<Menu.SubMenu key="sub2" style={{ color: "white" }} icon={<ClockCircleOutlined />} title="Time Sheet">
<Menu.Item key="3-1" icon={<RightCircleFilled />}>
              <Link href='/attendance'>Attendance</Link>
              </Menu.Item>
              <Menu.Item key="3-2" icon={<RightCircleFilled />}>
              <Link href='/dashboard/calender'>
              TimeSheet </Link>
              </Menu.Item>
              <Menu.Item key="3-3" icon={<RightCircleFilled />}>
              <Link href='/dashboard/overtime'>Overtime </Link>
              </Menu.Item>
              <Menu.Item key="3-4" icon={<RightCircleFilled />}>
              <Link href='/dashboard/officeshift'> Shift</Link>
              </Menu.Item>
              <Menu.Item key="3-5" icon={<RightCircleFilled />}>
              <Link href='/dashboard/holiday'>Holidays</Link>
              </Menu.Item>
              <Menu.Item key="3-6" icon={<RightCircleFilled />}>
              <Link href='/dashboard/leave'>Leaves</Link>
              </Menu.Item>
</Menu.SubMenu>

<Menu.SubMenu key="sub3" style={{ color: "white" }} icon={<StarOutlined />} title="Training">

<Menu.Item key="4-1" icon={<RightCircleFilled />}>
              <Link href='/training'>Training</Link>
              </Menu.Item>
              <Menu.Item key="4-2" icon={<RightCircleFilled />}>
              <Link href='/trainingtype'>Training Type</Link>
              </Menu.Item>
              <Menu.Item key="4-3" icon={<RightCircleFilled />}>
              <Link href='/trainers'>Trainers</Link>
              </Menu.Item>
</Menu.SubMenu>

<Menu.SubMenu key="sub4" icon={<FileOutlined />} title="Performance">
<Menu.Item key="5-1" icon={<RightCircleFilled />}>
              <Link href='/indicators'>Indicators</Link>
              </Menu.Item>
              <Menu.Item key="5-2" icon={<RightCircleFilled />}>
              <Link href='/appraisal'>Appraisal</Link>
              </Menu.Item>
              <Menu.Item key="5-3" icon={<RightCircleFilled />}>
              <Link href='/kpi'>KPI</Link>

              </Menu.Item>
              <Menu.Item key="5-4" icon={<RightCircleFilled />}>
              <Link href='/kpireport'>KPI Report</Link>
              </Menu.Item>
</Menu.SubMenu>

<Menu.Item key="5"  style={{ color: "white" }} icon={<ToolOutlined />}>
<Link href='/tickets'>Tickets</Link>
</Menu.Item>

<Menu.Item key="6"  style={{ color: "white" }} icon={<FolderOutlined />}>
<Link href='/filesmanager'>Files Manager</Link>
</Menu.Item>

<Menu.SubMenu key="sub5" icon={<ProjectOutlined />} title="Project Manager">
<Menu.Item key="8-1" icon={<RightCircleFilled />}>
              <Link href='/projects'>Projects</Link>
              </Menu.Item>
              <Menu.Item key="8-2" icon={<RightCircleFilled />}>
              <Link href='/tasks'>Tasks</Link>
              </Menu.Item>
</Menu.SubMenu>

<Menu.SubMenu key="sub6" style={{ color: "white" }} icon={<CalendarOutlined />}  title="Events & Meetings">
<Menu.Item key="9-1" icon={<RightCircleFilled />}>
<Link href='/events'>Events</Link>
              </Menu.Item>
              <Menu.Item key="9-2" icon={<RightCircleFilled />}>
              <Link href='/meetings'>Meetings</Link>
              </Menu.Item>
</Menu.SubMenu>

<Menu.Item key="9" style={{ color: "white" }} icon={<LogoutOutlined />}
onClick={handleLogout}
>Logout</Menu.Item>

</Menu>
          </Drawer>
        )}

        {/* Main Layout */}
        <Layout style={{ marginLeft: isMobile ? 0 : collapsed ? 80 : 200, transition: "margin-left 0.3s ease" }}>
          <Header style={{ padding: 0, background: "#fff" }}>
            <div className="flex justify-between mx-6">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={isMobile ? toggleDrawer : toggleSidebar}
                style={{ fontSize: "16px", width: 64, height: 64 }}
              />
              <div className="flex gap-4 items-center">
                <BellOutlined className="text-lg" />
                {/* <PaperClipOutlined className="text-lg"/> */}
                <UserAddOutlined className="text-lg"/>
                <EnvironmentOutlined className="text-lg"/>
                {/* <StarOutlined className="text-lg" /> */}
                 <OpenAIOutlined className="text-lg"/>
                {/* <WifiOutlined className="text-lg"/> */}
                {/* <FlagOutlined className="text-lg" /> */}
                {/* <SettingOutlined className="text-lg" /> */}
                <SearchOutlined className="text-lg"/>
              </div>
            </div>
          </Header>

          <Content
        className="hide-scrollbar"
        style={{
          margin: "10px 10px",
          padding: 15,
          minHeight: 310,
          borderRadius: "8px", 
          overflowY: "auto",
          height: "calc(100vh - 64px)",
        }}
      >
        <div className="flex gap-2">
          <div style={{ flex: 1 }}>
            
            {children}
          </div>
        </div>
      </Content>

          {/* <Footer /> */}
        </Layout>
      </Layout>
    
  );
};

export default DashboardLayout;