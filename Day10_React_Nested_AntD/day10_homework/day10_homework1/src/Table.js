
import { Space, Table, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import { Button, notification } from 'antd';

const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };



const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        // render: (text) => <a>{text}</a>,
      },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === 'loser') {
            color = 'volcano';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
        <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    ),
  },
];
const data = [
  {
    key: '1',
    avatar:  <Avatar
    src={
      <Image
        src="https://joeschmoe.io/api/v1/male/joe"
        style={{
          width: 32,
        }}
      />
    }
  />,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 14 America',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    avatar:   <Avatar
    src={
      <Image
        src="https://joeschmoe.io/api/v1/male/jon"
        style={{
          width: 32,
        }}
      />
    }
  />,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 45 England',
    tags: ['win','Software Engineer'],
  },
  {
    key: '3',
    avatar:  <Avatar
    src={
      <Image
        src="https://joeschmoe.io/api/v1/male/jordan"
        style={{
          width: 32,
        }}
      />
    }
  />,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 36 Australia',
    tags: ['cool', 'teacher'],
  },
];

const TableComp=()=>{
    return <Table columns={columns} dataSource={data} />;
    
}

export default TableComp;

