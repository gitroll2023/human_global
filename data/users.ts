export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
  bio?: string;
  enrolledCourses?: string[];
  teachingCourses?: string[];
  completedCourses?: string[];
  country: string;
  language: string;
  joinedDate: Date;
  lastActive: Date;
  progress?: {
    courseId: string;
    completedLessons: number;
    totalLessons: number;
    lastAccessed: Date;
  }[];
}

export const mockUsers: User[] = [
  // Students
  {
    id: 'user-001',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'student',
    avatar: '/avatars/john-doe.jpg',
    bio: 'Passionate learner interested in philosophy and history.',
    enrolledCourses: ['phil-101', 'hist-101', 'lit-101'],
    completedCourses: ['cult-101'],
    country: 'United States',
    language: 'en',
    joinedDate: new Date('2023-09-15'),
    lastActive: new Date('2024-02-20'),
    progress: [
      {
        courseId: 'phil-101',
        completedLessons: 24,
        totalLessons: 36,
        lastAccessed: new Date('2024-02-20'),
      },
      {
        courseId: 'hist-101',
        completedLessons: 15,
        totalLessons: 42,
        lastAccessed: new Date('2024-02-18'),
      },
      {
        courseId: 'lit-101',
        completedLessons: 8,
        totalLessons: 36,
        lastAccessed: new Date('2024-02-15'),
      },
    ],
  },
  {
    id: 'user-002',
    email: 'sarah.kim@example.com',
    firstName: 'Sarah',
    lastName: 'Kim',
    role: 'student',
    avatar: '/avatars/sarah-kim.jpg',
    bio: 'Literature enthusiast and aspiring writer from Seoul.',
    enrolledCourses: ['lit-101', 'lit-203', 'art-101'],
    completedCourses: ['ling-101', 'cult-101'],
    country: 'South Korea',
    language: 'ko',
    joinedDate: new Date('2023-11-20'),
    lastActive: new Date('2024-02-21'),
    progress: [
      {
        courseId: 'lit-101',
        completedLessons: 30,
        totalLessons: 36,
        lastAccessed: new Date('2024-02-21'),
      },
      {
        courseId: 'lit-203',
        completedLessons: 12,
        totalLessons: 30,
        lastAccessed: new Date('2024-02-19'),
      },
      {
        courseId: 'art-101',
        completedLessons: 5,
        totalLessons: 42,
        lastAccessed: new Date('2024-02-17'),
      },
    ],
  },
  {
    id: 'user-003',
    email: 'somchai.wong@example.com',
    firstName: 'Somchai',
    lastName: 'Wong',
    role: 'student',
    avatar: '/avatars/somchai-wong.jpg',
    bio: 'History teacher expanding knowledge in humanities.',
    enrolledCourses: ['hist-101', 'hist-202', 'phil-301'],
    completedCourses: [],
    country: 'Thailand',
    language: 'th',
    joinedDate: new Date('2024-01-10'),
    lastActive: new Date('2024-02-21'),
    progress: [
      {
        courseId: 'hist-101',
        completedLessons: 20,
        totalLessons: 42,
        lastAccessed: new Date('2024-02-21'),
      },
      {
        courseId: 'hist-202',
        completedLessons: 10,
        totalLessons: 36,
        lastAccessed: new Date('2024-02-20'),
      },
      {
        courseId: 'phil-301',
        completedLessons: 3,
        totalLessons: 30,
        lastAccessed: new Date('2024-02-18'),
      },
    ],
  },

  // Instructors
  {
    id: 'inst-001',
    email: 'sarah.mitchell@institute.edu',
    firstName: 'Sarah',
    lastName: 'Mitchell',
    role: 'instructor',
    avatar: '/instructors/sarah-mitchell.jpg',
    bio: 'Dr. Mitchell has been teaching philosophy for over 20 years with specialization in ethics and metaphysics.',
    teachingCourses: ['phil-101'],
    country: 'United Kingdom',
    language: 'en',
    joinedDate: new Date('2023-08-01'),
    lastActive: new Date('2024-02-21'),
  },
  {
    id: 'inst-002',
    email: 'michael.chen@institute.edu',
    firstName: 'Michael',
    lastName: 'Chen',
    role: 'instructor',
    avatar: '/instructors/michael-chen.jpg',
    bio: 'Professor Chen specializes in applied ethics and has published numerous papers on bioethics and environmental ethics.',
    teachingCourses: ['phil-201'],
    country: 'Canada',
    language: 'en',
    joinedDate: new Date('2023-08-15'),
    lastActive: new Date('2024-02-20'),
  },
  {
    id: 'inst-004',
    email: 'kim.sunghee@institute.edu',
    firstName: 'Sung-hee',
    lastName: 'Kim',
    role: 'instructor',
    avatar: '/instructors/kim-sunghee.jpg',
    bio: 'Professor Kim specializes in East Asian history and modernization studies.',
    teachingCourses: ['hist-202'],
    country: 'South Korea',
    language: 'ko',
    joinedDate: new Date('2023-09-01'),
    lastActive: new Date('2024-02-21'),
  },

  // Admin
  {
    id: 'admin-001',
    email: 'admin@institute.edu',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    country: 'United States',
    language: 'en',
    joinedDate: new Date('2023-07-01'),
    lastActive: new Date('2024-02-21'),
  },
];

export function getUserById(id: string) {
  return mockUsers.find(user => user.id === id);
}

export function getStudents() {
  return mockUsers.filter(user => user.role === 'student');
}

export function getInstructors() {
  return mockUsers.filter(user => user.role === 'instructor');
}

export function getStudentsByCourseName(courseId: string) {
  return mockUsers.filter(
    user => user.role === 'student' && user.enrolledCourses?.includes(courseId)
  );
}

export const mockCurrentUser: User = {
  id: 'user-001',
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  role: 'student',
  avatar: '/avatars/john-doe.jpg',
  bio: 'Passionate learner interested in philosophy and history.',
  enrolledCourses: ['phil-101', 'hist-101', 'lit-101'],
  completedCourses: ['cult-101'],
  country: 'United States',
  language: 'en',
  joinedDate: new Date('2023-09-15'),
  lastActive: new Date('2024-02-20'),
  progress: [
    {
      courseId: 'phil-101',
      completedLessons: 24,
      totalLessons: 36,
      lastAccessed: new Date('2024-02-20'),
    },
    {
      courseId: 'hist-101',
      completedLessons: 15,
      totalLessons: 42,
      lastAccessed: new Date('2024-02-18'),
    },
    {
      courseId: 'lit-101',
      completedLessons: 8,
      totalLessons: 36,
      lastAccessed: new Date('2024-02-15'),
    },
  ],
};