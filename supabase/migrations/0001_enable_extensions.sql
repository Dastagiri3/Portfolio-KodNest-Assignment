/*
  # Enable required database extensions
  
  Extensions needed:
  - pgcrypto: For gen_random_uuid() function used in contact_messages table
*/

-- Enable pgcrypto extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

