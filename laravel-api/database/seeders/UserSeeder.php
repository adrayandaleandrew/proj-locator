<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User; 
use Illuminate\Support\Facades\Hash; 

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        User::create([
            'name' => 'admin account',
            'email' => 'admin-test@mailnesia.com',
            'password' => Hash::make('Passw0rd!'), // Hashing the password
        ]);

        
    }
}