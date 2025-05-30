'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache';

export async function addToWaitlist({ name, email }: { name: string; email: string }) {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('waitlist')
        .insert([{ name, email }]);

    if (error) {
        throw error;
    }
    revalidatePath('/');
    return data;
}
