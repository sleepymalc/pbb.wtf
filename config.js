module.exports = {
  pathPrefix: '',
  siteUrl: 'https://pbb.wtf',
  title: 'Pingbang Hu',
  description: 'Personal Website of Pingbang Hu',
  author: 'Pingbang Hu',
  authorAlternative: '胡平邦',
  introduction: [
    'I\'m currently a Bachelor student major in Computer Science and Mathematics under Honor Mathematics program in University of Michigan (UMich), United States and Electrical Computer Engineering in Shanghai Jiao Tong University (SJTU). My current research is on Graph Neural Network (GNN) advised by [Jiaqi Ma](https://www.jiaqima.com/), under professor [Qiaozhu Mei](http://www-personal.umich.edu/~qmei/)',
    'Despite my current research topic, my research interest spread widely in Learning Theory, (non) Convex Optimization, Machine Learning Algorithm, and provable Machine Learning Theory. Specifically, I\'m learned Linear Programming follows [Jon Lee](https://sites.google.com/site/jonleewebpage/), and leaned Convex Optimization via that well-known [text book](https://web.stanford.edu/~boyd/cvxbook/), and are planning on taking further optimization courses which is dealing with nonlinear programming and stuff beyond that. Though I care about learning theory, but I also care about the **generalization ability** about a particular machine learning algorithm, hence I\'m now interested in these difficult but astonishing fields.',
    'Let me explain why I use `pbb.wtf`, it all started when I\'m still a young math enthusiast. When I studied in Taiwan, though I can understand most of the content in English math literatures, but those abbreviations bugged me a lot. One day, I can\'t remember why, but I google the keyword <u>*WTF math abbreviation*</u>, and guess what, it\'s the abbreviation of <u>*write the formula*</u>. I just can\'t believe this is indeed the case, so at the end of the day, when I first saw `pbb.wtf`, I know this is my final answer.',
  ],
  avatar: 'avatar.png',
  professions: [
    'Bachelor',
    'Mathematician',
    'Developer',
  ],
  birthday: 'Nov. 10, 2000',
  location: 'United States',
  email: 'pbb@umich.edu',
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT
    || 'https://tc-imba.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: [
    {
      url: '/resume.pdf',
      icon: ['ai', 'cv'],
    }, {
      url: 'https://github.com/sleepymalc',
      icon: ['fab', 'github'],
    }, {
      url: 'https://www.instagram.com/malc_na/',
      icon: ['fab', 'instagram'],
    }, {
      url: 'https://twitter.com/PingbangH',
      icon: ['fab', 'twitter'],
    },
  ],
  wakatime: {
    username: 'sleepymalc',
    activity: 'dffaa52c-7d3e-4bda-99a5-4c9205ff244c',
    language: 'cccb943f-2bfc-47e5-b218-c56b858c1a90',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  education: [
    {
      date: 'Sept 2021 - Present',
      icon: 'university',
      title: 'Bachelor in Computer Science',
      location: 'University of Michigan, United States',
    }, {
      date: 'Sept 2021 - Present',
      icon: 'university',
      title: 'Bachelor in Mathematics (Honors)',
      location: 'University of Michigan, United States',
    }, {
      date: 'Sept 2019 - Present',
      icon: 'university',
      title: 'Bachelor in Electrical Computer Engineering',
      location: 'Shanghai Jiao Tong University, China',
    }, {
      date: 'Sept 2016 - June 2019',
      icon: 'school',
      title: 'High School',
      location: 'Wu-Ling Senior High School, Taiwan',
    }],
  interests: [
    {
      icon: 'drum',
      title: 'Drum!',
    }, {
      icon: 'keyboard',
      title: 'HHKB is the best, period.',
    }, {
      icon: 'camera-retro',
      title: 'Street Phonography',
    }, {
      icon: 'brain',
      title: 'Algorithm',
    }, {
      icon: 'shapes',
      title: 'Topology',
    }, {
      icon: 'cat',
      title: 'Who doesn\'t love cats?',
    }],
  experience: [
    {
      title: 'Teaching',
      position: 'left',
      data: [
        {
          date: 'Fall 2020',
          title: 'Teaching Assistant',
          description: '[Vv186 (Honor Mathematics I)](https://umji.sjtu.edu.cn/~horst/teaching/vv186.html)',
          location: 'Shanghai Jiao Tong University, China',
        }, {
          date: 'Summer 2021',
          title: 'Teaching Assistant',
          description: '[Vv285 (Honor Mathematics II)](https://umji.sjtu.edu.cn/~horst/teaching/vv285.html)',
          location: 'Shanghai Jiao Tong University, China',
        },
      ],
    }, {
      title: 'Intern',
      position: 'right',
      data: [
        {
          date: 'Fall 2020 - Present',
          title: 'Backend Developer (One man group)',
          description: '[foodall](https://foodall.com.tw/): ' +
            'A food delivery service platform for Taiwan',
          location: 'on GitHub',
        },
      ],
    },
  ],
  awards: [
    {
      date: 'Oct. 2021',
      title: 'Hong Kong, Macao and Taiwan Overseas Chinese Student Scholarship, SJTU',
    },
    {
      date: 'Nov. 2020',
      title: 'Undergraduate Excellent Scholarship, SJTU',
    },
    {
      date: 'Jun. 2020',
      title: 'Bao Gang Excellent Scholarship, SJTU',
    },
    {
      date: 'Dec. 2019',
      title: 'Hong Kong, Macao and Taiwan Overseas Chinese Student Scholarship, SJTU',
    },
  ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
