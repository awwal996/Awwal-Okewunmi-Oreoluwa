// Supabase client configuration
// This will load data from your Supabase database

// CDN import for Supabase (no npm install needed)
const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // Replace with your project URL
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your anon key

let supabaseClient = null;

// Initialize Supabase client
export async function initSupabase() {
  if (supabaseClient) return supabaseClient;
  
  // Load Supabase from CDN if not already loaded
  if (typeof window.supabase === 'undefined') {
    await loadSupabaseScript();
  }
  
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabaseClient;
  } catch (error) {
    console.warn('Supabase not configured. Using static content.');
    return null;
  }
}

// Load Supabase library from CDN
function loadSupabaseScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.0/dist/umd/supabase.min.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Fetch projects from Supabase
export async function fetchProjects() {
  const client = await initSupabase();
  if (!client) return null;
  
  try {
    const { data, error } = await client
      .from('projects')
      .select('*')
      .order('order_index', { ascending: true });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return null;
  }
}

// Fetch websites from Supabase
export async function fetchWebsites() {
  const client = await initSupabase();
  if (!client) return null;
  
  try {
    const { data, error } = await client
      .from('websites')
      .select('*')
      .order('order_index', { ascending: true });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching websites:', error);
    return null;
  }
}

// Fetch testimonials from Supabase
export async function fetchTestimonials() {
  const client = await initSupabase();
  if (!client) return null;
  
  try {
    const { data, error } = await client
      .from('testimonials')
      .select('*')
      .order('order_index', { ascending: true });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return null;
  }
}

// Fetch all dynamic content
export async function fetchAllContent() {
  const [projects, websites, testimonials] = await Promise.all([
    fetchProjects(),
    fetchWebsites(),
    fetchTestimonials()
  ]);
  
  return {
    projects,
    websites,
    testimonials
  };
}
