import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type DemoBookingInsert = Database['public']['Tables']['demo_bookings']['Insert'];

export interface DemoBookingFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  preferredDate: string;
  preferredTime: string;
  service: 'ai-solutions' | 'web-development' | 'custom-solution';
}

export interface DemoBookingResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export class DemoBookingService {
  /**
   * Submit a demo booking request
   */
  static async submitBooking(formData: DemoBookingFormData): Promise<DemoBookingResponse> {
    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.preferredDate || !formData.preferredTime || !formData.service) {
        return {
          success: false,
          error: 'Missing required fields'
        };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return {
          success: false,
          error: 'Invalid email format'
        };
      }

      // Prepare data for Supabase
      const bookingData: DemoBookingInsert = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone?.trim() || null,
        company: formData.company?.trim() || null,
        message: formData.message?.trim() || null,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        service: formData.service,
        status: 'new',
        metadata: {
          source: 'website',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        }
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('demo_bookings')
        .insert(bookingData)
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        
        // Handle specific error cases
        if (error.code === '23505') {
          return {
            success: false,
            error: 'A booking already exists for this time slot. Please choose a different time.'
          };
        }
        
        if (error.code === '23514') {
          return {
            success: false,
            error: 'Invalid data provided. Please check your information and try again.'
          };
        }

        return {
          success: false,
          error: 'Failed to submit booking. Please try again later.'
        };
      }

      return {
        success: true,
        data: data
      };

    } catch (error) {
      console.error('Demo booking error:', error);
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again later.'
      };
    }
  }

  /**
   * Check if a time slot is available
   */
  static async checkAvailability(date: string, time: string, service: string): Promise<boolean> {
    try {
      const { count, error } = await supabase
        .from('demo_bookings')
        .select('*', { count: 'exact', head: true })
        .eq('preferred_date', date)
        .eq('preferred_time', time)
        .eq('service', service)
        .eq('status', 'new');

      if (error) {
        console.error('Availability check error:', error);
        return false;
      }

      // Return true if slot is available (count === 0)
      return count === 0;
    } catch (error) {
      console.error('Availability check error:', error);
      return false;
    }
  }

  /**
   * Get available time slots for a specific date and service
   */
  static async getAvailableSlots(date: string, service: string): Promise<string[]> {
    try {
      const allTimeSlots = [
        '09:00', '10:00', '11:00', '12:00', 
        '13:00', '14:00', '15:00', '16:00'
      ];

      const { data, error } = await supabase
        .from('demo_bookings')
        .select('preferred_time')
        .eq('preferred_date', date)
        .eq('service', service)
        .eq('status', 'new');

      if (error) {
        console.error('Get available slots error:', error);
        return allTimeSlots; // Return all slots if error
      }

      const bookedTimes = data?.map(booking => booking.preferred_time) || [];
      const availableSlots = allTimeSlots.filter(time => !bookedTimes.includes(time));

      return availableSlots;
    } catch (error) {
      console.error('Get available slots error:', error);
      return ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
    }
  }
}
