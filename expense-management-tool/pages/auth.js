import { useState } from 'react';
import supabase from '../lib/supabaseClient';

export default function Auth() {
    const [email, setEmail] = useState('');

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithOtp({ email });
        if (!error) alert('Check your email for the login link!');
    };

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <button onClick={handleLogin}>Send Magic Link</button>
        </div>
    );
}