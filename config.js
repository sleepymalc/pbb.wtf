module.exports = {
  pathPrefix: '',
  siteUrl: 'https://pbb.wtf',
  title: 'Pingbang Hu',
  description: 'Pingbang Hu\'s personal website.',
  author: 'Pingbang Hu',
  authorAlternative: 'Write-The-Formula',
  introduction: [
    'I\'m a first year Ph.D. student at *University of Illinois Urbana-Champaign* 🌽, holding a [dual Bachelor degree](https://www.ji.sjtu.edu.cn/academics/ipo/study-abroad/degree-programs/) from *University of Michigan* 〽️ and *Shanghai Jiao Tong University* 🇨🇳. I\'m fortunate enough to be advised by [Jiaqi Ma](https://www.jiaqima.com/).',
    `I do *AI* and *TCS* with **math** on **graphs**. In general, I try to design and understand algorithms by proving its *robustness*, *fairness*, etc. I'm currently focusing on *unlearning problems* and *sparse graph limits*.`,
    `I think about many problems, while a particular one of them haunts me more than others: *What is the analogy of **computational complexity theory** for modern learning problems?* I.e., can we say something about the *hardness* of deep learning problems?`,
    `In my spare time, I enjoy [*photography*](https://street.pbb.wtf/) 📷, writing [*random posts*](./posts) 📝, and staying up late 🌌.`
  ],
  avatar: 'avatar.png',
  professions: [
    'I speak TeX'
  ],
  birthday: 'Nov. 10, 2000',
  location: 'Illinois, United States',
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
      url: 'https://scholar.google.com/citations?user=lPlQpqoAAAAJ&hl=en',
      icon: ['fa', 'graduation-cap'],
    }, {
      url: 'https://github.com/sleepymalc',
      icon: ['fab', 'github'],
    }, {
      url: 'https://www.linkedin.com/in/pingbang-hu-78a190215',
      icon: ['fab', 'linkedin'],
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
      date: 'Aug. 2023 - Present',
      icon: 'university',
      title: 'Ph.D. in Information Science',
      location: 'School of Information Science, University of Illinois Urbana-Champaign',
    }, {
      date: 'Sep. 2021 - Apr. 2023',
      icon: 'university',
      title: 'B.Sc. in Computer Science & minor in Mathematics',
      location: 'College of Engineering & Literature, Science, and the Arts, University of Michigan',
    }, {
      date: 'Sep. 2019 - Aug. 2023',
      icon: 'university',
      title: 'B.Eng. in Electrical and Computer Engineering & minor in Computer Science',
      location: 'UM-SJTU Joint Institute, Shanghai Jiao Tong University',
    }],
  interests: [
    {
      icon: 'chart-network',
      title: 'Graph Neural Network',
    }, {
      icon: 'brain',
      title: 'Learning Theory',
    }, {
      icon: `laptop-code`,
      title: `Computational Complexity`,
    }, {
      icon: `hands-usd`,
      title: `Game Theory`,
    }, {
      icon: 'chart-line',
      title: 'High Dimensional Statistics',
    }, {
      icon: 'shapes',
      title: 'Geometry \& Topology',
    }, {
      icon: 'function',
      title: 'Analysis',
    }
  ],
  experience: [
    {
      title: 'Teaching',
      position: 'left',
      data: [
        {
          date: 'Jan. 2023 - May 2023',
          title: 'Instructional Aide',
          description: '**' +
            '[EECS475 (Introduction to Cryptography)](https://mahdi.ch/eecs475/)' +
            '**: ' +
            'An upper-level 100+ student course on the B.Sc. CS track. [Notes](../posts/Notes#introduction-to-cryptography-eecs475-university-of-michigan-ta) are available.',
          location: 'University of Michigan',
        },
        {
          date: 'Sep. 2022 - Dec. 2022',
          title: 'Instructional Aide',
          description: '**' +
            '[EECS572 (Randomness and Computation)](https://mahdi.ch/eecs572/)' +
            '**: ' +
            'A graduate-level 70+ student course on the M.S. theory CS track. [Notes](../posts/Notes#randomness-and-computation-eecs572-university-of-michigan-ta) are available.',
          location: 'University of Michigan',
        }, {
          date: 'May 2021 - Aug. 2021',
          title: 'Teaching Assistant',
          description: '**' +
            '[VV285 (Honor Mathematics III)](https://umji.sjtu.edu.cn/~horst/teaching/vv285.html)' +
            '**: ' +
            'A 200+ student rigorous analysis course on the B.Eng. ECE track. We also holds the first [*JIntegration Bee* competition](https://github.com/sleepymalc/JIntegrationBee)!',
          location: 'Shanghai Jiao Tong University',
        }, {
          date: 'Sep. 2020 - Dec. 2020',
          title: 'Teaching Assistant',
          description: '**' +
            '[VV186 (Honor Mathematics II)](https://umji.sjtu.edu.cn/~horst/teaching/vv186.html)' +
            '**: ' +
            'A 200+ student rigorous analysis course on the B.Eng. ECE track.',
          location: 'Shanghai Jiao Tong University',
        },
      ],
    },
    {
      title: 'Selected Research',
      position: 'right',
      data: [
        {
          date: 'May 2022 - Present',
          title: 'Undergraduate Researcher',
          description: '**' +
            '[Fundamental Understanding of Deep Learning](../research/intrinsic-dim-est)' +
            '**: ' +
            'Develop various technique to understand deep neural networks advised by [Wei Hu](https://weihu.me/) under the [SURE Program](https://sure.engin.umich.edu/).',
          location: 'University of Michigan, Michigan',
        },
      ],
    },
    {
      title: 'Software Development',
      position: 'right',
      data: [
        {
          date: 'Oct. 2020 - Jan. 2021',
          title: 'Backend Developer',
          description: '**' +
            'foodall' +
            '**: ' +
            'A food order platform in Taiwan, built with *Golang* and *Gin*, *MongoDB*, with RESTful API design.',
          location: 'Virtual, Shanghai',
        },
      ],
    },
  ],
  awards: [
    {
      date: 'Oct. 2021',
      title: 'Hong Kong, Macao and Taiwan Overseas Chinese Student Scholarship',
    },
    {
      date: 'Nov. 2020',
      title: 'Undergraduate Excellent Scholarship',
    },
    {
      date: 'Jun. 2020',
      title: 'Bao Gang Excellent Scholarship',
    },
    {
      date: 'Dec. 2019',
      title: 'Hong Kong, Macao and Taiwan Overseas Chinese Student Scholarship',
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
