module.exports = {
  pathPrefix: '',
  siteUrl: 'https://pbb.wtf',
  title: 'Pingbang Hu',
  description: 'Personal Website of Pingbang Hu',
  author: 'Pingbang Hu',
  authorAlternative: 'Write-The-Formula',
  introduction: [
    'I\'m **Pingbang Hu 胡平邦** (*Hu, Pingˊ-Bongˉ*) from Taiwan 🇹🇼, I do **AI theory** and **TCS** with *math* on *graphs*.',
    `Currently I\'m a Ph.D. student at *University of Illinois Urbana-Champaign* 🌽 advised by Prof. [Jiaqi Ma](https://www.jiaqima.com/). I hold [dual Bachelor degrees](https://www.ji.sjtu.edu.cn/academics/ipo/study-abroad/degree-programs/) from *University of Michigan* 〽️ and *Shanghai Jiao Tong University* 🇨🇳. I enjoy thinking about *graph neural networks* 🤖, *algorithmic complexity* 🧠, and *high dimensional statistic* 📊. I also do [*photography*](https://street.pbb.wtf/) 📷 and write [*blog posts*](./posts) 📝 in my spare time.`,
    '***Now***, I\'m: designing *fast graph algorithms*, exploring *machine unlearning*, and studying *graphings*. (and trying to learn guitar 🎸)',
  ],
  avatar: 'avatar.png',
  professions: [
    'I speak TeX.'
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
      url: 'https://scholar.google.com/citations?user=TXqLUIAAAAAJ&hl=en&oi=ao',
      icon: ['fa', 'graduation-cap'],
    },
    {
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
    {
      url: 'https://street.pbb.wtf/',
      icon: ['fa', 'camera-retro'],
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
      date: 'Sep. 2023 - Present',
      icon: 'university',
      title: 'Ph.D. in Information Science',
      location: 'School of Information Science, University of Illinois Urbana-Champaign',
    },
    {
      date: 'Sep. 2021 - Apr. 2023',
      icon: 'university',
      title: 'Bachelor in Computer Science \& Mathematics (Minor)',
      location: 'College of Engineering \& College of Literature, Science, and the Arts, University of Michigan',
    }, {
      date: 'Sep. 2019 - Aug. 2023',
      icon: 'university',
      title: 'Bachelor in Electrical Computer Engineering \& Computer Science (Minor)',
      location: 'UM-SJTU Joint Institute, Shanghai Jiao Tong University',
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
      title: 'I want cats 😭',
    }, {
      icon: 'brain',
      title: 'Algorithm',
    }, {
      icon: 'shapes',
      title: 'Topology',
    }, {
      icon: 'drum',
      title: 'I love metalcore 🤘',
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
            'Collaborated with the teaching staff as an instructional aide of an 100+ student course on the main CS track. Hold discussion \& office hour weekly. [Notes](../posts/Notes#introduction-to-cryptography-eecs475-umich-ta) are available.',
          location: 'University of Michigan, U.S.A.',
        },
        {
          date: 'Sep. 2022 - Dec. 2022',
          title: 'Instructional Aide',
          description: '**' +
            '[EECS572 (Randomness and Computation)](https://mahdi.ch/eecs572/)' +
            '**: ' +
            'Collaborated with the teaching staff as an instructional aide of an 70+ student course on the M.S. theory CS track. Hold discussion \& office hour weekly. [Notes](../posts/Notes#randomness-and-computation-eecs572-umich-ta) are available.',
          location: 'University of Michigan, U.S.A.',
        }, {
          date: 'May 2021 - Aug. 2021',
          title: 'Instructional Aide',
          description: '**' +
            '[VV285 (Honor Mathematics III)](https://umji.sjtu.edu.cn/~horst/teaching/vv285.html)' +
            '**: ' +
            'Collaborated with the teaching staff as an instructional aide of a 150+ student course on the main B.S. ECE track. Hold discussion \& office hour weekly. We also holds the first [*JIntegration Bee* competition](https://github.com/sleepymalc/JIntegrationBee)!',
          location: 'Shanghai Jiao Tong University, China',
        }, {
          date: 'Sep. 2020 - Dec. 2020',
          title: 'Instructional Aide',
          description: '**' +
            '[VV186 (Honor Mathematics II)](https://umji.sjtu.edu.cn/~horst/teaching/vv186.html)' +
            '**: ' +
            'Collaborated with the teaching staff as an instructional aide of a 200+ student course on the main B.S. ECE track. Hold discussion \& office hour weekly.',
          location: 'Shanghai Jiao Tong University, China',
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
          location: 'University of Michigan, Michigan, U.S.A.',
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
          location: 'Virtual, Shanghai, China',
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
