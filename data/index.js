import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Connie",
    lastName: "Johnston",
    email: "Connie.Johnston@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    location: "San Francisco, CA",
    occupation: "Human Resources Manager",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Jenna",
    lastName: "Swanson",
    email: "JWSwanson@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [],
    location: "Philadelphia, PA",
    occupation: "Legal Billing",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Stephanie",
    lastName: "Swartz",
    email: "Stef.Swartz@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Los Angelas, CA",
    occupation: "CFO",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Ken",
    lastName: "Parks",
    email: "Park.Ken@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [],
    location: "Salt Lake City, UT",
    occupation: "Educator",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Norah",
    lastName: "Wilde-Smith",
    email: "NorahWS@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Minneapolis, MA",
    occupation: "Nurse",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Jesse",
    lastName: "Rodriguez",
    email: "JDRodriguez@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    friends: [],
    location: "Los Angeles, CA",
    occupation: "Photographer",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Paxton",
    lastName: "Sweeny",
    email: "Paxton.Sweeny@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpeg",
    friends: [],
    location: "Chicago, IL",
    occupation: "IT Technician",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Preet",
    lastName: "Singh",
    email: "Preet.Singh80@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    friends: [],
    location: "Washington, DC",
    occupation: "A Student",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Jenna",
    lastName: "Swanson",
    location: "Philadelphia, PA",
    description: "Some really long random description",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "Random comment.",
      "Another random comment.",
      "Yet another random comment.",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Ken",
    lastName: "Parks",
    location: "Salt Lake City, UT",
    description:
      "Another really long random description. This one is longer than the previous one.",
    picturePath: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "One more random comment.",
      "And another random comment.",
      "No more random comments.",
      "I lied, one more random comment.",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Norah",
    lastName: "Wilde-Smith",
    location: "Minneapolis, MA",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "post3.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "One more random comment.",
      "I lied, one more random comment.",
      "I lied again, one more random comment.",
      "Hello!",
      "I'm bored.",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Jesse",
    lastName: "Rodriguez",
    location: "Los Angeles, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored.",
    picturePath: "post4.jpeg",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "I lied again, one more random comment.",
      "Why hello!",
      "I'm bored.",
      "I'm still bored.",
      "Want to go for a walk?",
      "Can we chat?",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Paxton",
    lastName: "Sweeny",
    location: "Chicago, IL",
    description: "Just a short description. I'm tired of typing.",
    picturePath: "post5.jpeg",
    userPicturePath: "p8.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "I lied again, one more random comment.",
      "Why am I doing this?",
      "Hello.",
      "How are you?",
      "I'm good!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Preet",
    lastName: "Singh",
    location: "Washington, DC",
    description:
      "For the last time, I'm tired of typing. Will you get me some tea?",
    picturePath: "post6.jpeg",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "I'm going for a walk.",
      "Did you go out for lunch today?",
      "Nevermind.",
      "Hello!",
      "How are you?",
    ],
  },
];
