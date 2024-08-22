'use client';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface LoginFormState {
  username: string;
  password: string;
  message: string;
}

export default function Login() {
  const [formData, setFormData] = useState<LoginFormState>({
    username: '',
    password: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        username: formData.username,
        password: formData.password
      });
      setFormData({ ...formData, message: response.data.message });
    } catch (error: any) {
      setFormData({ ...formData, message: error.response.data.message });
    }
  };

  return (
    <div  className='min-h-screen flex flex-col gap-[10px] items-center justify-center px-[30px]'>
      <form className='flex flex-col gap-[20px]' onSubmit={handleSubmit}>
        <input className='border md:w-[500px] w-full px-[10px] py-[10px] text-22px rounded-md'
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input className='border md:w-[500px] w-full px-[10px] py-[10px] text-22px rounded-md'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button className='md:w-[500px] w-[300px] bg-black text-white px-[10px] py-[10px] rounded-md' type="submit">Login</button>
      </form>
      {formData.message && <p>{formData.message}</p>}
      <Link href='/signup'>Dont have an Account? <span className='text-[blue] underline'>Signup</span></Link>
      <Link className='md:w-[500px] w-[300px] bg-black text-white flex items-center justify-center py-[20px] rounded-md' href='/datafetching'>Api DataFetching Task</Link>
    </div>
  );
}