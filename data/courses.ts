export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'ai-ethics' | 'philosophy' | 'theology' | 'leadership' | 'critical-thinking' | 'humanities' | 'history' | 'literature' | 'art-history';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in weeks
  hours: number; // total hours
  lessons: number;
  instructor: {
    id: string;
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  studentsEnrolled: number;
  language: string[];
  thumbnail: string;
  lastUpdated: Date;
  syllabus: Array<{
    week: number;
    title: string;
    topics: string[];
  }>;
  requirements: string[];
  outcomes: string[];
  featured: boolean;
}

export const mockCourses: Course[] = [
  // AI Ethics Courses
  {
    id: 'ai-ethics-001',
    title: 'AI Ethics: Building Humane Technology',
    description: 'Explore the ethical implications of artificial intelligence with a former OpenAI ethics researcher. Learn how to build technology that serves humanity while addressing bias, fairness, and moral responsibility in AI systems.',
    category: 'ai-ethics',
    level: 'beginner',
    duration: 8,
    hours: 32,
    lessons: 24,
    instructor: {
      id: 'inst-001',
      name: 'Dr. Dario Chen',
      title: 'Former OpenAI Ethics Researcher & AI Safety Advocate',
      avatar: '/instructors/dario-chen.jpg',
      bio: 'Former lead ethics researcher at OpenAI, Dr. Chen spent 5 years developing ethical frameworks for large language models. Now focuses on teaching responsible AI development to the next generation.',
    },
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviews: 312,
    studentsEnrolled: 2847,
    language: ['en'],
    thumbnail: '/study/AI Ethics Building Humane Technology.jpg',
    lastUpdated: new Date('2024-08-15'),
    syllabus: [
      {
        week: 1,
        title: 'The Moral Weight of Code',
        topics: ['AI impact on human autonomy', 'Ethical decision-making frameworks', 'Case studies from tech giants'],
      },
      {
        week: 2,
        title: 'Bias and Fairness in AI',
        topics: ['Identifying algorithmic bias', 'Fairness metrics and trade-offs', 'Building inclusive datasets'],
      },
      {
        week: 3,
        title: 'Privacy and Surveillance',
        topics: ['Data privacy in AI systems', 'Surveillance capitalism', 'GDPR and AI regulation'],
      },
    ],
    requirements: ['Basic understanding of technology', 'Interest in ethics and philosophy', 'Open mind to complex moral questions'],
    outcomes: [
      'Understand key ethical frameworks for AI development',
      'Identify and address bias in AI systems',
      'Develop skills for ethical decision-making in technology',
      'Create actionable strategies for responsible AI deployment',
    ],
    featured: true,
  },
  {
    id: 'ai-ethics-002',
    title: 'The Future of Human Agency in an AI World',
    description: 'Join a former Google DeepMind researcher to explore how artificial intelligence is reshaping human autonomy, decision-making, and free will. Critical insights for leaders navigating the AI transformation.',
    category: 'ai-ethics',
    level: 'intermediate',
    duration: 10,
    hours: 40,
    lessons: 30,
    instructor: {
      id: 'inst-002',
      name: 'Dr. Priya Sharma',
      title: 'Former Google DeepMind Researcher & Human-AI Interaction Specialist',
      avatar: '/instructors/priya-sharma.jpg',
      bio: 'Dr. Sharma led human-centered AI research at Google DeepMind for 6 years, focusing on preserving human agency in automated systems. Published over 30 papers on AI-human collaboration.',
    },
    price: 399,
    rating: 4.8,
    reviews: 312,
    studentsEnrolled: 1923,
    language: ['en'],
    thumbnail: '/study/The Future of Human Agency in an AI World.jpg',
    lastUpdated: new Date('2024-08-20'),
    syllabus: [
      {
        week: 1,
        title: 'Understanding Human Agency',
        topics: ['What is human agency and free will?', 'How AI challenges traditional notions of autonomy', 'The philosophy of mind in the digital age'],
      },
      {
        week: 2,
        title: 'AI and Decision-Making',
        topics: ['Algorithmic decision-making systems', 'The delegation of choice to machines', 'Preserving meaningful human decisions'],
      },
      {
        week: 3,
        title: 'The Attention Economy',
        topics: ['How AI captures and directs human attention', 'Digital addiction and behavioral manipulation', 'Reclaiming cognitive sovereignty'],
      },
      {
        week: 4,
        title: 'Predictive Systems and Free Will',
        topics: ['When AI knows us better than we know ourselves', 'Prediction vs predetermination', 'The feedback loop of algorithmic influence'],
      },
      {
        week: 5,
        title: 'Human-AI Collaboration Models',
        topics: ['Augmentation vs replacement paradigms', 'Designing systems that enhance human agency', 'Case studies from leading tech companies'],
      },
      {
        week: 6,
        title: 'Digital Rights and Human Dignity',
        topics: ['Privacy as a foundation of autonomy', 'The right to be forgotten', 'Digital personhood and identity'],
      },
      {
        week: 7,
        title: 'Ethical Frameworks for AI Governance',
        topics: ['Value alignment problems', 'Democratic control of AI systems', 'International cooperation on AI ethics'],
      },
      {
        week: 8,
        title: 'The Future of Work and Purpose',
        topics: ['Automation and human meaning', 'Redefining work in an AI economy', 'Universal basic income and human flourishing'],
      },
      {
        week: 9,
        title: 'Education and Human Development',
        topics: ['AI in education: tool or teacher?', 'Developing uniquely human capabilities', 'Lifelong learning in rapid change'],
      },
      {
        week: 10,
        title: 'Building Agency-Preserving Systems',
        topics: ['Design principles for human-centered AI', 'Transparency and explainability', 'Creating your action plan for ethical AI leadership'],
      },
    ],
    requirements: ['Some background in philosophy or technology', 'Leadership or management experience helpful'],
    outcomes: [
      'Analyze the impact of AI on human autonomy',
      'Design systems that preserve human agency',
      'Lead organizations through AI transformation ethically',
      'Develop frameworks for human-AI collaboration',
    ],
    featured: true,
  },

  // Philosophy Courses
  {
    id: 'philosophy-001',
    title: 'Existentialism for the AI Age: Finding Meaning in Automated Times',
    description: 'Explore existentialist philosophy through the lens of artificial intelligence and automation. Learn how Sartre, Camus, and de Beauvoir can guide us through the anxiety of technological displacement.',
    category: 'philosophy',
    level: 'beginner',
    duration: 12,
    hours: 48,
    lessons: 36,
    instructor: {
      id: 'inst-003',
      name: 'Prof. Marcus Williams',
      title: 'Philosophy Professor & Former Microsoft Research Ethicist',
      avatar: '/instructors/marcus-williams.jpg',
      bio: 'Professor Williams spent 8 years at Microsoft Research before returning to academia. Specializes in existentialist philosophy and its applications to modern technology dilemmas.',
    },
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    reviews: 312,
    studentsEnrolled: 3241,
    language: ['en'],
    thumbnail: '/study/Existentialism for the AI Age Finding Meaning in Automated.jpg',
    lastUpdated: new Date('2024-08-10'),
    syllabus: [
      {
        week: 1,
        title: 'The Absurd and the Algorithm',
        topics: ['Camus and technological meaninglessness', 'Finding purpose in automated systems', 'Rebellion against algorithmic determinism'],
      },
      {
        week: 2,
        title: 'Authentic Existence vs Digital Identity',
        topics: ['Sartre on bad faith and social media', 'Creating authentic digital selves', 'Freedom and responsibility in digital spaces'],
      },
    ],
    requirements: ['Curiosity about meaning and purpose', 'Willingness to engage with philosophical concepts', 'Experience with modern technology'],
    outcomes: [
      'Apply existentialist concepts to modern technological challenges',
      'Develop frameworks for authentic living in digital age',
      'Create personal philosophies resistant to technological anxiety',
      'Build resilience against meaninglessness in automated world',
    ],
    featured: true,
  },
  {
    id: 'philosophy-002',
    title: 'Stoicism and Digital Resilience',
    description: 'Learn how ancient Stoic wisdom from Marcus Aurelius, Epictetus, and Seneca can help you maintain inner peace and rational thinking in our hyperconnected, AI-driven world.',
    category: 'philosophy',
    level: 'beginner',
    duration: 8,
    hours: 32,
    lessons: 24,
    instructor: {
      id: 'inst-004',
      name: 'Dr. Alexandra Reed',
      title: 'Stoic Philosophy Scholar & Former Tesla AI Ethics Advisor',
      avatar: '/instructors/alexandra-reed.jpg',
      bio: 'Dr. Reed advised Tesla on AI ethics while maintaining her research in Stoic philosophy. Author of "Digital Stoicism: Ancient Wisdom for Modern Anxiety".',
    },
    price: 249,
    rating: 4.9,
    reviews: 312,
    studentsEnrolled: 4156,
    language: ['en'],
    thumbnail: '/study/Stoicism and Digital Resilience.jpg',
    lastUpdated: new Date('2024-08-18'),
    syllabus: [
      {
        week: 1,
        title: 'Foundations of Stoicism',
        topics: ['The Stoic worldview and physics', 'Key figures: Marcus Aurelius, Epictetus, Seneca', 'Core concepts: virtue, wisdom, and the dichotomy of control'],
      },
      {
        week: 2,
        title: 'The Dichotomy of Control in Digital Life',
        topics: ['What we can and cannot control online', 'Social media and external validation', 'Building internal metrics for success'],
      },
      {
        week: 3,
        title: 'Emotional Resilience in Information Overload',
        topics: ['Managing digital anxiety and FOMO', 'The Stoic approach to news consumption', 'Practicing negative visualization for tech failures'],
      },
      {
        week: 4,
        title: 'Digital Minimalism and Stoic Simplicity',
        topics: ['Voluntary discomfort in the comfort economy', 'Essential vs non-essential technology', 'Creating boundaries with digital tools'],
      },
      {
        week: 5,
        title: 'Virtue Ethics in Online Interactions',
        topics: ['Practicing justice in anonymous spaces', 'Courage in digital discourse', 'Wisdom in information sharing'],
      },
      {
        week: 6,
        title: 'Amor Fati and Technological Change',
        topics: ['Embracing inevitable technological shifts', 'Finding opportunity in disruption', 'The Stoic approach to career transitions'],
      },
      {
        week: 7,
        title: 'Morning Reflections and Evening Reviews',
        topics: ['Adapting Marcus Aurelius for the digital age', 'Daily practices for digital wellness', 'Journaling in a hyperconnected world'],
      },
      {
        week: 8,
        title: 'Building Your Digital Stoic Practice',
        topics: ['Creating personal operating principles', 'Community and accountability', 'Long-term sustainability of practice'],
      },
    ],
    requirements: ['Interest in philosophy and self-improvement', 'Basic familiarity with digital technology', 'Commitment to daily practice'],
    outcomes: [
      'Master Stoic techniques for digital age stress management',
      'Develop emotional resilience to technological change',
      'Create sustainable practices for digital wellness',
      'Build rational frameworks for technology decision-making',
    ],
    featured: false,
  },

  // Theology Courses
  {
    id: 'theology-001',
    title: 'Technology and the Sacred: Theological Perspectives on AI',
    description: 'Explore how AI challenges traditional notions of creation, consciousness, and the divine. A thoughtful examination of technology through Christian, Jewish, Islamic, and Buddhist theological lenses.',
    category: 'theology',
    level: 'intermediate',
    duration: 10,
    hours: 40,
    lessons: 30,
    instructor: {
      id: 'inst-005',
      name: 'Rev. Dr. Sarah Thompson',
      title: 'Theologian & Former Amazon AI Ethics Committee Member',
      avatar: '/instructors/sarah-thompson.jpg',
      bio: 'Rev. Dr. Thompson served on Amazon\'s AI Ethics Committee while completing her doctorate in theological ethics. Bridges technology and faith communities worldwide.',
    },
    price: 379,
    rating: 4.8,
    reviews: 312,
    studentsEnrolled: 1543,
    language: ['en'],
    thumbnail: '/study/Technology and the Sacred Theological Perspectives on AI.jpg',
    lastUpdated: new Date('2024-08-12'),
    syllabus: [
      {
        week: 1,
        title: 'Creation and Artificial Creation',
        topics: ['Divine creation vs human creation', 'The imago Dei and artificial beings', 'Can machines have souls?', 'Eastern and Western perspectives on consciousness'],
      },
      {
        week: 2,
        title: 'Christian Perspectives on AI',
        topics: ['Technology in Christian theology', 'Stewardship of creation and technology', 'The Tower of Babel and technological hubris', 'AI and Christian ethics'],
      },
      {
        week: 3,
        title: 'Jewish Thought and Technology',
        topics: ['The Golem tradition and artificial life', 'Tikkun Olam and technological progress', 'Sabbath and digital boundaries', 'Rabbinic perspectives on AI ethics'],
      },
      {
        week: 4,
        title: 'Islamic Views on AI and Innovation',
        topics: ['Khalifa (stewardship) and technology', 'Ijtihad and technological innovation', 'AI and Islamic finance', 'Halal technology principles'],
      },
      {
        week: 5,
        title: 'Buddhist Philosophy and AI',
        topics: ['Consciousness and Buddha nature', 'Mindfulness in the digital age', 'Compassion for artificial beings', 'The Middle Way in technology'],
      },
      {
        week: 6,
        title: 'Hindu Perspectives on Technology',
        topics: ['Maya and virtual reality', 'Karma in algorithmic systems', 'Dharma and ethical AI', 'Technology in Hindu cosmology'],
      },
      {
        week: 7,
        title: 'Transhumanism and Religious Response',
        topics: ['The singularity and eschatology', 'Enhancement vs sanctification', 'Immortality: technological vs spiritual', 'Religious critiques of transhumanism'],
      },
      {
        week: 8,
        title: 'Prayer, Meditation, and Digital Practice',
        topics: ['Apps and spiritual practice', 'Virtual religious communities', 'AI spiritual advisors', 'Authenticity in digital worship'],
      },
      {
        week: 9,
        title: 'Prophetic Voice in Tech Ethics',
        topics: ['Speaking truth to tech power', 'Religious advocacy for AI justice', 'Interfaith cooperation on AI ethics', 'Building bridges between Silicon Valley and faith'],
      },
      {
        week: 10,
        title: 'Sacred Imagination for Future Tech',
        topics: ['Theological vision for technology', 'Hope and apocalypse in AI discourse', 'Creating technology that serves the sacred', 'Your role as a faithful technologist'],
      },
    ],
    requirements: ['Interest in theology or religious studies', 'Open to interfaith dialogue', 'Basic understanding of AI concepts'],
    outcomes: [
      'Understand theological implications of artificial intelligence',
      'Develop frameworks for faithful engagement with technology',
      'Navigate moral questions about AI from religious perspectives',
      'Build bridges between faith and technological communities',
    ],
    featured: true,
  },
  {
    id: 'theology-002',
    title: 'Digital Sabbath: Reclaiming Sacred Time in the Age of AI',
    description: 'Learn how ancient practices of rest and reflection can provide refuge from the relentless pace of AI-driven society. Practical theology for digital overwhelm.',
    category: 'theology',
    level: 'beginner',
    duration: 6,
    hours: 24,
    lessons: 18,
    instructor: {
      id: 'inst-006',
      name: 'Rabbi David Goldman',
      title: 'Technology Ethics Rabbi & Former Apple Privacy Consultant',
      avatar: '/instructors/david-goldman.jpg',
      bio: 'Rabbi Goldman consulted for Apple on privacy ethics while developing digital wellness practices for his congregation. Expert in applying ancient wisdom to modern technology challenges.',
    },
    price: 199,
    rating: 4.9,
    reviews: 312,
    studentsEnrolled: 2987,
    language: ['en'],
    thumbnail: '/study/Digital Sabbath Reclaiming Sacred Time in the Age of AI.jpg',
    lastUpdated: new Date('2024-08-25'),
    syllabus: [
      {
        week: 1,
        title: 'The Ancient Practice of Sabbath',
        topics: ['Biblical origins and wisdom of rest', 'Sabbath across religious traditions', 'The rhythm of work and rest', 'Why rest is counter-cultural today'],
      },
      {
        week: 2,
        title: 'Digital Overwhelm and Spiritual Exhaustion',
        topics: ['The always-on culture', 'Attention as a spiritual resource', 'Digital fatigue and burnout', 'The cost of constant connectivity'],
      },
      {
        week: 3,
        title: 'Creating Sacred Boundaries',
        topics: ['Setting digital limits with intention', 'Family and community agreements', 'Workplace boundaries', 'The art of saying no'],
      },
      {
        week: 4,
        title: 'Practices for Digital Detox',
        topics: ['Gradual vs complete disconnection', 'Alternative activities and rituals', 'Managing withdrawal and FOMO', 'Building offline habits'],
      },
      {
        week: 5,
        title: 'Community and Accountability',
        topics: ['Finding your digital sabbath community', 'Family practices and children', 'Navigating social pressures', 'Creating supportive structures'],
      },
      {
        week: 6,
        title: 'Integration and Sustainability',
        topics: ['Making it a lifestyle not a rule', 'Flexibility and grace', 'Long-term transformation', 'Your personal sabbath practice'],
      },
    ],
    requirements: ['Interest in spiritual practices', 'Struggles with digital overwhelm', 'Willingness to experiment with tech boundaries'],
    outcomes: [
      'Create sustainable rhythms of technology use',
      'Develop spiritual practices for digital age',
      'Design personal digital sabbath practices',
      'Build community around mindful technology use',
    ],
    featured: false,
  },

  // Critical Thinking Courses
  {
    id: 'critical-thinking-001',
    title: 'Thinking Clearly in the Age of Algorithms',
    description: 'Develop the critical thinking skills essential for navigating an AI-influenced world. Learn to identify misinformation, evaluate AI-generated content, and make sound decisions amid information overload.',
    category: 'critical-thinking',
    level: 'beginner',
    duration: 8,
    hours: 32,
    lessons: 24,
    instructor: {
      id: 'inst-007',
      name: 'Dr. James Mitchell',
      title: 'Cognitive Scientist & Former Facebook AI Research Director',
      avatar: '/instructors/james-mitchell.jpg',
      bio: 'Dr. Mitchell led AI research at Facebook (Meta) for 4 years before dedicating himself to media literacy education. Expert in how AI systems influence human cognition and decision-making.',
    },
    price: 279,
    originalPrice: 379,
    rating: 4.8,
    reviews: 312,
    studentsEnrolled: 3764,
    language: ['en'],
    thumbnail: '/study/Thinking Clearly in the Age of Algorithms.jpg',
    lastUpdated: new Date('2024-08-22'),
    syllabus: [
      {
        week: 1,
        title: 'Understanding Algorithmic Influence',
        topics: ['How algorithms shape perception', 'Filter bubbles and echo chambers', 'The attention economy explained', 'Recognizing algorithmic bias'],
      },
      {
        week: 2,
        title: 'Information Literacy 2.0',
        topics: ['Evaluating digital sources', 'Fact-checking methodologies', 'Understanding data manipulation', 'Media literacy frameworks'],
      },
      {
        week: 3,
        title: 'Cognitive Biases in Digital Spaces',
        topics: ['Confirmation bias online', 'Availability heuristic and viral content', 'Anchoring effects in search results', 'Overcoming digital cognitive traps'],
      },
      {
        week: 4,
        title: 'AI-Generated Content Detection',
        topics: ['Identifying deepfakes', 'Recognizing AI-written text', 'Synthetic media analysis', 'Tools and techniques for verification'],
      },
      {
        week: 5,
        title: 'Critical Analysis of Data',
        topics: ['Statistics and manipulation', 'Visualization tricks and truths', 'Correlation vs causation online', 'Data literacy essentials'],
      },
      {
        week: 6,
        title: 'Building Mental Firewalls',
        topics: ['Slow thinking in fast media', 'Creating verification habits', 'Emotional regulation online', 'Maintaining skeptical optimism'],
      },
      {
        week: 7,
        title: 'Social Media and Collective Intelligence',
        topics: ['Crowd wisdom vs mob mentality', 'Network effects on thinking', 'Building truth-seeking communities', 'Collaborative fact-checking'],
      },
      {
        week: 8,
        title: 'Your Personal Information Diet',
        topics: ['Curating quality sources', 'Balancing perspectives', 'Information hygiene practices', 'Creating your critical thinking toolkit'],
      },
    ],
    requirements: ['Regular internet usage', 'Concern about misinformation', 'Willingness to question assumptions'],
    outcomes: [
      'Identify AI-generated content and deepfakes',
      'Develop frameworks for evaluating information credibility',
      'Build mental models resistant to algorithmic manipulation',
      'Create personal systems for fact-checking and verification',
    ],
    featured: true,
  },
  {
    id: 'critical-thinking-002',
    title: 'Logical Reasoning for Human Advantage',
    description: 'Master the logical reasoning skills that remain uniquely human in an AI world. Learn advanced argumentation, fallacy detection, and creative problem-solving that complement AI capabilities.',
    category: 'critical-thinking',
    level: 'intermediate',
    duration: 10,
    hours: 40,
    lessons: 30,
    instructor: {
      id: 'inst-008',
      name: 'Prof. Elena Rodriguez',
      title: 'Logic Professor & Former IBM Watson Research Scientist',
      avatar: '/instructors/elena-rodriguez.jpg',
      bio: 'Professor Rodriguez worked on IBM Watson\'s reasoning systems before becoming a champion of human logical thinking. Author of "The Logic Advantage: What Humans Can Do That AI Cannot".',
    },
    price: 329,
    rating: 4.7,
    reviews: 312,
    studentsEnrolled: 2134,
    language: ['en'],
    thumbnail: '/study/Logical Reasoning for Human Advantage.jpg',
    lastUpdated: new Date('2024-08-19'),
    syllabus: [
      {
        week: 1,
        title: 'Foundations of Human Logic',
        topics: ['Formal vs informal logic', 'Deductive and inductive reasoning', 'What makes human reasoning unique', 'Logic that AI struggles with'],
      },
      {
        week: 2,
        title: 'Advanced Argument Analysis',
        topics: ['Premise and conclusion identification', 'Hidden assumptions', 'Argument reconstruction', 'Charity and steel-manning'],
      },
      {
        week: 3,
        title: 'Fallacy Detection and Response',
        topics: ['Common logical fallacies', 'Fallacies in digital discourse', 'Responding constructively', 'When fallacies aren\'t fallacious'],
      },
      {
        week: 4,
        title: 'Moral and Ethical Reasoning',
        topics: ['Values-based logic', 'Ethical frameworks', 'Moral paradoxes AI can\'t solve', 'Navigating ethical complexity'],
      },
      {
        week: 5,
        title: 'Creative and Lateral Thinking',
        topics: ['Breaking logical constraints', 'Innovative problem-solving', 'Synthesis and creativity', 'Combining logic with intuition'],
      },
      {
        week: 6,
        title: 'Contextual and Cultural Logic',
        topics: ['Context-dependent reasoning', 'Cultural logic systems', 'Understanding different worldviews', 'When logic is culturally relative'],
      },
      {
        week: 7,
        title: 'Probabilistic and Fuzzy Reasoning',
        topics: ['Thinking in probabilities', 'Dealing with uncertainty', 'Bayesian thinking for humans', 'Gray areas and fuzzy logic'],
      },
      {
        week: 8,
        title: 'Meta-Reasoning and Wisdom',
        topics: ['Reasoning about reasoning', 'When to trust logic vs intuition', 'Practical wisdom (phronesis)', 'Limits of pure logic'],
      },
      {
        week: 9,
        title: 'Argumentation in Practice',
        topics: ['Constructing compelling arguments', 'Persuasion vs manipulation', 'Debate and dialogue skills', 'Written argumentation'],
      },
      {
        week: 10,
        title: 'Logic for Leadership and Decision-Making',
        topics: ['Strategic reasoning', 'Decision trees and frameworks', 'Group decision-making', 'Your logical leadership style'],
      },
    ],
    requirements: ['Basic critical thinking skills', 'Comfort with abstract concepts', 'Desire to improve reasoning abilities'],
    outcomes: [
      'Master advanced logical reasoning techniques',
      'Identify and counter logical fallacies effectively',
      'Develop creative problem-solving approaches that AI cannot replicate',
      'Build argumentation skills for complex ethical dilemmas',
    ],
    featured: false,
  },

  // Leadership Courses
  {
    id: 'leadership-001',
    title: 'Leading Humans in the Age of Artificial Intelligence',
    description: 'Transform your leadership approach for AI-augmented teams. Learn to manage human-AI collaboration, maintain team morale during automation, and lead with empathy in technological transformation.',
    category: 'leadership',
    level: 'advanced',
    duration: 12,
    hours: 48,
    lessons: 36,
    instructor: {
      id: 'inst-009',
      name: 'Dr. Michael Park',
      title: 'Former Microsoft VP of AI & Leadership Development Expert',
      avatar: '/instructors/michael-park.jpg',
      bio: 'Dr. Park led Microsoft\'s AI division for 7 years, managing teams of 500+ engineers through the AI revolution. Now helps leaders navigate human-centered transformation in automated workplaces.',
    },
    price: 499,
    originalPrice: 699,
    rating: 4.9,
    reviews: 312,
    studentsEnrolled: 1876,
    language: ['en'],
    thumbnail: '/study/Leading Humans in the Age of Artificial Intelligence.jpg',
    lastUpdated: new Date('2024-08-14'),
    syllabus: [
      {
        week: 1,
        title: 'The New Leadership Paradigm',
        topics: ['Leadership in the AI era', 'Human vs machine strengths', 'The evolving role of leaders', 'Building trust in automated environments'],
      },
      {
        week: 2,
        title: 'Understanding AI for Leaders',
        topics: ['AI capabilities and limitations', 'Machine learning basics for executives', 'Identifying automation opportunities', 'AI readiness assessment'],
      },
      {
        week: 3,
        title: 'Managing Human-AI Teams',
        topics: ['Hybrid team dynamics', 'Task allocation strategies', 'Communication in augmented teams', 'Performance management with AI'],
      },
      {
        week: 4,
        title: 'Addressing Automation Anxiety',
        topics: ['Understanding employee fears', 'Transparent communication strategies', 'Reskilling and upskilling programs', 'Creating psychological safety'],
      },
      {
        week: 5,
        title: 'Preserving Human Culture',
        topics: ['Maintaining team cohesion', 'Celebrating human achievements', 'Building meaning and purpose', 'Rituals and traditions in digital workplaces'],
      },
      {
        week: 6,
        title: 'Ethical Leadership in AI Implementation',
        topics: ['Fairness in algorithmic decisions', 'Privacy and surveillance concerns', 'Accountability frameworks', 'Leading by ethical example'],
      },
      {
        week: 7,
        title: 'Innovation and Creativity Leadership',
        topics: ['Fostering human creativity', 'Innovation in the age of AI', 'Experimentation and failure', 'Building learning organizations'],
      },
      {
        week: 8,
        title: 'Emotional Intelligence and Empathy',
        topics: ['EQ as competitive advantage', 'Empathetic leadership practices', 'Managing emotional labor', 'Supporting mental health'],
      },
      {
        week: 9,
        title: 'Strategic Workforce Planning',
        topics: ['Future of work scenarios', 'Skills gap analysis', 'Succession planning with AI', 'Building adaptive organizations'],
      },
      {
        week: 10,
        title: 'Change Management for AI Transformation',
        topics: ['Leading digital transformation', 'Stakeholder management', 'Measuring transformation success', 'Sustaining change momentum'],
      },
      {
        week: 11,
        title: 'Global and Remote Leadership',
        topics: ['Leading distributed AI-augmented teams', 'Cross-cultural considerations', 'Asynchronous collaboration', 'Building virtual community'],
      },
      {
        week: 12,
        title: 'Your Leadership Action Plan',
        topics: ['Personal leadership philosophy', 'Implementation roadmap', 'Building your support network', 'Continuous learning and adaptation'],
      },
    ],
    requirements: ['Leadership or management experience', 'Teams experiencing AI transformation', 'Commitment to human-centered leadership'],
    outcomes: [
      'Design effective human-AI collaborative workflows',
      'Lead teams through technological anxiety and change',
      'Develop empathetic leadership practices for AI era',
      'Create organizational cultures that value human uniqueness',
    ],
    featured: true,
  },
  {
    id: 'leadership-002',
    title: 'Ethical Leadership in Technology Organizations',
    description: 'Build the moral courage and ethical frameworks needed to lead responsibly in tech. Learn from leaders who have faced real ethical dilemmas in AI development and deployment.',
    category: 'leadership',
    level: 'advanced',
    duration: 8,
    hours: 32,
    lessons: 24,
    instructor: {
      id: 'inst-010',
      name: 'Dr. Lisa Wang',
      title: 'Former Google AI Ethics Co-Lead & Organizational Psychologist',
      avatar: '/instructors/lisa-wang.jpg',
      bio: 'Dr. Wang co-founded Google\'s AI ethics team and navigated high-stakes ethical decisions affecting billions of users. Expert in building ethical cultures within fast-moving technology organizations.',
    },
    price: 449,
    rating: 4.8,
    reviews: 312,
    studentsEnrolled: 1432,
    language: ['en'],
    thumbnail: '/study/Ethical Leadership in Technology Organizations.jpg',
    lastUpdated: new Date('2024-08-16'),
    syllabus: [
      {
        week: 1,
        title: 'Foundations of Ethical Leadership',
        topics: ['Ethical frameworks for technology', 'Moral courage in organizations', 'Personal values clarification', 'The cost of unethical behavior'],
      },
      {
        week: 2,
        title: 'Power, Influence, and Responsibility',
        topics: ['Understanding tech power dynamics', 'Influence without authority', 'Responsibility to stakeholders', 'Speaking truth to power'],
      },
      {
        week: 3,
        title: 'Building Ethical Culture',
        topics: ['Culture vs compliance', 'Psychological safety for ethics', 'Reward systems and incentives', 'Role modeling ethical behavior'],
      },
      {
        week: 4,
        title: 'Navigating Ethical Dilemmas',
        topics: ['Common tech ethics dilemmas', 'Decision-making frameworks', 'Stakeholder analysis', 'Long-term vs short-term thinking'],
      },
      {
        week: 5,
        title: 'Privacy, Security, and Trust',
        topics: ['Data ethics and governance', 'Security as ethical imperative', 'Building user trust', 'Transparency and consent'],
      },
      {
        week: 6,
        title: 'Diversity, Equity, and Inclusion',
        topics: ['Bias in technology and teams', 'Inclusive product development', 'Equitable hiring and promotion', 'Creating belonging'],
      },
      {
        week: 7,
        title: 'Whistleblowing and Dissent',
        topics: ['Creating safe reporting channels', 'Protecting whistleblowers', 'Constructive dissent', 'Learning from ethical failures'],
      },
      {
        week: 8,
        title: 'Leading Through Crisis',
        topics: ['Ethical decision-making under pressure', 'Crisis communication', 'Rebuilding after ethical failures', 'Preventive measures'],
      },
    ],
    requirements: ['Leadership role in technology sector', 'Experience with ethical dilemmas', 'Commitment to responsible innovation'],
    outcomes: [
      'Develop frameworks for ethical decision-making under pressure',
      'Build organizational cultures that prioritize ethics',
      'Navigate conflicts between profit and principle',
      'Create accountability systems for ethical technology development',
    ],
    featured: false,
  },

  // Humanities Courses
  {
    id: 'humanities-001',
    title: 'The Irreplaceable Human: Skills AI Cannot Master',
    description: 'Discover and develop the uniquely human capabilities that remain essential in an AI world. Focus on creativity, emotional intelligence, moral reasoning, and complex communication that define human value.',
    category: 'humanities',
    level: 'beginner',
    duration: 10,
    hours: 40,
    lessons: 30,
    instructor: {
      id: 'inst-011',
      name: 'Dr. Rebecca Martinez',
      title: 'Humanities Scholar & Former OpenAI Policy Researcher',
      avatar: '/instructors/rebecca-martinez.jpg',
      bio: 'Dr. Martinez researched AI policy implications at OpenAI while maintaining her scholarship in human capabilities. Leading advocate for humanities education in the AI era.',
    },
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 312,
    studentsEnrolled: 4521,
    language: ['en'],
    thumbnail: '/study/The Irreplaceable Human Skills AI Cannot Master.jpg',
    lastUpdated: new Date('2024-08-21'),
    syllabus: [
      {
        week: 1,
        title: 'Understanding Human Uniqueness',
        topics: ['What makes humans irreplaceable', 'Consciousness and subjective experience', 'The limits of artificial intelligence', 'Your unique human value proposition'],
      },
      {
        week: 2,
        title: 'Emotional Intelligence and Empathy',
        topics: ['Reading emotional nuance', 'Genuine empathy vs simulated responses', 'Emotional contagion and connection', 'Building deep human relationships'],
      },
      {
        week: 3,
        title: 'Creative and Original Thinking',
        topics: ['True creativity vs recombination', 'Breaking paradigms and rules', 'Artistic expression and meaning', 'Innovation from human experience'],
      },
      {
        week: 4,
        title: 'Complex Communication and Storytelling',
        topics: ['Narrative and meaning-making', 'Subtext and implication', 'Cultural context in communication', 'Persuasion and inspiration'],
      },
      {
        week: 5,
        title: 'Moral Reasoning and Ethics',
        topics: ['Value judgments and trade-offs', 'Ethical intuition and wisdom', 'Moral courage and sacrifice', 'Living with ethical complexity'],
      },
      {
        week: 6,
        title: 'Physical and Embodied Intelligence',
        topics: ['Body-mind connection', 'Tacit knowledge and skill', 'Sensory intelligence', 'Physical presence and energy'],
      },
      {
        week: 7,
        title: 'Social and Cultural Intelligence',
        topics: ['Reading social dynamics', 'Cultural fluency and code-switching', 'Building community and belonging', 'Collective intelligence'],
      },
      {
        week: 8,
        title: 'Wisdom and Judgment',
        topics: ['Experience-based insight', 'Paradox and contradiction', 'Knowing when to break rules', 'Long-term perspective'],
      },
      {
        week: 9,
        title: 'Humor and Playfulness',
        topics: ['The complexity of humor', 'Spontaneity and surprise', 'Play as learning and bonding', 'Joy and human connection'],
      },
      {
        week: 10,
        title: 'Developing Your Human Edge',
        topics: ['Personal capability assessment', 'Skill development strategies', 'Creating your unique value', 'Future-proofing your humanity'],
      },
    ],
    requirements: ['Curiosity about human potential', 'Interest in personal development', 'Willingness to explore creative practices'],
    outcomes: [
      'Identify and strengthen uniquely human capabilities',
      'Develop advanced emotional intelligence and empathy',
      'Master complex communication and storytelling skills',
      'Build creative problem-solving abilities that complement AI',
    ],
    featured: true,
  },
  {
    id: 'humanities-002',
    title: 'Wisdom Traditions for Technological Times',
    description: 'Explore how ancient wisdom traditions from around the world offer guidance for modern technological challenges. A comparative study of human wisdom across cultures and centuries.',
    category: 'humanities',
    level: 'intermediate',
    duration: 14,
    hours: 56,
    lessons: 42,
    instructor: {
      id: 'inst-012',
      name: 'Prof. Chen Wei-Ming',
      title: 'Comparative Religion Scholar & Former Baidu AI Ethics Advisor',
      avatar: '/instructors/chen-wei-ming.jpg',
      bio: 'Professor Chen advised Baidu on AI ethics from Eastern philosophical perspectives. World-renowned expert in applying ancient wisdom to contemporary technological challenges.',
    },
    price: 379,
    rating: 4.8,
    reviews: 312,
    studentsEnrolled: 2654,
    language: ['en'],
    thumbnail: '/study/Wisdom Traditions for Technological Times.jpg',
    lastUpdated: new Date('2024-08-17'),
    syllabus: [
      {
        week: 1,
        title: 'Introduction to World Wisdom',
        topics: ['What is wisdom across cultures', 'Perennial philosophy', 'Why ancient wisdom matters now', 'Your wisdom heritage'],
      },
      {
        week: 2,
        title: 'Greek Philosophy and Reason',
        topics: ['Socratic wisdom and questioning', 'Aristotelian virtue ethics', 'Stoic resilience for modern life', 'Applying Greek wisdom to technology'],
      },
      {
        week: 3,
        title: 'Eastern Philosophy: Taoism and Balance',
        topics: ['Wu wei and effortless action', 'Yin-yang in digital life', 'The Tao of technology', 'Finding flow in information streams'],
      },
      {
        week: 4,
        title: 'Buddhist Mindfulness and Awareness',
        topics: ['Mindfulness in digital spaces', 'Non-attachment to technology', 'Compassion in online interactions', 'The middle way with tech'],
      },
      {
        week: 5,
        title: 'Confucian Ethics and Society',
        topics: ['Relationships and technology', 'Digital ritual and propriety', 'Continuous learning (junzi)', 'Harmony in online communities'],
      },
      {
        week: 6,
        title: 'Indigenous Wisdom and Connection',
        topics: ['Relationship with nature and tech', 'Circular vs linear thinking', 'Community-centered approaches', 'Seven generations thinking'],
      },
      {
        week: 7,
        title: 'Islamic Wisdom and Balance',
        topics: ['Moderation (wasatiyyah) in tech use', 'Knowledge and wisdom (ilm and hikmah)', 'Community (ummah) online', 'Ethical commerce and technology'],
      },
      {
        week: 8,
        title: 'Christian Contemplative Traditions',
        topics: ['Contemplation vs consumption', 'Sabbath and digital rest', 'Service and technology', 'Love in the age of algorithms'],
      },
      {
        week: 9,
        title: 'Jewish Wisdom and Learning',
        topics: ['Study and debate tradition', 'Tikkun olam and tech', 'Sabbath boundaries', 'Questions as wisdom'],
      },
      {
        week: 10,
        title: 'Hindu Philosophy and Consciousness',
        topics: ['Levels of consciousness and AI', 'Dharma in digital age', 'Karma and online actions', 'Maya and virtual reality'],
      },
      {
        week: 11,
        title: 'African Ubuntu Philosophy',
        topics: ['I am because we are', 'Community-first technology', 'Oral tradition in digital age', 'Collective wisdom'],
      },
      {
        week: 12,
        title: 'Integration and Personal Practice',
        topics: ['Creating your wisdom synthesis', 'Daily practices from traditions', 'Building wisdom community', 'Living wisely with technology'],
      },
      {
        week: 13,
        title: 'Wisdom in Decision-Making',
        topics: ['Practical wisdom (phronesis)', 'Discernment across traditions', 'Long-term thinking', 'Wisdom councils and advisors'],
      },
      {
        week: 14,
        title: 'Your Wisdom Path Forward',
        topics: ['Personal philosophy statement', 'Wisdom practices for daily life', 'Teaching and sharing wisdom', 'Continuing the journey'],
      },
    ],
    requirements: ['Interest in world philosophies and religions', 'Open mind to diverse perspectives', 'Some experience with meditation or contemplative practices helpful'],
    outcomes: [
      'Apply ancient wisdom to modern technological dilemmas',
      'Develop cross-cultural frameworks for ethical living',
      'Master contemplative practices for digital age stress',
      'Build bridges between traditional wisdom and modern innovation',
    ],
    featured: false,
  },
  
  // History Courses
  {
    id: 'history-001',
    title: 'World War II: Global Perspectives',
    description: 'Examine WWII from multiple perspectives and understand its lasting impact on the modern world.',
    category: 'history',
    level: 'intermediate',
    duration: 16,
    hours: 64,
    lessons: 32,
    instructor: {
      id: 'inst-013',
      name: 'Prof. James Wilson',
      title: 'Military Historian & International Relations Expert',
      avatar: '/instructors/james-wilson.jpg',
      bio: 'Professor Wilson has spent 20 years researching and teaching about global conflicts and their lasting impacts on society.',
    },
    price: 399,
    rating: 4.8,
    reviews: 312,
    studentsEnrolled: 1924,
    language: ['en'],
    thumbnail: '/study/World War II Global Perspectives.jpg',
    lastUpdated: new Date('2024-09-01'),
    syllabus: [
      {
        week: 1,
        title: 'Origins and Causes',
        topics: ['Treaty of Versailles and its consequences', 'Rise of totalitarian regimes', 'Global economic factors', 'Failed peace efforts'],
      },
      {
        week: 2,
        title: 'The War in Europe Begins',
        topics: ['Nazi expansion strategy', 'The invasion of Poland', 'The Phoney War', 'Fall of France'],
      },
      {
        week: 3,
        title: 'The Battle of Britain and the Blitz',
        topics: ['Air warfare strategy', 'British resistance', 'Life during the Blitz', 'Turning point significance'],
      },
      {
        week: 4,
        title: 'Operation Barbarossa',
        topics: ['Hitler\'s fatal decision', 'The Eastern Front', 'Soviet resistance', 'Winter warfare'],
      },
      {
        week: 5,
        title: 'Pearl Harbor and the Pacific War',
        topics: ['Japanese expansion', 'American entry', 'Island-hopping strategy', 'The war at sea'],
      },
      {
        week: 6,
        title: 'The Holocaust',
        topics: ['Origins of genocide', 'Concentration camps', 'Resistance and rescue', 'Bearing witness'],
      },
      {
        week: 7,
        title: 'The Home Front',
        topics: ['War economies', 'Women in wartime', 'Propaganda and morale', 'Rationing and sacrifice'],
      },
      {
        week: 8,
        title: 'North Africa and Italy',
        topics: ['Desert warfare', 'Allied cooperation', 'Italian campaign', 'Strategic importance'],
      },
      {
        week: 9,
        title: 'D-Day and Liberation of Europe',
        topics: ['Planning the invasion', 'June 6, 1944', 'Battle of Normandy', 'Race to Berlin'],
      },
      {
        week: 10,
        title: 'The Pacific Island Campaigns',
        topics: ['Guadalcanal to Okinawa', 'Japanese resistance', 'Kamikaze tactics', 'Preparing for invasion'],
      },
      {
        week: 11,
        title: 'The Atomic Bomb',
        topics: ['Manhattan Project', 'Decision to use', 'Hiroshima and Nagasaki', 'Moral debates'],
      },
      {
        week: 12,
        title: 'End of the War',
        topics: ['German surrender', 'Japanese surrender', 'War crimes trials', 'Counting the cost'],
      },
      {
        week: 13,
        title: 'Reshaping the World',
        topics: ['United Nations formation', 'Cold War origins', 'Decolonization begins', 'Refugee crisis'],
      },
      {
        week: 14,
        title: 'Memory and Commemoration',
        topics: ['How nations remember', 'Memorials and museums', 'Survivor testimonies', 'Teaching the war'],
      },
      {
        week: 15,
        title: 'Alternative Perspectives',
        topics: ['Colonial troops\' contributions', 'Resistance movements', 'Civilian experiences', 'Forgotten theaters'],
      },
      {
        week: 16,
        title: 'Lessons for Today',
        topics: ['Preventing genocide', 'International cooperation', 'Human rights', 'Never again?'],
      },
    ],
    requirements: ['Basic understanding of 20th century history', 'Interest in global perspectives', 'Critical thinking skills'],
    outcomes: [
      'Understand WWII from multiple national perspectives',
      'Analyze the war\'s impact on modern geopolitics',
      'Evaluate historical sources critically',
      'Draw lessons for contemporary conflicts',
    ],
    featured: true,
  },
  
  // Literature Courses
  {
    id: 'literature-001',
    title: 'Shakespeare and the Renaissance',
    description: 'Dive deep into Shakespeare\'s works and their cultural context during the Renaissance period.',
    category: 'literature',
    level: 'intermediate',
    duration: 14,
    hours: 56,
    lessons: 28,
    instructor: {
      id: 'inst-014',
      name: 'Dr. Emily Chen',
      title: 'Renaissance Literature Scholar',
      avatar: '/instructors/emily-chen.jpg',
      bio: 'Dr. Chen specializes in Renaissance literature and has published extensively on Shakespeare\'s influence on modern storytelling.',
    },
    price: 349,
    rating: 4.9,
    reviews: 312,
    studentsEnrolled: 1567,
    language: ['en'],
    thumbnail: '/study/Shakespeare and the Renaissance.jpg',
    lastUpdated: new Date('2024-08-25'),
    syllabus: [
      {
        week: 1,
        title: 'Renaissance Context',
        topics: ['Historical and cultural background', 'The English Renaissance', 'Theater in Shakespeare\'s time', 'Language and society'],
      },
      {
        week: 2,
        title: 'Shakespeare\'s Life and Times',
        topics: ['Biography and mystery', 'Stratford to London', 'The theater business', 'Authorship questions'],
      },
      {
        week: 3,
        title: 'Romeo and Juliet',
        topics: ['Love and tragedy', 'Family and society', 'Fate vs free will', 'Language of love'],
      },
      {
        week: 4,
        title: 'Hamlet',
        topics: ['The melancholy prince', 'Revenge and delay', 'Madness real and feigned', 'To be or not to be'],
      },
      {
        week: 5,
        title: 'Macbeth',
        topics: ['Ambition and power', 'Prophecy and fate', 'Gender and violence', 'The supernatural'],
      },
      {
        week: 6,
        title: 'Othello',
        topics: ['Race and otherness', 'Jealousy and manipulation', 'Love and betrayal', 'Military and domestic'],
      },
      {
        week: 7,
        title: 'King Lear',
        topics: ['Aging and power', 'Family dynamics', 'Madness and insight', 'Nature vs nurture'],
      },
      {
        week: 8,
        title: 'A Midsummer Night\'s Dream',
        topics: ['Comedy and magic', 'Love\'s confusion', 'Dream and reality', 'Play within a play'],
      },
      {
        week: 9,
        title: 'The Tempest',
        topics: ['Power and forgiveness', 'Colonialism themes', 'Magic and art', 'Shakespeare\'s farewell'],
      },
      {
        week: 10,
        title: 'The Sonnets',
        topics: ['Love and time', 'Beauty and decay', 'The Dark Lady', 'Immortality through art'],
      },
      {
        week: 11,
        title: 'Performance and Interpretation',
        topics: ['From page to stage', 'Famous productions', 'Film adaptations', 'Global Shakespeare'],
      },
      {
        week: 12,
        title: 'Shakespeare\'s Language',
        topics: ['Iambic pentameter', 'Metaphor and imagery', 'Prose vs verse', 'Creating English'],
      },
      {
        week: 13,
        title: 'Contemporary Writers',
        topics: ['Marlowe and rivalry', 'Ben Jonson', 'Other Renaissance writers', 'Literary community'],
      },
      {
        week: 14,
        title: 'Shakespeare\'s Legacy',
        topics: ['Influence on literature', 'Cultural icon', 'Modern adaptations', 'Why Shakespeare matters'],
      },
    ],
    requirements: ['Basic knowledge of English literature', 'Interest in classical texts', 'Willingness to read extensively'],
    outcomes: [
      'Analyze Shakespeare\'s major works in context',
      'Understand Renaissance cultural and social dynamics',
      'Apply literary analysis techniques',
      'Connect classical themes to modern issues',
    ],
    featured: true,
  },
  
  // Art History Courses
  {
    id: 'art-history-001',
    title: 'Art of the Italian Renaissance',
    description: 'Discover the masterpieces and techniques that defined Renaissance art in Italy.',
    category: 'art-history',
    level: 'beginner',
    duration: 10,
    hours: 40,
    lessons: 20,
    instructor: {
      id: 'inst-015',
      name: 'Dr. Marco Rossi',
      title: 'Renaissance Art Historian',
      avatar: '/instructors/marco-rossi.jpg',
      bio: 'Dr. Rossi has curated exhibitions at major museums and brings deep expertise in Italian Renaissance art.',
    },
    price: 279,
    rating: 4.7,
    reviews: 312,
    studentsEnrolled: 1234,
    language: ['en'],
    thumbnail: '/study/Art of the Italian Renaissance.jpg',
    lastUpdated: new Date('2024-08-20'),
    syllabus: [
      {
        week: 1,
        title: 'Introduction to Renaissance Art',
        topics: ['What is the Renaissance?', 'Historical context', 'Patronage system', 'Art as status symbol'],
      },
      {
        week: 2,
        title: 'Early Renaissance Pioneers',
        topics: ['Giotto and naturalism', 'Brunelleschi and perspective', 'Donatello\'s sculptures', 'Masaccio\'s innovations'],
      },
      {
        week: 3,
        title: 'Florence: Cradle of Renaissance',
        topics: ['The Medici family', 'Artistic workshops', 'Civic pride and art', 'Cathedral and baptistery'],
      },
      {
        week: 4,
        title: 'Botticelli and Mythology',
        topics: ['Birth of Venus', 'Primavera', 'Neoplatonism in art', 'Sacred and profane'],
      },
      {
        week: 5,
        title: 'Leonardo da Vinci',
        topics: ['The Renaissance man', 'Scientific observation', 'Mona Lisa mysteries', 'Unfinished masterpieces'],
      },
      {
        week: 6,
        title: 'Michelangelo: Sculptor and Painter',
        topics: ['David and heroic ideals', 'Sistine Chapel ceiling', 'The Last Judgment', 'Terribilità concept'],
      },
      {
        week: 7,
        title: 'Raphael and Harmony',
        topics: ['School of Athens', 'Madonnas', 'Vatican frescoes', 'Perfect balance'],
      },
      {
        week: 8,
        title: 'Venetian Renaissance',
        topics: ['Bellini family', 'Giorgione\'s poetry', 'Titian\'s color', 'Light and atmosphere'],
      },
      {
        week: 9,
        title: 'Techniques and Materials',
        topics: ['Fresco painting', 'Oil painting development', 'Sculpture methods', 'Drawing as foundation'],
      },
      {
        week: 10,
        title: 'Architecture and Urban Design',
        topics: ['Brunelleschi\'s dome', 'Alberti\'s theories', 'Ideal city planning', 'Palladio\'s villas'],
      },
    ],
    requirements: ['No prior art history knowledge required', 'Interest in visual arts', 'Basic understanding of European history helpful'],
    outcomes: [
      'Identify major Renaissance artists and their works',
      'Understand artistic techniques and innovations',
      'Analyze art in historical context',
      'Appreciate the lasting influence of Renaissance art',
    ],
    featured: true,
  },
  
  // Additional Philosophy Course
  {
    id: 'philosophy-003',
    title: 'Introduction to Ancient Philosophy',
    description: 'Explore the foundational ideas of Western philosophy from ancient Greece to the Hellenistic period.',
    category: 'philosophy',
    level: 'beginner',
    duration: 12,
    hours: 48,
    lessons: 24,
    instructor: {
      id: 'inst-016',
      name: 'Dr. Sarah Mitchell',
      title: 'Classical Philosophy Scholar',
      avatar: '/instructors/sarah-mitchell.jpg',
      bio: 'Dr. Mitchell specializes in ancient Greek philosophy and has translated several classical texts.',
    },
    price: 299,
    rating: 4.9,
    reviews: 312,
    studentsEnrolled: 2847,
    language: ['en'],
    thumbnail: '/study/Introduction to Ancient Philosophy.jpg',
    lastUpdated: new Date('2024-09-05'),
    syllabus: [
      {
        week: 1,
        title: 'The Pre-Socratic Philosophers',
        topics: ['Thales and the search for first principles', 'Heraclitus and the doctrine of flux', 'Parmenides and the problem of change', 'Atomism: Democritus and material reality'],
      },
      {
        week: 2,
        title: 'The Sophists and Relativism',
        topics: ['Protagoras: "Man is the measure of all things"', 'Gorgias and the power of rhetoric', 'The sophistic challenge to objective truth', 'Relevance to modern post-truth era'],
      },
      {
        week: 3,
        title: 'Socrates and the Examined Life',
        topics: ['The Socratic method and questioning', 'Knowledge and ignorance: "I know that I know nothing"', 'The trial and death of Socrates', 'Applying Socratic inquiry to modern problems'],
      },
      {
        week: 4,
        title: 'Plato\'s Theory of Forms',
        topics: ['The allegory of the cave', 'The divided line and levels of reality', 'The Form of the Good', 'Virtual reality and Plato\'s cave today'],
      },
      {
        week: 5,
        title: 'Plato\'s Republic and Justice',
        topics: ['The ideal state and the soul', 'The philosopher-king concept', 'Justice in the individual and society', 'Modern applications of Platonic political thought'],
      },
      {
        week: 6,
        title: 'Aristotle\'s Logic and Science',
        topics: ['The Organon and formal logic', 'Causation and the four causes', 'Scientific method in ancient Greece', 'Aristotelian logic in AI and computing'],
      },
      {
        week: 7,
        title: 'Aristotle\'s Ethics',
        topics: ['The concept of eudaimonia (flourishing)', 'Virtue ethics and the golden mean', 'Practical wisdom (phronesis)', 'Aristotelian ethics in professional life'],
      },
      {
        week: 8,
        title: 'Aristotle\'s Politics and Poetics',
        topics: ['Humans as political animals', 'Forms of government and constitutions', 'Art, tragedy, and catharsis', 'Community and storytelling in digital age'],
      },
      {
        week: 9,
        title: 'Hellenistic Philosophy: Stoicism',
        topics: ['Origins and development of Stoicism', 'Physics, logic, and ethics', 'Key Stoic texts and thinkers', 'Stoicism\'s modern resurgence'],
      },
      {
        week: 10,
        title: 'Hellenistic Philosophy: Epicureanism',
        topics: ['Epicurus and the pursuit of pleasure', 'Atomism and the fear of death', 'The garden and philosophical community', 'Epicurean wisdom for consumer culture'],
      },
      {
        week: 11,
        title: 'Skepticism and Cynicism',
        topics: ['Pyrrho and ancient skepticism', 'Diogenes and the Cynic lifestyle', 'Challenging social conventions', 'Skepticism in the age of information'],
      },
      {
        week: 12,
        title: 'Legacy and Modern Applications',
        topics: ['How ancient philosophy shapes modern thought', 'Ancient wisdom for contemporary challenges', 'Building your philosophical toolkit', 'Creating a personal philosophy of life'],
      },
    ],
    requirements: ['No prior philosophy knowledge required', 'Interest in fundamental questions', 'Willingness to engage with complex ideas'],
    outcomes: [
      'Understand key concepts from Socrates, Plato, and Aristotle',
      'Apply ancient wisdom to modern problems',
      'Develop critical thinking skills',
      'Engage in philosophical dialogue',
    ],
    featured: true,
  },
];

export function getFeaturedCourses() {
  return mockCourses.filter(course => course.featured);
}

export function getCoursesByCategory(category: string) {
  return mockCourses.filter(course => course.category === category);
}

export function getCourseById(id: string) {
  return mockCourses.find(course => course.id === id);
}

export function getPopularCourses(limit: number = 4) {
  return [...mockCourses]
    .sort((a, b) => b.studentsEnrolled - a.studentsEnrolled)
    .slice(0, limit);
}

export function getRecentCourses(limit: number = 4) {
  return [...mockCourses]
    .sort((a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime())
    .slice(0, limit);
}