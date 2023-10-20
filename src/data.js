export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Home",
          url: "/",
          icon: "/svgs/home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "/profile",
          icon: "/svgs/user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "/svgs/users.svg",
        },
        {
          id: 4,
          title: "Posts",
          url: "/posts",
          icon: "/svgs/post.svg",
        },
      ],
    },
    {
      id: 3,
      title: "sports",
      listItems: [
        {
          id: 1,
          title: "Cricket",
          url: "/cricket",
          icon: "/svgs/cricket.svg",
        },
        {
          id: 2,
          title: "Badminton",
          url: "/badminton",
          icon: "/svgs/tennis.svg",
        },
     
      ],
    },
    {
      id: 4,
      title: "Charts",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "/svgs/graph.svg",
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "/svgs/logs.svg",
        },
      ],
    },
    // {
    //   id: 5,
    //   title: "maintenance",
    //   listItems: [
    //     {
    //       id: 1,
    //       title: "Settings",
    //       url: "/setting",
    //       icon: "/svgs/setting.svg",
    //     },
     
    //   ],
    // },
  ];
  
  export const users = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      username: "Paul",
      email: "Paul@gmail.com",
      amount: "102",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      username: "William",
      email: "William@gmail.com",
      amount: "256",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      username: "Sarah",
      email: "Sarah@gmail.com",
      amount: "105",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      username: "Henry",
      email: "Henry@gmail.com",
      amount: "475",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      username: "Samuel",
      email: "Samuel@gmail.com",
      amount: "169",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      username: "Emma",
      email: "Emma@gmail.com",
      amount: "795",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1727&q=80",
      username: "Mary",
      email: "Mary@gmail.com",
      amount: "852",
    },
  ];
  
  export const chartBoxUser = {
    color: "#9927CE",
    icon: "/svgs/users.svg",
    title: "Users",
    number: "452",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };
  
  export const chartBoxUploads = {
    color: "skyblue",
    icon: "/svgs/post.svg",
    title: "Total Uploads",
    number: "545",
    dataKey: "uploads",
    percentage: 68,
    chartData: [
      { name: "Sun", uploads: 400 },
      { name: "Mon", uploads: 600 },
      { name: "Tue", uploads: 500 },
      { name: "Wed", uploads: 700 },
      { name: "Thu", uploads: 400 },
      { name: "Fri", uploads: 500 },
      { name: "Sat", uploads: 450 },
    ],
  };


  export const barChartBoxGames = {
    title: "Games Played",
    color: "#8884d8",
    dataKey: "games",
    chartData: [
      {
        name: "Sun",
        games: 40,
      },
      {
        name: "Mon",
        games: 30,
      },
      {
        name: "Tue",
        games: 20,
      },
      {
        name: "Wed",
        games: 27,
      },
      {
        name: "Thu",
        games: 18,
      },
      {
        name: "Fri",
        games: 23,
      },
      {
        name: "Sat",
        games: 34,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 4000,
      },
      {
        name: "Mon",
        visit: 3000,
      },
      {
        name: "Tue",
        visit: 2000,
      },
      {
        name: "Wed",
        visit: 2780,
      },
      {
        name: "Thu",
        visit: 1890,
      },
      {
        name: "Fri",
        visit: 2390,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };
  
  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
  ];
  

  
  
  
  export const singleUser = {
    id: 1,
    title: "Fahim",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    info: {
      username: "fahim33",
      fullname: "fahimAbd",
      email: "fahimAbd@gmail.com",
      phone: "065150158",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Fahim added 2 posts ",
        time: "3 day ago",
      },
      {
        text: "Fahim liked 6 posts",
        time: "1 week ago",
      },
      {
        text: "Fahim updated his profile picture",
        time: "2 weeks ago",
      },
      {
        text: "Fahim got verified",
        time: "1 month ago",
      },
      {
        text: "Fahim added a new post.",
        time: "1 month ago",
      },
      {
        text: "Fahim liked a video from badminton section",
        time: "2 months ago",
      },
    ],
  };
 

  export const profile = {
    id: 1,
    title: "Abdullah Fahim",
    img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
    info: {
      username: "abdul333",
      fullname: "AbdFaheem",
      email: "fahimAbd@gmail.com",
      phone: "4574574",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#8D167F" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Fahim added 2 posts ",
        time: "3 day ago",
      },
      {
        text: "Fahim liked 6 posts",
        time: "1 week ago",
      },
      {
        text: "Fahim updated his profile picture",
        time: "2 weeks ago",
      },
      {
        text: "Fahim got verified",
        time: "1 month ago",
      },
      {
        text: "Fahim added a new post.",
        time: "1 month ago",
      },
      {
        text: "Fahim liked a video from badminton section",
        time: "2 months ago",
      },
    ],
  };

  export const userPosts = {
   posts : [
    {
      id : 1,
      img : "https://images.unsplash.com/photo-1612351641432-20a0f196086c?auto=format&fit=crop&q=80&w=1893&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id : 2,
      img : "https://images.unsplash.com/photo-1515311320503-6e3d309537b4?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id : 3,
      img : "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id : 4,
      img : "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      id : 5,
      img : "https://images.unsplash.com/photo-1517582082532-16a092d47074?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      id : 6,
      img : "https://images.unsplash.com/photo-1562351778-a451cb11dc90?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      id : 7,
      img : "https://images.unsplash.com/photo-1560759226-14da22a643ef?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id : 8,
      img : "https://images.unsplash.com/photo-1567316106249-b2ecaeefdade?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
   
   ]
  }