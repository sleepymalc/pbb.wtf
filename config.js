module.exports = {
  pathPrefix: '',
  siteUrl: 'https://pbb.wtf',
  title: 'Pingbang Hu',
  description: 'Personal Website of Pingbang Hu',
  author: 'Pingbang Hu',
  authorAlternative: 'Write-The-Formula',
  introduction: [
    'I\'m from Taiwan 🇹🇼, and my Chinese name is **胡平邦** (pronounced as *Hu, Ping-Bang*), which is hard to pronounce in particular, so I\'ll respond to both **Benson** and **Pingbang**, just choose one you like 👀',
    'Currently, I\'m a Bachelor student major in **Computer Science** and **Mathematics** under Honor Mathematics program in *University of Michigan (UMich)*, United States 🇺🇸 and **Electrical Computer Engineering** in *Shanghai Jiao Tong University (SJTU)*, China 🇨🇳. My current research interest is about provable modern machine learning theory and also computational complexity.',
    'Despite my current research topic, my interest spreads widely among topics in theoretical computer science and both abstract and applied mathematics. In theoretical computer science, I\'m interested in approximation algorithm, randomized algorithm, online algorithm, and graph algorithm specifically. In applied math, I\'m amazed by topics across applied linear algebra, random matrix theory, sensitivity analysis and statistic. As for abstract math, I recently fell in love with differential and algebraic topology, functional analysis, and also category theory.',
    'Other than academic interests, I also have a lot of hobbies. I love street photography in particular, check out my personal [account](https://www.instagram.com/malc_ph/) 📷! I also love playing drums 🥁, and I\'m currently learning guitar 🎸. But I need to admit my music flavor is a little bit extreme, I\'m really into **Metal**, especially those heavy ones 🤘!',
  ],
  avatar: 'avatar.png',
  professions: [
    'Mathematician',
    'Researcher',
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
      url: 'https://www.linkedin.com/in/pingbang-hu-78a190215',
      icon: ['fab', 'linkedin'],
    },
    {
      url: 'https://www.instagram.com/malc_q/',
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
      icon: 'brain',
      title: 'Algorithm',
    }, {
      icon: 'shapes',
      title: 'Topology',
    },
    {
      icon: 'drum',
      title: 'Drum!',
    }, {
      icon: 'camera-retro',
      title: 'Street Photography',
    }, {
      icon: 'keyboard',
      title: 'HHKB is the best, period.',
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
          description: '**' +
            '[Vv186 (Honor Mathematics I)](https://umji.sjtu.edu.cn/~horst/teaching/vv186.html)' +
            '**: ' +
            'Giving discussion lectures and office hours, also grading exams and assignments.',
          location: 'Shanghai Jiao Tong University, China',
        }, {
          date: 'Summer 2021',
          title: 'Teaching Assistant',
          description: '**' +
            '[Vv285 (Honor Mathematics II)](https://umji.sjtu.edu.cn/~horst/teaching/vv285.html)' +
            '**: ' +
            'Giving discussion lectures and office hours, also grading exams and assignments. We also holds the first [*JI Integration Bee* competition](https://github.com/sleepymalc/UM-SJTU_JI_IntegrationBee).',
          location: 'Shanghai Jiao Tong University, China',
        },
      ],
    },
    {
      title: 'Intern',
      position: 'left',
      data: [
        {
          date: 'Fall 2020 - Spring 2021',
          title: 'Backend Developer',
          description: '**' +
            'foodall' +
            '**: ' +
            'A food delivery service platform in Taiwan. The general framework is based on *Go* with *Gin*, with RESTful API design and *MongoDB* as the database.',
          location: 'online',
        },
      ],
    },
    {
      title: 'Research',
      position: 'right',
      data: [
        {
          date: 'Fall 2021 - Present',
          title: 'Undergraduate Researcher',
          description: '**' +
            '[Generalization Analysis of GNN](../research/GNN)' +
            '**: ' +
            'The very first work on non-i.i.d. semi-supervised PAC-Bayesian analysis on node-level tasks advised by [Jiaqi Ma](https://www.jiaqima.com/).',
          location: 'University of Michigan, Ann Arbor, Michigan, U.S.',
        },
        {
          date: 'Summer 2022 - Present',
          title: 'Undergraduate Researcher',
          description: '**' +
            '[Fundamental Understanding of Deep Learning](../research/DL)' +
            '**: ' +
            'Generalization Analysis of deep neural network advised by [Wei Hu](https://weihu.me/) under the [SURE Program](https://sure.engin.umich.edu/).',
          location: 'University of Michigan, Ann Arbor, Michigan, U.S.',
        },
        {
          date: 'Summer 2022 - Present',
          title: 'Undergraduate Researcher',
          description: '**' +
            '[Network Failure Detection](../research/TCS)' +
            '**: ' +
            'Using the detection set approach to give a tighter bound given the node-connectivity condition advised by [Thatchaphol Saranurak](https://sites.google.com/site/thsaranurak/).',
          location: 'University of Michigan, Ann Arbor, Michigan, U.S.',
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
