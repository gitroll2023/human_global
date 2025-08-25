export interface AIPartner {
  id: string;
  name: string;
  description: string;
  category: 'research' | 'platform' | 'enterprise' | 'startup';
  logoUrl: string;
  website: string;
  partnership: string;
}

export const aiPartners: AIPartner[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'Leading AI research and deployment company',
    category: 'research',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png',
    website: 'https://openai.com',
    partnership: 'AI Ethics & Curriculum Development'
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    description: 'AI safety and research company',
    category: 'research',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/512px-Anthropic_logo.svg.png',
    website: 'https://anthropic.com',
    partnership: 'AI Safety Education & Ethics Training'
  },
  {
    id: 'nvidia',
    name: 'NVIDIA AI',
    description: 'Accelerating AI computing worldwide',
    category: 'enterprise',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/512px-NVIDIA_logo.svg.png',
    website: 'https://nvidia.com/ai',
    partnership: 'AI Infrastructure & GPU Training'
  },
  {
    id: 'databricks',
    name: 'Databricks',
    description: 'Data and AI platform for enterprises',
    category: 'enterprise',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Databricks_Logo.png/512px-Databricks_Logo.png',
    website: 'https://databricks.com',
    partnership: 'Data Science & ML Education'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description: 'The AI community building the future',
    category: 'platform',
    logoUrl: 'https://uptime-storage.s3.amazonaws.com/logos/d32f5c39b694f3e64d29fc2c9b988cdd.png',
    website: 'https://huggingface.co',
    partnership: 'Open Source AI Education Platform'
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Run AI models in the cloud',
    category: 'platform',
    logoUrl: 'https://avatars.githubusercontent.com/u/44867521?s=280&v=4',
    website: 'https://replicate.com',
    partnership: 'AI Model Deployment & Training'
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI-powered workspace and productivity',
    category: 'enterprise',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/512px-Notion-logo.svg.png',
    website: 'https://notion.so',
    partnership: 'AI Productivity & Knowledge Management'
  }
];

export function getPartnersByCategory(category: string) {
  return aiPartners.filter(partner => partner.category === category);
}

export function getFeaturedPartners(limit: number = 6) {
  return aiPartners.slice(0, limit);
}