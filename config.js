module.exports = {
  pathPrefix: '',
  siteUrl: 'https://pbb.wtf',
  title: 'Pingbang Hu',
  description: 'Personal Website of Pingbang Hu',
  author: 'Pingbang Hu',
  authorAlternative: 'Write-The-Formula',
  introduction: [
    'Hi there 👋! My Chinese name is **胡平邦** (pronounced as *Hu, Pingˊ-Bongˉ* ) from Taiwan 🇹🇼, but I\'ll respond to both **Benson** and **Pingbang**, just choose one you like 👀 (I know my Chinese name is hard to pronounce in particular 😥)',
    'I\'m a Bachelor student major in **Computer Science** and **Honor Mathematics** in *University of Michigan (UMich)* 🇺🇸 and **Electrical Computer Engineering** in *Shanghai Jiao Tong University (SJTU)* 🇨🇳. My research interest is about *provable modern machine learning theory* and also *computational complexity* and the crossover between *graph theory*.',
    'Despite my current research topics, my interest spreads widely among topics in theoretical computer science and mathematics. For TCS in particular, I\'m interested in approximation, online and randomized algorithm 🧠; as for math, I\'m quite into random matrix theory, statistic, differential and algebraic topology and functional analysis recently 📚.',
    'Occasionally, I\'ll do street photography 📷 and write blog posts ✍️ as a hobby, check out my personal [account](https://www.instagram.com/malc_ph/) and my [blog posts](./posts) 📝! I also love playing drums 🥁 and are now learning guitar 🎸.',
  ],
  avatar: 'avatar.png',
  professions: [
    'Mathematician',
    'Researcher',
  ],
  birthday: 'Nov. 10, 2000',
  location: 'United States',
  email: 'sleepymalc@gmail.com',
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
      url: 'https://twitter.com/PingbangHu',
      icon: ['fab', 'twitter'],
    },
  ],
  wakatime: {
    username: 'sleepymalc',
    activity: 'eb201619-dfe8-485e-b683-11ce3475ad61',
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
      location: 'LSA, University of Michigan, United States',
    }, {
      date: 'Sept 2021 - Present',
      icon: 'university',
      title: 'Bachelor in Mathematics (Honors)',
      location: 'LSA, University of Michigan, United States',
    }, {
      date: 'Sept 2019 - Present',
      icon: 'university',
      title: 'Bachelor in Electrical Computer Engineering',
      location: 'UM-SJTU JI, Shanghai Jiao Tong University, China',
    }, {
      date: 'Sept 2016 - June 2019',
      icon: 'school',
      title: 'Social Science/Math and Science Concentration',
      location: 'National Wu-Ling Senior High School, Taiwan',
    }],
  interests: [
    {
      icon: 'camera-retro',
      title: 'Photography',
    }, {
      icon: 'keyboard',
      title: 'HHKB, the best',
    }, {
      icon: 'cat',
      title: 'Who doesn\'t love cats?',
    },
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
    }
  ],
  experience: [
    {
      title: 'Teaching',
      position: 'left',
      data: [
        {
          date: 'Fall 2022',
          title: 'Instructional Aide',
          description: '**' +
            '[EECS572 (Randomness and Computation)](https://mahdi.ch/eecs572/)' +
            '**: ' +
            'Collaborated with the teaching staff as an instructional aide of a 100+ student course on the main CS track. Offered weekly office hours, taught discussion sections to reinforce conceptual understanding and review course material to ensure the student experience was as smooth as possible.',
          location: 'University of Michigan, United States',
        }, {
          date: 'Summer 2021',
          title: 'Instructional Aide',
          description: '**' +
            '[VV285 (Honor Mathematics III)](https://umji.sjtu.edu.cn/~horst/teaching/vv285.html)' +
            '**: ' +
            'Collaborated with the teaching staff as an instructional aide of a 150+ student course on the main ECE track. Offered weekly office hours, taught discussion sections to reinforce conceptual understanding and review course material to ensure the student experience was as smooth as possible. We also holds the first [*JIntegration Bee* competition](https://github.com/sleepymalc/JIntegrationBee) and tested students understanding of learning goals by devising quiz questions.',
          location: 'Shanghai Jiao Tong University, China',
        }, {
          date: 'Fall 2020',
          title: 'Instructional Aide',
          description: '**' +
            '[VV186 (Honor Mathematics II)](https://umji.sjtu.edu.cn/~horst/teaching/vv186.html)' +
            '**: ' +
            'Collaborated with the teaching staff as an instructional aide of a 200+ student course on the main ECE track. Offered weekly office hours, taught discussion sections to reinforce conceptual understanding and review course material to ensure the student experience was as smooth as possible.',
          location: 'Shanghai Jiao Tong University, China',
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
            'Theoretical analysis on generalization ability of non-i.i.d. semi-supervised node-level tasks advised by [Jiaqi Ma](https://www.jiaqima.com/).',
          location: 'University of Michigan, Ann Arbor, Michigan, U.S.',
        },
        {
          date: 'Summer 2022 - Present',
          title: 'Undergraduate Researcher',
          description: '**' +
            '[Fundamental Understanding of Deep Learning](../research/DL)' +
            '**: ' +
            'Develop various technique to understand deep neural networks advised by [Wei Hu](https://weihu.me/) under the [SURE Program](https://sure.engin.umich.edu/).',
          location: 'University of Michigan, Ann Arbor, Michigan, U.S.',
        },
        {
          date: 'Summer 2022 - Present',
          title: 'Undergraduate Researcher',
          description: '**' +
            '[Network Failure Detection](../research/TCS)' +
            '**: ' +
            'Parametrized network failure detection set analysis advised by [Thatchaphol Saranurak](https://sites.google.com/site/thsaranurak/).',
          location: 'University of Michigan, Ann Arbor, Michigan, U.S.',
        },
      ],
    },
    {
      title: 'Software Development',
      position: 'right',
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
