# Supabase Setup Guide for Demo Booking Form

## 🚀 Quick Setup Steps

### 1. Create Supabase Project
- Go to [supabase.com](https://supabase.com)
- Create a new project or use existing one
- Note your project URL and anon key

### 2. Run Database Schema
- Go to your Supabase project dashboard
- Navigate to **SQL Editor**
- Copy and paste the contents of `supabase/demo-bookings-schema.sql`
- Click **Run** to execute the SQL

### 3. Verify Table Creation
- Go to **Table Editor** in your Supabase dashboard
- You should see `demo_bookings` table
- Check that all columns are created correctly

### 4. Test the Form
- Refresh your website
- Open the "Book a Demo" popup
- Fill out the form and submit
- Check browser console for any error messages

## 🔧 Troubleshooting

### Common Issues:

#### 1. "Table not found" Error
- **Solution**: Run the SQL schema in Supabase SQL Editor
- **Check**: Verify table exists in Table Editor

#### 2. "Permission denied" Error
- **Solution**: Check RLS policies are enabled
- **Check**: Go to Authentication > Policies in Supabase

#### 3. "Connection failed" Error
- **Solution**: Verify URL and key in `src/integrations/supabase/client.ts`
- **Check**: Ensure keys match your project settings

### Debug Steps:

1. **Open Browser Console** (F12)
2. **Submit the form** and check for error messages
3. **Look for Supabase errors** with detailed information
4. **Check Network tab** for failed API calls

## 📋 Required Supabase Configuration

### Environment Variables (Optional)
Create `.env.local` file:
```bash
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Database Permissions
- **RLS Enabled**: Yes
- **Anonymous Access**: Insert only
- **Service Role**: Full access

### Table Structure
```sql
demo_bookings:
- id (UUID, Primary Key)
- created_at (Timestamp)
- updated_at (Timestamp)
- name (Text, Required)
- email (Text, Required)
- phone (Text, Optional)
- company (Text, Optional)
- message (Text, Optional)
- preferred_date (Date, Required)
- preferred_time (Time, Required)
- service (Text, Required)
- status (Text, Default: 'new')
- metadata (JSONB)
```

## 🧪 Testing

### Test Data
```sql
-- Insert test booking
INSERT INTO demo_bookings (name, email, preferred_date, preferred_time, service)
VALUES ('Test User', 'test@example.com', '2024-01-15', '10:00:00', 'ai-solutions');
```

### Verify in Supabase
- Check **Table Editor** for new records
- Monitor **Logs** for any errors
- Test **RLS policies** with different user roles

## 📞 Support

If you're still having issues:
1. Check browser console for detailed error messages
2. Verify Supabase project settings
3. Ensure database table exists and has correct structure
4. Check RLS policies are properly configured

## 🔒 Security Notes

- **Anon key** is safe to expose (public)
- **Service role key** should never be exposed
- **RLS policies** ensure data security
- **Input validation** prevents malicious data
