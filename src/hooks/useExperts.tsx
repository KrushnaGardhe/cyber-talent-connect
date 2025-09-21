import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Expert {
  id: string;
  display_name: string;
  user_type: string;
  location?: string;
  hourly_rate?: number;
  rating: number;
  review_count: number;
  completed_projects: number;
  response_time?: string;
  is_verified: boolean;
  skills?: string[];
  certifications?: string[];
  bio?: string;
  avatar_url?: string;
}

interface FilterOptions {
  searchTerm: string;
  selectedSkill: string;
  selectedLocation: string;
  priceRange: string;
  sortBy: string;
}

export const useExperts = () => {
  const [experts, setExperts] = useState<Expert[]>([]);
  const [filteredExperts, setFilteredExperts] = useState<Expert[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchExperts = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_type', 'expert');

      if (error) throw error;

      setExperts(data || []);
      setFilteredExperts(data || []);
    } catch (error: any) {
      console.error('Error fetching experts:', error);
      toast({
        title: "Error loading experts",
        description: "Failed to load expert data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = (filters: FilterOptions) => {
    let filtered = [...experts];

    // Search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(expert => 
        expert.display_name?.toLowerCase().includes(searchLower) ||
        expert.bio?.toLowerCase().includes(searchLower) ||
        expert.skills?.some(skill => skill.toLowerCase().includes(searchLower))
      );
    }

    // Skill filter
    if (filters.selectedSkill && filters.selectedSkill !== 'all-skills') {
      filtered = filtered.filter(expert =>
        expert.skills?.some(skill => 
          skill.toLowerCase().includes(filters.selectedSkill.toLowerCase())
        )
      );
    }

    // Location filter
    if (filters.selectedLocation && filters.selectedLocation !== 'all-locations') {
      filtered = filtered.filter(expert =>
        expert.location?.toLowerCase().includes(filters.selectedLocation.toLowerCase())
      );
    }

    // Price range filter
    if (filters.priceRange && filters.priceRange !== 'any-rate') {
      const rate = expert => expert.hourly_rate || 0;
      
      switch (filters.priceRange) {
        case '0-50':
          filtered = filtered.filter(expert => rate(expert) >= 0 && rate(expert) <= 50);
          break;
        case '50-100':
          filtered = filtered.filter(expert => rate(expert) > 50 && rate(expert) <= 100);
          break;
        case '100-150':
          filtered = filtered.filter(expert => rate(expert) > 100 && rate(expert) <= 150);
          break;
        case '150+':
          filtered = filtered.filter(expert => rate(expert) > 150);
          break;
      }
    }

    // Sorting
    switch (filters.sortBy) {
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'price-low':
        filtered.sort((a, b) => (a.hourly_rate || 0) - (b.hourly_rate || 0));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.hourly_rate || 0) - (a.hourly_rate || 0));
        break;
      case 'reviews':
        filtered.sort((a, b) => (b.review_count || 0) - (a.review_count || 0));
        break;
      case 'recent':
        // Sort by completed projects as a proxy for activity
        filtered.sort((a, b) => (b.completed_projects || 0) - (a.completed_projects || 0));
        break;
      default:
        // Default to rating
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    setFilteredExperts(filtered);
  };

  useEffect(() => {
    fetchExperts();
  }, []);

  return {
    experts: filteredExperts,
    loading,
    applyFilters,
    refetch: fetchExperts,
  };
};