module.exports = {
  avatar: 'avatar.png',
  pathPrefix: '',
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  postsForArchivePage: 3,
  siteUrl: 'https://pbb.wtf',
  title: 'Pingbang Hu',
  description: 'Pingbang Hu\'s website.',
  author: 'Pingbang Hu',
  authorAlternative: 'Write-The-Formula',
  professions: [
    'I speak TeX'
  ],
  introduction: [
    'I\'m a first-year Ph.D. student at [*University of Illinois Urbana-Champaign*](https://illinois.edu/) 🌽 advised by [Jiaqi Ma](https://jiaqima.github.io/). I obtained my [dual Bachelor degree](https://www.ji.sjtu.edu.cn/academics/ipo/study-abroad/degree-programs/) from [*University of Michigan*](https://umich.edu/) 〽️ and [*Shanghai Jiao Tong University*](https://www.sjtu.edu.cn/) 🇨🇳.',
    `*I do **Trustworthy Machine Learning Theory** with **math** on **graphs** (sometimes)*. In particular, I enjoy designing *fast*, *robust*, and *fair* algorithms, and developing their theories.`,
    `\>I moved my focus slightly away from **Theoretical Computer Science** on fast graph algorithms. But I still hold a strong interest!`,
    `In my spare time, I do [*street photography*](https://street.pbb.wtf/) 📷 and I'm constantly writing [*course notes*](./posts/Notes) 📝.`,
    `### 🗞️ News`,
    `* 🎉 We publish a [preprint](https://arxiv.org/abs/2404.11577) 📜 on *Machine Unlearning Evaluation*!`,
    `* 🔔 I\'m visiting [National Institute of Informatics](https://www.nii.ac.jp/en/) 🇯🇵 this summer as a research intern!`,
    `### 🔖 Misc`,
    `I\'m from Taiwan 🇹🇼, and my Chinese name is 胡平邦.`
  ],
  education: [
    {
      date: 'Aug. 2023 - Present',
      icon: 'university',
      title: 'Ph.D. in Information Science',
      location: 'School of Information Science, University of Illinois Urbana-Champaign',
    }, {
      date: 'Sep. 2021 - Apr. 2023',
      icon: 'university',
      title: 'B.Sc. in Computer Science (Summa Cum Laude) & minor in Mathematics',
      location: 'College of Engineering & Literature, Science, and the Arts, University of Michigan',
    }, {
      date: 'Sep. 2019 - Aug. 2023',
      icon: 'university',
      title: 'B.Eng. in Electrical and Computer Engineering & minor in Computer Science',
      location: 'UM-SJTU Joint Institute, Shanghai Ciao Tong University',
    }
  ],
  social: [
    {
      url: '/cv.pdf',
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
      url: 'https://X.com/PingbangHu',
      icon: ['fab', 'twitter'],
    },
  ],
  birthday: 'Nov. 10, 2000',
  location: 'Illinois, United States',
  email: 'pbb@illinois.com',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  interests: [
    {
      icon: 'chart-line',
      title: 'High Dimensional Statistics',
    }, {
      icon: 'brain',
      title: 'Learning Theory',
    }, {
      icon: 'chart-network',
      title: 'Graph Neural Network',
    }, {
      icon: `laptop-code`,
      title: `Computational Complexity`,
    }, {
      icon: `hands-usd`,
      title: `Game Theory`,
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
          title: 'Instructional Aide',
          date: 'Jan. 2023 - May 2023',
          location: 'University of Michigan',
          description: '**[EECS475 Introduction to Cryptography](https://mahdi.ch/eecs475/)** (Undergraduate): ' +
            'An introduction to the theoretical cryptography on the B.Sc. CS track. [Notes](../posts/Notes#introduction-to-cryptography-eecs475-university-of-michigan-ta) are available.',
        },
        {
          title: 'Instructional Aide',
          date: 'Sep. 2022 - Dec. 2022',
          location: 'University of Michigan',
          description: '**[EECS572 Randomness and Computation](https://mahdi.ch/eecs572/)** (Graduate): ' +
            'A course about randomness in modern computations on the M.S. CS theory track. [Notes](../posts/Notes#randomness-and-computation-eecs572-university-of-michigan-ta) are available.',
        },
        {
          date: 'May 2021 - Aug. 2021',
          title: 'Teaching Assistant',
          description: '**[VV285 Honor Mathematics III](https://umji.sjtu.edu.cn/~horst/teaching/vv285.html)** (Undergraduate): ' +
            'A follow-up course of VV186 on the B.Eng. ECE track. We also holds the first [*JIntegration Bee* competition](https://github.com/sleepymalc/JIntegrationBee)!',
          location: 'Shanghai Jiao Tong University',
        },
        {
          title: 'Teaching Assistant',
          date: 'Sep. 2020 - Dec. 2020',
          location: 'Shanghai Jiao Tong University',
          description: '**[VV186 Honor Mathematics II](https://umji.sjtu.edu.cn/~horst/teaching/vv186.html)** (Undergraduate): ' +
            'The first rigorous analysis course on the B.Eng. ECE track.',
        },
      ],
    },
    {
      title: 'Reading Group',
      position: 'left',
      data: [
        {
          title: 'Leader',
          date: 'May. 2023 - Dec. 2023',
          location: 'University of Illinois Urbana-Champaign',
          description:
            '**' +
            `Sparse Graph Limit Theory` +
            `**: ` +
            `A thorough reading on [László Lovász](https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Lov%C3%A1sz)'s [Large networks and graph limits](https://lovasz.web.elte.hu//bookxx/hombook-almost.final.pdf), focusing on Chapter 18 and onwards.`,
        },
        {
          title: 'Leader',
          date: 'Jan. 2024 - Current',
          location: 'University of Illinois Urbana-Champaign',
          description:
            '**' +
            `Statistical Learning Theory` +
            `**: ` +
            `A thorough reading on [Roman Vershynin](https://www.math.uci.edu/~rvershyn/)'s [High-Dimensional Probability](https://www.math.uci.edu/~rvershyn/papers/HDP-book/HDP-book.html), focusing on statistical learning theory.`,
        },
      ],
    },
    {
      title: 'Research Experience',
      position: 'right',
      data: [
        {
          title: 'Research Intern',
          date: 'May. 2024 - Aug. 2024',
          location: 'National Institute of Informatics',
          description: '**' +
            'Information Geometry-Formulated ML' +
            '**: ' +
            'Advised by [Mahito Sugiyama](https://mahito.info/index_e.html)',
        },
        {
          title: 'Undergraduate Researcher',
          date: 'Mar. 2022 - Dec. 2022',
          location: 'University of Michigan',
          description: '**' +
            'Finding Minimal Balanced Separators with Detection Sets' +
            '**: ' +
            'Design the first almost linear time algorithm on finding minimal balanced cuts advised by [Thatchaphol Saranurak](https://sites.google.com/site/thsaranurak/)',
        },
        {
          title: 'Undergraduate Researcher',
          date: 'May 2022 - Apr. 2023',
          location: 'University of Michigan',
          description: '**' +
            'Deep Learning Foundation' +
            '**: ' +
            'Develop various techniques to understand deep neural networks advised by [Wei Hu](https://weihu.me/) under the [SURE Program](https://sure.engin.umich.edu/).',
        },
      ],
    },
    {
      title: 'Professional Service',
      position: 'right',
      data: [
        {
          title: 'Conference Reviewer',
          date: '2023 - Current',
          location: 'Virtual',
          description:
            'IEEE BigData *2023*, ICML *2024*',
        },
      ],
    },
    {
      title: 'Software Development',
      position: 'right',
      data: [
        {
          title: 'Backend Developer',
          date: 'Oct. 2020 - Jun. 2021',
          location: 'Virtual',
          description: '**' +
            'foodall' +
            '**: ' +
            'A food order platform in Taiwan, built with *Golang*, *Gin*, and *MongoDB*, with RESTful API design.',
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
  defaultLanguage: 'en',
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  disqusScript: process.env.DISQUS_SCRIPT
    || 'https://tc-imba.disqus.com/embed.js',
  wakatime: {
    username: 'sleepymalc',
    activity: 'eb201619-dfe8-485e-b683-11ce3475ad61',
    language: 'cccb943f-2bfc-47e5-b218-c56b858c1a90',
  },
};
