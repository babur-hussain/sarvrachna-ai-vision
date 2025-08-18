import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type CustomSolutionInsert = Database['public']['Tables']['custom_solutions']['Insert'];

export interface CustomSolutionFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  requirements: string;
  additionalInfo: string;
}

export interface CustomSolutionResponse {
  success: boolean;
  error?: string;
  data?: any;
}

export class CustomSolutionService {
  static async submitInquiry(formData: CustomSolutionFormData): Promise<CustomSolutionResponse> {
    try {
      console.log('Submitting custom solution inquiry:', formData);

      const { data, error } = await supabase
        .from('custom_solutions')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || null,
          website: formData.website || null,
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          description: formData.description,
          requirements: formData.requirements || null,
          additional_info: formData.additionalInfo || null,
          status: 'new'
        })
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        
        // Handle specific error codes
        if (error.code === '23505') {
          return {
            success: false,
            error: 'An inquiry with this email already exists. Please use a different email or contact us directly.'
          };
        }
        
        if (error.code === '23514') {
          return {
            success: false,
            error: 'Please fill in all required fields correctly.'
          };
        }
        
        if (error.code === '42P01') {
          return {
            success: false,
            error: 'Service temporarily unavailable. Please try again later or contact us directly.'
          };
        }
        
        return {
          success: false,
          error: 'Failed to submit inquiry. Please try again later.'
        };
      }

      console.log('Custom solution inquiry submitted successfully:', data);
      
      return {
        success: true,
        data: data
      };
    } catch (err) {
      console.error('Unexpected error in CustomSolutionService:', err);
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again later.'
      };
    }
  }

  static async testConnection(): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('custom_solutions')
        .select('id')
        .limit(1);
      
      if (error) {
        console.error('Connection test failed:', error);
        return false;
      }
      
      return true;
    } catch (err) {
      console.error('Connection test error:', err);
      return false;
    }
  }

  static async getInquiries(): Promise<CustomSolutionResponse> {
    try {
      const { data, error } = await supabase
        .from('custom_solutions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching inquiries:', error);
        return {
          success: false,
          error: 'Failed to fetch inquiries.'
        };
      }

      return {
        success: true,
        data: data
      };
    } catch (err) {
      console.error('Error in getInquiries:', err);
      return {
        success: false,
        error: 'An unexpected error occurred.'
      };
    }
  }
}
